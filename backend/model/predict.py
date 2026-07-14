"""
predict.py
Loads the saved model and exposes predict_injury() for use by the Flask API.
"""

import os
import numpy as np
import joblib

BASE_DIR   = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "model.pkl")

# Cached payload so we only load from disk once per process
_payload = None


def _load():
    global _payload
    if _payload is None:
        if not os.path.exists(MODEL_PATH):
            raise FileNotFoundError(
                "model.pkl not found. Run  python model/train_model.py  first."
            )
        _payload = joblib.load(MODEL_PATH)
    return _payload


# ── Recommendation messages per diagnosis ────────────────────────────────────
RECOMMENDATIONS = {
    "fracture": (
        "⚠️  High likelihood of a fracture. Please visit an emergency department or "
        "orthopaedic clinic immediately. Do NOT put weight on the injured area. "
        "Immobilise the limb and apply ice wrapped in cloth."
    ),
    "sprain": (
        "🟡  Likely a sprain. Follow R.I.C.E. — Rest, Ice (20 min every 2 hrs), "
        "Compression bandage, Elevation. If pain does not improve within 48 hrs "
        "or worsens, consult a doctor."
    ),
    "normal": (
        "✅  Minor injury detected. Rest the area, avoid strenuous activity for "
        "24–48 hrs and monitor for any worsening symptoms. No immediate medical "
        "visit required."
    ),
}

SEVERITY = {
    "fracture": "High",
    "sprain": "Medium",
    "normal": "Low"
}

CARE_STEPS = {
    "fracture": [
        "Immobilise the limb immediately using a splint or sling.",
        "Apply ice wrapped in a cloth to reduce swelling (do not apply ice directly).",
        "Keep the injured limb elevated if possible.",
        "Do NOT attempt to realign the bone or put any weight on it."
    ],
    "sprain": [
        "Rest: Avoid using the injured joint/limb.",
        "Ice: Apply ice packs wrapped in a towel for 15-20 minutes every 2-3 hours.",
        "Compression: Wrap with an elastic bandage (not too tight) to minimize swelling.",
        "Elevation: Elevate the injured area above the level of your heart."
    ],
    "normal": [
        "Rest the injured area and avoid strenuous activities for 24-48 hours.",
        "Apply cold compress if there is mild discomfort or swelling.",
        "Monitor symptoms for any changes or worsening pain."
    ]
}

WHEN_TO_SEEK_HELP = {
    "fracture": [
        "Seek immediate medical attention or visit an emergency room.",
        "Go immediately if there is visible deformity, bone piercing the skin, numbness, or loss of pulse in the limb."
    ],
    "sprain": [
        "If you cannot bear weight or stand after 48 hours.",
        "If the pain or swelling worsens significantly despite resting.",
        "If you experience numbness, tingling, or the limb feels cold."
    ],
    "normal": [
        "If pain does not start to subside after 3 days.",
        "If swelling or bruising suddenly increases.",
        "If you develop difficulty moving the joint or limb."
    ]
}

DIFFERENTIALS = {
    "fracture": [
        "Displaced Fracture",
        "Non-displaced Fracture",
        "Severe Grade 3 Ligament Sprain"
    ],
    "sprain": [
        "Ligament Sprain (Grade 1 or 2)",
        "Muscle Strain",
        "Minor hairline or avulsion fracture"
    ],
    "normal": [
        "Minor Bruising / Contusion",
        "Mild Muscle Strain",
        "Normal recovery post-minor trauma"
    ]
}


def predict_injury(symptoms: dict) -> dict:
    """
    Parameters
    ----------
    symptoms : dict
        Keys must match FEATURE_COLS in train_model.py.
        Example:
        {
            "pain_level": 8,
            "swelling": 2,
            "bruising": 1,
            "mobility_loss": 2,
            "point_tenderness": 1,
            "deformity_visible": 0,
            "injury_mechanism": 1,
            "weight_bearing_possible": 0
        }

    Returns
    -------
    dict with keys:
        diagnosis         – "fracture" | "sprain" | "normal"
        confidence        – float 0‒1
        probabilities     – dict of all class probabilities
        recommended_action – human-readable advice string
        severity          - "High" | "Medium" | "Low"
        care_steps        - list of strings
        when_to_seek_help - list of strings
        differential      - list of strings
    """
    payload = _load()
    model   = payload["model"]
    le      = payload["label_encoder"]
    features = payload["features"]

    # Build feature vector in the correct column order
    try:
        X = np.array([[float(symptoms[f]) for f in features]])
    except KeyError as e:
        raise ValueError(f"Missing symptom field: {e}")

    # Predict
    class_idx   = model.predict(X)[0]
    proba_arr   = model.predict_proba(X)[0]
    diagnosis   = le.inverse_transform([class_idx])[0]
    confidence  = float(proba_arr[class_idx])

    # All class probabilities as a labelled dict
    all_proba = {
        le.inverse_transform([i])[0]: round(float(p), 4)
        for i, p in enumerate(proba_arr)
    }

    return {
        "diagnosis":          diagnosis,
        "confidence":         round(confidence, 4),
        "probabilities":      all_proba,
        "recommended_action": RECOMMENDATIONS.get(diagnosis, "Please consult a doctor."),
        "severity":           SEVERITY.get(diagnosis, "Medium"),
        "care_steps":         CARE_STEPS.get(diagnosis, []),
        "when_to_seek_help":  WHEN_TO_SEEK_HELP.get(diagnosis, []),
        "differential":       DIFFERENTIALS.get(diagnosis, []),
    }
