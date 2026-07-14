/**
 * i18n.js - Multilingual Translation Dictionary
 * Supports English (en), Hindi (hi), Telugu (te), Tamil (ta), Marathi (mr)
 */

window.translations = {
    en: {
        // Nav & General
        "nav-how-it-works": "How It Works",
        "nav-assessment": "Assessment",
        "nav-examples": "Example Scenarios",
        "nav-ai-doctor": "AI Doctor",
        "nav-history": "History",
        "nav-logout": "Logout",
        "nav-start-triage": "Start Triage",
        "footer-text": "© 2026 FractureOrSprain? Clinical Triage Systems. Professional Grade Assessment.",
        "nav-welcome": "Welcome",

        // Hero Section
        "hero-badge": "AI-Powered Clinical Triage",
        "hero-title": "Is It a Fracture or a Sprain?",
        "hero-desc": "Get a rapid, professional-grade assessment in 2 minutes. Answer clinical questions or upload an X-ray for AI analysis to determine your next steps.",
        "hero-btn-check": "Start Symptom Check",
        "hero-btn-xray": "Upload X-Ray",

        // Stepper
        "step-1-label": "Injury Info",
        "step-2-label": "Severity",
        "step-3-label": "Analysis",

        // Clinical Questions - Location
        "q-location": "Where is the pain located?",
        "btn-ankle": "Ankle",
        "btn-wrist": "Wrist",
        "btn-knee": "Knee",
        "btn-finger": "Finger",
        "btn-other": "Other",

        // Time Q
        "q-time": "When did the injury occur?",
        "btn-time-1h": "Less than 1 hour",
        "btn-time-6h": "1-6 hours",
        "btn-time-24h": "6-24 hours",
        "btn-time-more": "More than 24 hours",

        // Mechanism Q
        "q-mechanism": "How did the injury happen?",
        "btn-mech-fall": "Fall",
        "btn-mech-twist": "Twist",
        "btn-mech-hit": "Direct Hit",

        // Bruising Q
        "q-bruising": "Is there any bruising?",
        "btn-yes": "Yes",
        "btn-no": "No",

        // Step 2 Questions
        "q-weight": "Can you bear weight on it?",
        "desc-weight-yes": "Can walk or stand with minimal support.",
        "desc-weight-no": "Unable to put any weight without severe pain.",
        "q-pain": "Rate your pain level (1-10)",
        "label-pain-mild": "Mild (1)",
        "label-pain-severe": "Severe (10)",
        "q-deformity": "Visible Deformity?",
        "desc-deformity": "Does the limb look out of place or angled abnormally?",
        "q-swelling": "Is there swelling?",
        "btn-swell-none": "None",
        "btn-swell-mild": "Mild",
        "btn-swell-mod": "Moderate",
        "btn-swell-sev": "Severe",
        "q-mobility": "Can you move it normally?",
        "btn-mob-normal": "Normal",
        "btn-mob-limited": "Limited",
        "btn-mob-none": "Cannot Move",
        "q-tenderness": "Does it hurt when you press on it?",
        "desc-tenderness": "Pain when touching the injured area",

        // Navigation Buttons
        "btn-next": "Next Step",
        "btn-prev": "Previous",
        "btn-new-assessment": "Start New Assessment",

        // Results Section
        "res-header": "Your Assessment Result",
        "res-subheader": "Based on your symptoms, here's our professional-grade analysis",
        "res-title": "Assessment Result",
        "res-analyzing": "Analyzing your symptoms...",
        "res-powered-by": "✓ Powered by ML Model (RandomForest)",
        "res-scroll-down": "Scroll down to see detailed recommendations",
        "res-er-warning": "⚠️ This is a medical emergency - Seek professional care immediately",
        "res-xray-disclaimer": "This is an AI preliminary analysis. Always consult a radiologist for official diagnosis.",

        // Dynamic Outputs / Badges
        "label-ai-diagnosis": "AI Diagnosis",
        "label-confidence": "Confidence",
        "label-severity": "Severity",
        "label-care-steps": "Recommended Care Steps",
        "label-when-help": "When to Seek Immediate Help",
        "label-differential": "Differential Diagnosis (Possible Conditions)",

        // X-Ray Upload
        "xray-header": "X-Ray Analysis",
        "xray-subheader": "Upload your X-ray image for AI-powered analysis",
        "xray-upload-click": "Click to upload X-ray image",
        "xray-formats": "Supports JPG, PNG, DICOM formats (Max 10MB)",
        "xray-btn-browse": "Browse Files",
        "xray-q-area": "Which area was X-rayed?",
        "xray-btn-analyze": "Analyze X-Ray",
        "xray-analyzing-title": "Analyzing X-Ray...",
        "xray-analyzing-desc": "Our AI is examining the image for fractures",

        // Diagnosis strings translation
        "diagnosis-fracture": "Fracture",
        "diagnosis-sprain": "Sprain",
        "diagnosis-normal": "Normal (No obvious fracture)",
        "severity-high": "High",
        "severity-medium": "Medium",
        "severity-low": "Low",

        // History page
        "hist-title": "Patient Diagnosis History",
        "hist-desc": "View your past clinical triage and X-Ray analysis records below.",
        "hist-empty": "No past diagnoses found. Start a new assessment on the home page!",
        "hist-loading": "Loading your history...",
        "hist-date": "Date",
        "hist-type": "Type",
        "hist-symptoms": "Symptoms",
        "hist-view-details": "View Details",
        "hist-hide-details": "Hide Details",
        "hist-back-home": "Back to Home",
        "hist-welcome": "Patient Dashboard"
    },
    hi: {
        // Nav & General
        "nav-how-it-works": "यह कैसे काम करता है",
        "nav-assessment": "मूल्यांकन",
        "nav-examples": "उदाहरण परिदृश्य",
        "nav-ai-doctor": "एआई डॉक्टर",
        "nav-history": "इतिहास",
        "nav-logout": "लॉग आउट",
        "nav-start-triage": "जांच शुरू करें",
        "footer-text": "© 2026 FractureOrSprain? क्लीनिकल ट्राइएज सिस्टम। व्यावसायिक श्रेणी मूल्यांकन।",
        "nav-welcome": "स्वागत हे",

        // Hero Section
        "hero-badge": "एआई-संचालित क्लीनिकल ट्राइएज",
        "hero-title": "क्या यह फ्रैक्चर है या मोच?",
        "hero-desc": "2 मिनट में तेजी से, व्यावसायिक श्रेणी का मूल्यांकन प्राप्त करें। क्लीनिकल सवालों के जवाब दें या एआई विश्लेषण के लिए एक्स-रे अपलोड करें ताकि अपने अगले कदम का निर्धारण किया जा सके।",
        "hero-btn-check": "लक्षणों की जांच शुरू करें",
        "hero-btn-xray": "एक्स-रे अपलोड करें",

        // Stepper
        "step-1-label": "चोट की जानकारी",
        "step-2-label": "गंभीरता",
        "step-3-label": "विश्लेषण",

        // Clinical Questions - Location
        "q-location": "दर्द कहाँ हो रहा है?",
        "btn-ankle": "टखना (Ankle)",
        "btn-wrist": "कलाई (Wrist)",
        "btn-knee": "घुटने (Knee)",
        "btn-finger": "उंगली (Finger)",
        "btn-other": "अन्य (Other)",

        // Time Q
        "q-time": "चोट कब लगी थी?",
        "btn-time-1h": "1 घंटे से कम",
        "btn-time-6h": "1-6 घंटे",
        "btn-time-24h": "6-24 घंटे",
        "btn-time-more": "24 घंटे से अधिक",

        // Mechanism Q
        "q-mechanism": "चोट कैसे लगी?",
        "btn-mech-fall": "गिरना",
        "btn-mech-twist": "मुड़ना",
        "btn-mech-hit": "सीधी चोट लगना",

        // Bruising Q
        "q-bruising": "क्या कोई नील (bruising) है?",
        "btn-yes": "हाँ",
        "btn-no": "नहीं",

        // Step 2 Questions
        "q-weight": "क्या आप उस पर वजन डाल सकते हैं?",
        "desc-weight-yes": "न्यूनतम सहारे के साथ चल या खड़े हो सकते हैं।",
        "desc-weight-no": "गंभीर दर्द के बिना कोई भी वजन डालने में असमर्थ।",
        "q-pain": "अपने दर्द के स्तर को आंकें (1-10)",
        "label-pain-mild": "हल्का (1)",
        "label-pain-severe": "गंभीर (10)",
        "q-deformity": "दिखाई देने वाली विकृति (Deformity)?",
        "desc-deformity": "क्या अंग अपनी जगह से हिला हुआ या असामान्य कोण पर दिखता है?",
        "q-swelling": "क्या सूजन है?",
        "btn-swell-none": "कोई नहीं",
        "btn-swell-mild": "हल्की",
        "btn-swell-mod": "मध्यम",
        "btn-swell-sev": "गंभीर",
        "q-mobility": "क्या आप इसे सामान्य रूप से हिला सकते हैं?",
        "btn-mob-normal": "सामान्य",
        "btn-mob-limited": "सीमित",
        "btn-mob-none": "हिला नहीं सकते",
        "q-tenderness": "क्या छूने या दबाने पर दर्द होता है?",
        "desc-tenderness": "चोट वाली जगह को छूने पर दर्द",

        // Navigation Buttons
        "btn-next": "अगला कदम",
        "btn-prev": "पिछला",
        "btn-new-assessment": "नया मूल्यांकन शुरू करें",

        // Results Section
        "res-header": "आपका मूल्यांकन परिणाम",
        "res-subheader": "आपके लक्षणों के आधार पर, यह हमारा व्यावसायिक विश्लेषण है",
        "res-title": "मूल्यांकन परिणाम",
        "res-analyzing": "आपके लक्षणों का विश्लेषण किया जा रहा है...",
        "res-powered-by": "✓ मशीन लर्निंग मॉडल द्वारा संचालित (RandomForest)",
        "res-scroll-down": "विस्तृत सिफारिशें देखने के लिए नीचे स्क्रॉल करें",
        "res-er-warning": "⚠️ यह एक आपातकालीन चिकित्सा स्थिति है - तुरंत डॉक्टर से संपर्क करें",
        "res-xray-disclaimer": "यह एआई प्रारंभिक विश्लेषण है। आधिकारिक निदान के लिए हमेशा रेडियोलॉजिस्ट से परामर्श लें।",

        // Dynamic Outputs / Badges
        "label-ai-diagnosis": "एआई निदान (Diagnosis)",
        "label-confidence": "सटीकता (Confidence)",
        "label-severity": "गंभीरता (Severity)",
        "label-care-steps": "अनुशंसित देखभाल के कदम",
        "label-when-help": "आपातकालीन सहायता कब लें",
        "label-differential": "संभावित अन्य स्थितियां (Differential Diagnosis)",

        // X-Ray Upload
        "xray-header": "एक्स-रे विश्लेषण",
        "xray-subheader": "एआई-संचालित विश्लेषण के लिए अपनी एक्स-रे छवि अपलोड करें",
        "xray-upload-click": "एक्स-रे छवि अपलोड करने के लिए क्लिक करें",
        "xray-formats": "JPG, PNG, DICOM स्वरूपों का समर्थन करता है (अधिकतम 10MB)",
        "xray-btn-browse": "फ़ाइलें चुनें",
        "xray-q-area": "किस क्षेत्र का एक्स-रे किया गया था?",
        "xray-btn-analyze": "एक्स-रे का विश्लेषण करें",
        "xray-analyzing-title": "एक्स-रे का विश्लेषण किया जा रहा है...",
        "xray-analyzing-desc": "हमारा एआई फ्रैक्चर के लिए छवि की जांच कर रहा है",

        // Diagnosis strings
        "diagnosis-fracture": "अस्थि-भंग (Fracture)",
        "diagnosis-sprain": "मोच (Sprain)",
        "diagnosis-normal": "सामान्य (कोई फ्रैक्चर नहीं)",
        "severity-high": "उच्च (High)",
        "severity-medium": "मध्यम (Medium)",
        "severity-low": "कम (Low)",

        // History page
        "hist-title": "रोगी का निदान इतिहास",
        "hist-desc": "नीचे अपने पिछले क्लीनिकल ट्राइएज और एक्स-रे विश्लेषण रिकॉर्ड देखें।",
        "hist-empty": "कोई पिछला निदान नहीं मिला। मुखपृष्ठ पर एक नया मूल्यांकन शुरू करें!",
        "hist-loading": "आपका इतिहास लोड किया जा रहा है...",
        "hist-date": "तारीख",
        "hist-type": "प्रकार",
        "hist-symptoms": "लक्षण",
        "hist-view-details": "विवरण देखें",
        "hist-hide-details": "विवरण छिपाएं",
        "hist-back-home": "मुख्य पृष्ठ पर वापस जाएँ",
        "hist-welcome": "रोगी डैशबोर्ड"
    },
    te: {
        // Nav & General
        "nav-how-it-works": "ఇది ఎలా పనిచేస్తుంది",
        "nav-assessment": "లక్షణాల అంచనా",
        "nav-examples": "ఉదాహరణలు",
        "nav-ai-doctor": "AI డాక్టర్",
        "nav-history": "చరిత్ర",
        "nav-logout": "లాగ్ అవుట్",
        "nav-start-triage": "అంచనా ప్రారంభించండి",
        "footer-text": "© 2026 FractureOrSprain? క్లినికల్ ట్రయేజ్ సిస్టమ్స్. ప్రొఫెషనల్ గ్రేడ్ అసెస్మెంట్.",
        "nav-welcome": "స్వాగతం",

        // Hero Section
        "hero-badge": "AI-ఆధారిత క్లినికల్ ట్రయేజ్",
        "hero-title": "ఇది ఫ్రాక్చరా లేదా మోకాలా?",
        "hero-desc": "2 నిమిషాల్లో ప్రొఫెషనల్ గ్రేడ్ అంచనా పొందండి. క్లినికల్ ప్రశ్నలకు సమాధానమివ్వండి లేదా తదుపరి చర్యల కోసం ఎక్స్-రే అప్‌లోడ్ చేయండి.",
        "hero-btn-check": "లక్షణాల తనిఖీ ప్రారంభించండి",
        "hero-btn-xray": "ఎక్స్-రే అప్‌లోడ్ చేయండి",

        // Stepper
        "step-1-label": "గాయం సమాచారం",
        "step-2-label": "తీव्रత",
        "step-3-label": "విశ్లేషణ",

        // Clinical Questions - Location
        "q-location": "నొప్పి ఎక్కడ ఉంది?",
        "btn-ankle": "మడమ (Ankle)",
        "btn-wrist": "మణికట్టు (Wrist)",
        "btn-knee": "మోకాలి (Knee)",
        "btn-finger": "వేలు (Finger)",
        "btn-other": "ఇతర (Other)",

        // Time Q
        "q-time": "గాయం ఎప్పుడు జరిగింది?",
        "btn-time-1h": "1 గంట కంటే తక్కువ",
        "btn-time-6h": "1-6 గంటలు",
        "btn-time-24h": "6-24 గంటలు",
        "btn-time-more": "24 గంటల కంటే ఎక్కువ",

        // Mechanism Q
        "q-mechanism": "గాయం ఎలా జరిగింది?",
        "btn-mech-fall": "పడటం వల్ల",
        "btn-mech-twist": "నొప్పిగా మడవడం",
        "btn-mech-hit": "నేరుగా తగలడం",

        // Bruising Q
        "q-bruising": "గాయం నల్లగా కమిలిందా?",
        "btn-yes": "అవును",
        "btn-no": "కాదు",

        // Step 2 Questions
        "q-weight": "మీరు దానిపై బరువు పెట్టగలరా?",
        "desc-weight-yes": "కనీస మద్దతుతో నడవగలరు లేదా నిలబడగలరు.",
        "desc-weight-no": "తీవ్రమైన నొప్పి లేకుండా బరువు పెట్టలేరు.",
        "q-pain": "మీ నొప్పి స్థాయిని అంచనా వేయండి (1-10)",
        "label-pain-mild": "తేలికపాటి (1)",
        "label-pain-severe": "తీవ్రమైన (10)",
        "q-deformity": "గాయం వైకల్యం కనిపిస్తोందా?",
        "desc-deformity": "ఎముక స్థానం తప్పినట్లు లేదా అసాధారణ కోణంలో కనిపిస్తోందా?",
        "q-swelling": "వాపు ఉందా?",
        "btn-swell-none": "లేదు",
        "btn-swell-mild": "కొద్దిగా",
        "btn-swell-mod": "మధ్యస్థంగా",
        "btn-swell-sev": "తీవ్రంగా",
        "q-mobility": "మీరు సాధారణంగా కదిలించగలరా?",
        "btn-mob-normal": "సాధారణం",
        "btn-mob-limited": "పరిమితం",
        "btn-mob-none": "కదల్చలేకపోవడం",
        "q-tenderness": "నొక్కినప్పుడు నొప్పి వస్తోందా?",
        "desc-tenderness": "గాయపడిన ప్రాంతాన్ని తాకినప్పుడు నొప్పి",

        // Navigation Buttons
        "btn-next": "తదుపరి దశ",
        "btn-prev": "మునుపటి",
        "btn-new-assessment": "కొత్త అంచనాను ప్రారంభించండి",

        // Results Section
        "res-header": "మీ ఫలితాలు",
        "res-subheader": "మీ లక్షణాల ఆధారంగా మా AI విశ్లేషణ",
        "res-title": "అంచనా ఫలితం",
        "res-analyzing": "మీ లక్షణాలను విశ్లేషిస్తున్నాము...",
        "res-powered-by": "✓ ML మోడల్ ద్వారా విశ్లేషించబడింది (RandomForest)",
        "res-scroll-down": "వివరణాత్మక సిఫార్సుల కోసం క్రిందికి స్క్రోల్ చేయండి",
        "res-er-warning": "⚠️ ఇది అత్యవసర పరిస్థితి - వెంటనే వైద్య సహాయం పొందండి",
        "res-xray-disclaimer": "ఇది కేవలం ప్రాథమిక విశ్లేషణ మాత్రమే. ధ్రువీకరణ కోసం వైద్యుడిని సంప్రదించండి.",

        // Dynamic Outputs
        "label-ai-diagnosis": "AI నిర్ధారణ (Diagnosis)",
        "label-confidence": "విశ్వసనీయత (Confidence)",
        "label-severity": "తీవ్రత (Severity)",
        "label-care-steps": "చేయవలసిన పనులు",
        "label-when-help": "ఎప్పుడు వెంటనే వెళ్ళాలి?",
        "label-differential": "ఇతర సంభావ్య సమస్యలు (Differential)",

        // X-Ray Upload
        "xray-header": "ఎక్స్-రే విశ్లేషణ",
        "xray-subheader": "AI విశ్లేషణ కోసం మీ ఎక్స్-రే చిత్రాన్ని అప్‌లోడ్ చేయండి",
        "xray-upload-click": "ఎక్స్-రే అప్‌లోడ్ చేయడానికి క్లిక్ చేయండి",
        "xray-formats": "JPG, PNG, DICOM లకు సపోర్ట్ చేస్తుంది (గరిష్టంగా 10MB)",
        "xray-btn-browse": "ఫైల్స్ బ్రౌజ్ చేయండి",
        "xray-q-area": "ఏ భాగానికి ఎక్స్-రే తీశారు?",
        "xray-btn-analyze": "ఎక్స్-రే విశ్లేషించు",
        "xray-analyzing-title": "విశ్లేషిస్తున్నాము...",
        "xray-analyzing-desc": "గాయాలను గుర్తించడానికి మా AI చిత్రాన్ని విశ్లేషిస్తోంది",

        // Diagnosis strings
        "diagnosis-fracture": "ఎముక విరగడం (Fracture)",
        "diagnosis-sprain": "నొప్పి/కీలు జారడం (Sprain)",
        "diagnosis-normal": "సాధారణం (ఎటువంటి ఫ్రాక్చర్ లేదు)",
        "severity-high": "అధికం (High)",
        "severity-medium": "మధ్యస్థం (Medium)",
        "severity-low": "తక్కువ (Low)",

        // History page
        "hist-title": "రోగి నిర్ధారణ చరిత్ర",
        "hist-desc": "మీ గత నివేదికలు క్రింద చూడవచ్చు.",
        "hist-empty": "గత రికార్డులు ఏవీ లేవు. కొత్త అంచనాను ప్రారంభించండి!",
        "hist-loading": "మీ సమాచారాన్ని లోడ్ చేస్తున్నాము...",
        "hist-date": "తేదీ",
        "hist-type": "రకం",
        "hist-symptoms": "లక్షణాలు",
        "hist-view-details": "వివరాలు చూడు",
        "hist-hide-details": "వివరాలు దాచు",
        "hist-back-home": "తిिरిగి హోమ్ పేజీకి",
        "hist-welcome": "పేషెంట్ డాష్‌బోర్డ్"
    },
    ta: {
        // Nav & General
        "nav-how-it-works": "இது எப்படி செயல்படுகிறது",
        "nav-assessment": "அறிகுறி மதிப்பீடு",
        "nav-examples": "உதாரணங்கள்",
        "nav-ai-doctor": "AI மருத்துவர்",
        "nav-history": "வரலாறு",
        "nav-logout": "வெளியேறு",
        "nav-start-triage": "மதிப்பீட்டைத் தொடங்கு",
        "footer-text": "© 2026 FractureOrSprain? மருத்துவ மதிப்பீட்டுத் தளம்.",
        "nav-welcome": "வரவேற்கிறோம்",

        // Hero Section
        "hero-badge": "AI-ஆற்றல் கொண்ட மருத்துவ மதிப்பீடு",
        "hero-title": "இது எலும்பு முறிவா அல்லது சுளுக்கா?",
        "hero-desc": "2 நிமிடங்களில் மருத்துவ மதிப்பீட்டைப் பெறுங்கள். கேள்விகளுக்குப் பதிலளிக்கவும் அல்லது எக்ஸ்-ரேவை அப்லோட் செய்யவும்.",
        "hero-btn-check": "அறிகுறிகளைச் சரிபார்க்கவும்",
        "hero-btn-xray": "எக்ஸ்-ரே அப்லோட் செய்யவும்",

        // Stepper
        "step-1-label": "காய விவரம்",
        "step-2-label": "தீவிரத்தன்மை",
        "step-3-label": "பகுப்பாய்வு",

        // Clinical Questions - Location
        "q-location": "வலி எங்குள்ளது?",
        "btn-ankle": "கணுக்கால் (Ankle)",
        "btn-wrist": "மணிக்கட்டு (Wrist)",
        "btn-knee": "முழங்கால் (Knee)",
        "btn-finger": "விரல் (Finger)",
        "btn-other": "பிற (Other)",

        // Time Q
        "q-time": "காயம் எப்போது ஏற்பட்டது?",
        "btn-time-1h": "1 மணி நேரத்திற்கும் குறைவாக",
        "btn-time-6h": "1-6 மணி நேரம்",
        "btn-time-24h": "6-24 மணி நேரம்",
        "btn-time-more": "24 மணி நேரத்திற்கு மேல்",

        // Mechanism Q
        "q-mechanism": "காயம் எப்படி ஏற்பட்டது?",
        "btn-mech-fall": "விழுந்ததால்",
        "btn-mech-twist": "சுளுக்குவதால்",
        "btn-mech-hit": "நேரடி அடி",

        // Bruising Q
        "q-bruising": "காயத்தில் வீக்கம் அல்லது நிறமாற்றம் உள்ளதா?",
        "btn-yes": "ஆம்",
        "btn-no": "இல்லை",

        // Step 2 Questions
        "q-weight": "உங்களால் அதன் மீது எடை வைக்க முடிகிறதா?",
        "desc-weight-yes": "குறைந்த ஆதரவுடன் நடக்க அல்லது நிற்க முடிகிறது.",
        "desc-weight-no": "வலி இல்லாமல் எடை வைக்கவே முடியாது.",
        "q-pain": "வலியின் அளவு (1-10)",
        "label-pain-mild": "குறைவு (1)",
        "label-pain-severe": "மிக அதிகம் (10)",
        "q-deformity": "மாற்றம் ஏதேனும் தெரிகிறதா?",
        "desc-deformity": "எலும்பு விலகியதாகவோ அல்லது வளைந்ததாகவோ தோன்றுகிறதா?",
        "q-swelling": "வீக்கம் உள்ளதா?",
        "btn-swell-none": "இல்லை",
        "btn-swell-mild": "குறைவாக",
        "btn-swell-mod": "மிதமாக",
        "btn-swell-sev": "அதிகமாக",
        "q-mobility": "உங்களால் சாதாரணமாக அசைக்க முடிகிறதா?",
        "btn-mob-normal": "சாதாரணம்",
        "btn-mob-limited": "அசைக்க சிரமம்",
        "btn-mob-none": "அசைக்கவே முடியாது",
        "q-tenderness": "தொடும்போது வலி உள்ளதா?",
        "desc-tenderness": "காயம்பட்ட இடத்தில் தொடும்போது ஏற்படும் வலி",

        // Navigation Buttons
        "btn-next": "அடுத்த படி",
        "btn-prev": "முந்தைய",
        "btn-new-assessment": "புதிய மதிப்பீடு",

        // Results Section
        "res-header": "மதிப்பீட்டு முடிவு",
        "res-subheader": "உங்கள் அறிகுறிகளின் அடிப்படையில் எங்களின் பகுப்பாய்வு",
        "res-title": "பகுப்பாய்வு முடிவு",
        "res-analyzing": "அறிகுறிகள் பகுப்பாய்வு செய்யப்படுகின்றன...",
        "res-powered-by": "✓ ML மாதிரியின் மூலம் பகுப்பாய்வு செய்யப்பட்டது (RandomForest)",
        "res-scroll-down": "பரிந்துரைகளைக் காண கீழே உருட்டவும்",
        "res-er-warning": "⚠️ இது அவசர மருத்துவ நிலை - உடனே மருத்துவரை அணுகவும்",
        "res-xray-disclaimer": "இது ஒரு பூர்வாங்க பகுப்பாய்வு மட்டுமே. அதிகாரப்பூர்வ முடிவுக்கு மருத்துவரை அணுகவும்.",

        // Dynamic Outputs
        "label-ai-diagnosis": "AI கண்டறிதல் (Diagnosis)",
        "label-confidence": "நம்பகத்தன்மை (Confidence)",
        "label-severity": "தீவிரத்தன்மை (Severity)",
        "label-care-steps": "பரிந்துரைக்கப்படும் சிகிச்சை முறைகள்",
        "label-when-help": "எப்போது உடனடியாக மருத்துவமனை செல்ல வேண்டும்?",
        "label-differential": "பிற சாத்தியமான நோயறிதல்கள்",

        // X-Ray Upload
        "xray-header": "எக்ஸ்-ரே பகுப்பாய்வு",
        "xray-subheader": "எக்ஸ்-ரே படத்தை அப்லோடு செய்யவும்",
        "xray-upload-click": "எக்ஸ்-ரே படத்தை அப்லோடு செய்ய கிளிக் செய்யவும்",
        "xray-formats": "JPG, PNG, DICOM வடிவங்கள் (அதிகபட்சம் 10MB)",
        "xray-btn-browse": "கோப்புகளைத் தேடுக",
        "xray-q-area": "எந்த பகுதியில் எக்ஸ்-ரே எடுக்கப்பட்டது?",
        "xray-btn-analyze": "பகுப்பாய்வு செய்க",
        "xray-analyzing-title": "பகுப்பாய்வு செய்யப்படுகிறது...",
        "xray-analyzing-desc": "முறிவுகளை எங்களது AI கண்டறிகிறது",

        // Diagnosis strings
        "diagnosis-fracture": "எலும்பு முறிவு (Fracture)",
        "diagnosis-sprain": "சுளுக்கு (Sprain)",
        "diagnosis-normal": "சாதாரணம் (எலும்பு முறிவு இல்லை)",
        "severity-high": "அதிகம் (High)",
        "severity-medium": "நடுத்தரம் (Medium)",
        "severity-low": "குறைவு (Low)",

        // History page
        "hist-title": "நோயாளி வரலாறு",
        "hist-desc": "உங்கள் முந்தைய மருத்துவ மதிப்பீடுகள் கீழே உள்ள பட்டியலில் உள்ளன.",
        "hist-empty": "முந்தைய முடிவுகள் எதுவும் இல்லை. புதிய மதிப்பீட்டைத் தொடங்குங்கள்!",
        "hist-loading": "வரலாறு ஏற்றப்படுகிறது...",
        "hist-date": "தேதி",
        "hist-type": "வகை",
        "hist-symptoms": "அறிகுறிகள்",
        "hist-view-details": "விவரங்களை பார்",
        "hist-hide-details": "விவரங்களை மறை",
        "hist-back-home": "முகப்பு பக்கத்திற்கு",
        "hist-welcome": "நோயாளி டேஷ்போர்டு"
    },
    mr: {
        // Nav & General
        "nav-how-it-works": "हे कसे कार्य करते",
        "nav-assessment": "मूल्यांकन",
        "nav-examples": "उदाहरणे",
        "nav-ai-doctor": "AI डॉक्टर",
        "nav-history": "इतिहास",
        "nav-logout": "लॉग आउट",
        "nav-start-triage": "तपासणी सुरू करा",
        "footer-text": "© 2026 FractureOrSprain? क्लिनिकल ट्रायज सिस्टम.",
        "nav-welcome": "स्वागत आहे",

        // Hero Section
        "hero-badge": "AI-चालित क्लिनिकल ट्रायज",
        "hero-title": "हे फ्रॅक्चर आहे की लचक?",
        "hero-desc": "२ मिनिटांत जलद आणि अचूक विश्लेषण मिळवा. लक्षणांची उत्तरे द्या किंवा एक्स-रे स्कॅन अपलोड करा.",
        "hero-btn-check": "लक्षणे तपासा",
        "hero-btn-xray": "एक्स-रे अपलोड करा",

        // Stepper
        "step-1-label": "इजेची माहिती",
        "step-2-label": "तीव्रता",
        "step-3-label": "विश्लेषण",

        // Clinical Questions - Location
        "q-location": "दुखापत कुठे झाली आहे?",
        "btn-ankle": "घाटी/घाटा (Ankle)",
        "btn-wrist": "मनगट (Wrist)",
        "btn-knee": "गुडघा (Knee)",
        "btn-finger": "बोट (Finger)",
        "btn-other": "इतर (Other)",

        // Time Q
        "q-time": "दुखापत केव्हा झाली?",
        "btn-time-1h": "१ तासापेक्षा कमी",
        "btn-time-6h": "१-६ तास",
        "btn-time-24h": "६-२४ तास",
        "btn-time-more": "२४ तासांपेक्षा जास्त",

        // Mechanism Q
        "q-mechanism": "दुखापत कशी झाली?",
        "btn-mech-fall": "पडल्यामुळे",
        "btn-mech-twist": "मुरगळल्यामुळे",
        "btn-mech-hit": "थेट मार लागल्यामुळे",

        // Bruising Q
        "q-bruising": "काळे-निळे पडले आहे का (Bruising)?",
        "btn-yes": "होय",
        "btn-no": "नाही",

        // Step 2 Questions
        "q-weight": "तुम्ही त्यावर वजन टाकू शकता का?",
        "desc-weight-yes": "किमान आधारासह चालू किंवा उभे राहू शकता.",
        "desc-weight-no": "तीव्र वेदनेशिवाय वजन टाकणे अशक्य.",
        "q-pain": "तुमच्या वेदनेची पातळी (1-10)",
        "label-pain-mild": "सौम्य (१)",
        "label-pain-severe": "तीव्र (१०)",
        "q-deformity": "काही विकृती दिसते का?",
        "desc-deformity": "हाड जागेवरून सरकल्यासारखे किंवा वाकडे दिसते का?",
        "q-swelling": "सूज आली आहे का?",
        "btn-swell-none": "नाही",
        "btn-swell-mild": "थोडी",
        "btn-swell-mod": "मध्यम",
        "btn-swell-sev": "खूप जास्त",
        "q-mobility": "तुम्ही ते सामान्यपणे हलवू शकता का?",
        "btn-mob-normal": "सामान्य",
        "btn-mob-limited": "मर्यादित",
        "btn-mob-none": "हलवू शकत नाही",
        "q-tenderness": "दाबल्यावर दुखते का?",
        "desc-tenderness": "दुखापत झालेल्या भागाला स्पर्श केल्यावर होणारी वेदना",

        // Navigation Buttons
        "btn-next": "पुढील पाऊल",
        "btn-prev": "मागे",
        "btn-new-assessment": "नवीन मूल्यांकन",

        // Results Section
        "res-header": "तुमचा निकाल",
        "res-subheader": "तुमच्या लक्षणांवर आधारित AI विश्लेषण",
        "res-title": "मूल्यांकन निकाल",
        "res-analyzing": "विश्लेषण करत आहे...",
        "res-powered-by": "✓ ML मॉडेलद्वारे विश्लेषित (RandomForest)",
        "res-scroll-down": "तपशीलवार शिफारसींसाठी खाली स्क्रोल करा",
        "res-er-warning": "⚠️ हा आपत्कालीन वैद्यकीय प्रसंग आहे - त्वरित डॉक्टरांकडे जा",
        "res-xray-disclaimer": "हे प्राथमिक विश्लेषण आहे. अधिकृत निदानासाठी डॉक्टरांचा सल्ला घ्या.",

        // Dynamic Outputs
        "label-ai-diagnosis": "AI निदान (Diagnosis)",
        "label-confidence": "अचूकता (Confidence)",
        "label-severity": "तीव्रता (Severity)",
        "label-care-steps": "शिफारस केलेले उपचार",
        "label-when-help": "डॉक्टरांकडे त्वरित केव्हा जावे?",
        "label-differential": "इतर संभाव्य आजार",

        // X-Ray Upload
        "xray-header": "एक्स-रे विश्लेषण",
        "xray-subheader": "AI विश्लेषणासाठी एक्स-रे अपलोड करा",
        "xray-upload-click": "एक्स-रे अपलोड करण्यासाठी येथे क्लिक करा",
        "xray-formats": "JPG, PNG, DICOM सपोर्टेड (कमाल 10MB)",
        "xray-btn-browse": "ाईल्स शोधा",
        "xray-q-area": "शरीराच्या कोणत्या भागाचा एक्स-रे आहे?",
        "xray-btn-analyze": "एक्स-रे विश्लेषण करा",
        "xray-analyzing-title": "विश्लेषण सुरू आहे...",
        "xray-analyzing-desc": "आमचे AI हाड मोडले आहे का हे तपासत आहे",

        // Diagnosis strings
        "diagnosis-fracture": "अस्थिभंग (Fracture)",
        "diagnosis-sprain": "लचकणे (Sprain)",
        "diagnosis-normal": "सामान्य (फ्रॅक्चर नाही)",
        "severity-high": "जास्त (High)",
        "severity-medium": "मध्यम (Medium)",
        "severity-low": "कमी (Low)",

        // History page
        "hist-title": "रुग्णाचा इतिहास",
        "hist-desc": "तुमचे मागील तपासणी अहवाल खाली दिले आहेत.",
        "hist-empty": "मागील कोणताही रेकॉर्ड सापडला नाही. होम पेजवर जाऊन नवीन असेसमेंट करा!",
        "hist-loading": "माहिती लोड करत आहे...",
        "hist-date": "दिनांक",
        "hist-type": "प्रकार",
        "hist-symptoms": "लक्षणे",
        "hist-view-details": "तपशील पहा",
        "hist-hide-details": "तपशील लपवा",
        "hist-back-home": "मुख्य पानावर जा",
        "hist-welcome": "पेशंट डॅशबोर्ड"
    }
};

// State variables
window.currentLanguage = localStorage.getItem('selectedLanguage') || 'en';

// Helper to translate dynamic backend recommendations or strings
window.translateValue = function(key, defaultValue) {
    if (!window.translations[window.currentLanguage]) return defaultValue || key;
    return window.translations[window.currentLanguage][key] || defaultValue || key;
};

// Function to translate the entire DOM
window.applyTranslations = function() {
    console.log(`[i18n] Applying translations for: ${window.currentLanguage}`);
    
    // Select all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = window.translations[window.currentLanguage][key];
        
        if (translation) {
            // Check if element is an input with placeholder
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', translation);
            } else {
                element.textContent = translation;
            }
        }
    });

    // Handle HTML tag lang attribute
    document.documentElement.setAttribute('lang', window.currentLanguage);
};

// Change language function
window.setLanguage = function(lang) {
    if (!window.translations[lang]) {
        console.warn(`[i18n] Language '${lang}' not supported.`);
        return;
    }
    window.currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    window.applyTranslations();
    
    // Dispatch custom event so pages can re-render dynamic content
    const event = new CustomEvent('languageChanged', { detail: { language: lang } });
    window.dispatchEvent(event);
};

// Initialize translation switcher element
window.createLanguageSwitcher = function() {
    const navbar = document.querySelector('nav div.flex.items-center.gap-2');
    if (!navbar) return;
    
    // Check if switcher already exists
    if (document.getElementById('language-switcher-container')) return;

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'hi', name: 'हिंदी' },
        { code: 'te', name: 'తెలుగు' },
        { code: 'ta', name: 'தமிழ்' },
        { code: 'mr', name: 'मराठी' }
    ];

    const container = document.createElement('div');
    container.id = 'language-switcher-container';
    container.className = 'relative inline-block text-left mr-2';

    let optionsHtml = '';
    languages.forEach(lang => {
        optionsHtml += `
            <option value="${lang.code}" ${window.currentLanguage === lang.code ? 'selected' : ''}>
                ${lang.name}
            </option>
        `;
    });

    container.innerHTML = `
        <select 
            onchange="window.setLanguage(this.value)" 
            class="bg-surface-container-high border border-outline-variant text-on-surface font-label-md text-label-md rounded-lg px-2 py-2 focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer hover:bg-surface-container transition-all"
            id="global-language-select"
        >
            ${optionsHtml}
        </select>
    `;

    // Insert switcher before logout button or first child
    const logoutBtn = document.getElementById('logout-button');
    if (logoutBtn) {
        navbar.insertBefore(container, logoutBtn);
    } else {
        navbar.insertBefore(container, navbar.firstChild);
    }
};

// Run automatically on load
document.addEventListener('DOMContentLoaded', () => {
    window.createLanguageSwitcher();
    window.applyTranslations();
});

window.medicalTranslations = {
    en: {
        // Recommendations
        "rec-fracture": "⚠️  High likelihood of a fracture. Please visit an emergency department or orthopaedic clinic immediately. Do NOT put weight on the injured area. Immobilise the limb and apply ice wrapped in cloth.",
        "rec-sprain": "🟡  Likely a sprain. Follow R.I.C.E. — Rest, Ice (20 min every 2 hrs), Compression bandage, Elevation. If pain does not improve within 48 hrs or worsens, consult a doctor.",
        "rec-normal": "✅  Minor injury detected. Rest the area, avoid strenuous activity for 24–48 hrs and monitor for any worsening symptoms. No immediate medical visit required.",
        "rec-xray-fracture": "⚠️ High likelihood of a fracture detected in the X-ray. Please visit an emergency department or orthopaedic clinic immediately. Do NOT put weight on the injured area and immobilise the limb.",
        "rec-xray-normal": "✅ No obvious fracture visible in the X-ray. Minor injury detected. Rest the area, monitor for worsening symptoms, and consult a doctor if pain persists.",
        
        // Care Steps
        "care-fracture-0": "Immobilise the limb immediately using a splint or sling.",
        "care-fracture-1": "Apply ice wrapped in a cloth to reduce swelling (do not apply ice directly).",
        "care-fracture-2": "Keep the injured limb elevated if possible.",
        "care-fracture-3": "Do NOT attempt to realign the bone or put any weight on it.",
        
        "care-sprain-0": "Rest: Avoid using the injured joint/limb.",
        "care-sprain-1": "Ice: Apply ice packs wrapped in a towel for 15-20 minutes every 2-3 hours.",
        "care-sprain-2": "Compression: Wrap with an elastic bandage (not too tight) to minimize swelling.",
        "care-sprain-3": "Elevation: Elevate the injured area above the level of your heart.",
        
        "care-normal-0": "Rest the injured area and avoid strenuous activities for 24-48 hours.",
        "care-normal-1": "Apply cold compress if there is mild discomfort or swelling.",
        "care-normal-2": "Monitor symptoms for any changes or worsening pain.",
        
        // When to Seek Help
        "help-fracture-0": "Seek immediate medical attention or visit an emergency room.",
        "help-fracture-1": "Go immediately if there is visible deformity, bone piercing the skin, numbness, or loss of pulse in the limb.",
        
        "help-sprain-0": "If you cannot bear weight or stand after 48 hours.",
        "help-sprain-1": "If the pain or swelling worsens significantly despite resting.",
        "help-sprain-2": "If you experience numbness, tingling, or the limb feels cold.",
        
        "help-normal-0": "If pain does not start to subside after 3 days.",
        "help-normal-1": "If swelling or bruising suddenly increases.",
        "help-normal-2": "If you develop difficulty moving the joint or limb.",
        
        // Differentials
        "diff-fracture-0": "Displaced Fracture",
        "diff-fracture-1": "Non-displaced Fracture",
        "diff-fracture-2": "Severe Grade 3 Ligament Sprain",
        
        "diff-sprain-0": "Ligament Sprain (Grade 1 or 2)",
        "diff-sprain-1": "Muscle Strain",
        "diff-sprain-2": "Minor hairline or avulsion fracture",
        
        "diff-normal-0": "Minor Bruising / Contusion",
        "diff-normal-1": "Mild Muscle Strain",
        "diff-normal-2": "Normal recovery post-minor trauma"
    },
    hi: {
        // Recommendations
        "rec-fracture": "⚠️ अस्थि-भंग (फ्रैक्चर) होने की अत्यधिक संभावना है। कृपया तुरंत किसी आपातकालीन विभाग या आर्थोपेडिक क्लिनिक में जाएँ। प्रभावित क्षेत्र पर वजन न डालें। अंग को स्थिर रखें और कपड़े में लपेटकर बर्फ लगाएं।",
        "rec-sprain": "🟡 मोच आने की संभावना है। R.I.C.E. का पालन करें — आराम (Rest), बर्फ (Ice - हर 2 घंटे में 20 मिनट), कम्प्रेशन बैंडेज (Compression), ऊंचाई पर रखना (Elevation)। यदि 48 घंटे के भीतर दर्द में सुधार नहीं होता है या दर्द बढ़ता है, तो डॉक्टर से परामर्श लें।",
        "rec-normal": "✅ मामूली चोट का पता चला है। प्रभावित क्षेत्र को आराम दें, 24-48 घंटों तक कठिन गतिविधि से बचें और लक्षणों के बिगड़ने की निगरानी करें। तत्काल डॉक्टर के पास जाने की आवश्यकता नहीं है।",
        "rec-xray-fracture": "⚠️ एक्स-रे में फ्रैक्चर की अत्यधिक संभावना पाई गई है। कृपया तुरंत आपातकालीन विभाग या आर्थोपेडिक क्लिनिक में जाएँ। प्रभावित क्षेत्र पर वजन न डालें और अंग को स्थिर रखें।",
        "rec-xray-normal": "✅ एक्स-रे में कोई स्पष्ट फ्रैक्चर नहीं दिख रहा है। मामूली चोट का पता चला है। प्रभावित क्षेत्र को आराम दें, लक्षणों के बिगड़ने की निगरानी करें और यदि दर्द बना रहता है तो डॉक्टर से परामर्श लें।",
        
        // Care Steps
        "care-fracture-0": "स्प्लिंट या स्लिंग का उपयोग करके अंग को तुरंत स्थिर (immobilise) करें।",
        "care-fracture-1": "सूजन को कम करने के लिए कपड़े में लपेटकर बर्फ लगाएं (सीधे बर्फ न लगाएं)।",
        "care-fracture-2": "यदि संभव हो तो घायल अंग को हृदय के स्तर से ऊपर उठा कर रखें।",
        "care-fracture-3": "हड्डी को सीधा करने या उस पर कोई भी वजन डालने का प्रयास न करें।",
        
        "care-sprain-0": "आराम: घायल जोड़/अंग का उपयोग करने से बचें।",
        "care-sprain-1": "बर्फ: हर 2-3 घंटे में 15-20 मिनट के लिए तौलिये में लपेटकर बर्फ का पैक लगाएं।",
        "care-sprain-2": "दबाव (कम्प्रेशन): सूजन को कम करने के लिए एक इलास्टिक बैंडेज (बहुत टाइट नहीं) लपेटें।",
        "care-sprain-3": "ऊंचाई: घायल हिस्से को अपने हृदय के स्तर से ऊपर रखें।",
        
        "care-normal-0": "घायल क्षेत्र को आराम दें और 24-48 घंटों के लिए भारी गतिविधियों से बचें।",
        "care-normal-1": "हल्की परेशानी या सूजन होने पर ठंडी पट्टी लगाएं।",
        "care-normal-2": "किसी भी बदलाव या बढ़ते दर्द के लिए लक्षणों की निगरानी करें।",
        
        // When to Seek Help
        "help-fracture-0": "तुरंत चिकित्सकीय सहायता लें या आपातकालीन विभाग (ER) में जाएँ।",
        "help-fracture-1": "यदि स्पष्ट विकृति हो, हड्डी त्वचा से बाहर निकल रही हो, सुन्नता हो, या अंग में पल्स महसूस न हो तो तुरंत जाएँ।",
        
        "help-sprain-0": "यदि आप 48 घंटे के बाद भी वजन उठाने या खड़े होने में असमर्थ हैं।",
        "help-sprain-1": "यदि आराम करने के बावजूद दर्द या सूजन काफी बढ़ जाती है।",
        "help-sprain-2": "यदि आप सुन्नता, झुनझुनी महसूस करते हैं, या अंग ठंडा महसूस होता है।",
        
        "help-normal-0": "यदि 3 दिनों के बाद भी दर्द कम होना शुरू नहीं होता है।",
        "help-normal-1": "यदि सूजन या नील अचानक बढ़ जाता है।",
        "help-normal-2": "यदि आपको जोड़ या अंग को हिलाने में कठिनाई होने लगती है।",
        
        // Differentials
        "diff-fracture-0": "विस्थापित अस्थि-भंग (Displaced Fracture)",
        "diff-fracture-1": "गैर-विस्थापित अस्थि-भंग (Non-displaced Fracture)",
        "diff-fracture-2": "गंभीर ग्रेड 3 लिगामेंट मोच",
        
        "diff-sprain-0": "लिगामेंट मोच (ग्रेड 1 या 2)",
        "diff-sprain-1": "मांसपेशियों में खिंचाव (Muscle Strain)",
        "diff-sprain-2": "मामूली हेयरलाइन या एवल्शन फ्रैक्चर",
        
        "diff-normal-0": "मामूली नील / चोट (Contusion)",
        "diff-normal-1": "हल्का मांसपेशी खिंचाव",
        "diff-normal-2": "मामूली आघात के बाद सामान्य सुधार"
    },
    te: {
        // Recommendations
        "rec-fracture": "⚠️ ఎముక విరిగే (ఫ్రాక్చర్) అవకాశం ఎక్కువగా ఉంది. దయచేసి వెంటనే ఎమర్జెన్సీ వార్డు లేదా ఆర్థోపెడిక్ క్లినిక్‌ని సందర్శించండి. గాయపడిన భాగంపై బరువు పెట్టవద్దు. అవయవాన్ని కదలకుండా ఉంచి, గుడ్డలో చుట్టిన ఐస్ రాయండి.",
        "rec-sprain": "🟡 బహుశా మోకాలి నొప్పో లేదా కీలు జారడమో (స్ప్రెయిన్) కావచ్చు. R.I.C.E. పద్ధతిని అనుసరించండి — విశ్రాంతి (Rest), ఐస్ (Ice - ప్రతి 2 గంటలకు 20 నిมิషాలు), కంప్రెషన్ కట్టు (Compression), ఎత్తులో ఉంచడం (Elevation). 48 గంటల్లో నొప్పి తగ్గకపోతే డాక్టర్‌ని సంప్రదించండి.",
        "rec-normal": "✅ స్వల్ప గాయం మాత్రమే అయింది. గాయపడిన భాగానికి విశ్రాంతి ఇవ్వండి, 24-48 గంటల పాటు కఠినమైన పనులకు దూరంగా ఉండండి మరియు నొప్పి పెరుగుతుందో లేదో గమనించండి. వెంటనే ఆసుపत्रीకి వెళ్లాల్సిన అవసరం లేదు.",
        "rec-xray-fracture": "⚠️ ఎక్స్-రేలో ఫ్రాక్చర్ అయ్యే అవకాశం ఎక్కువగా కనిపిస్తోంది. దయచేసి వెంటనే ఎమర్జెన్సీ వార్డు లేదా ఆర్థోపెడిక్ క్లినిక్‌కి వెళ్ళండి. గాయపడిన భాగంపై బరువు పెట్టవద్దు మరియు కదలకుండా ఉంచండి.",
        "rec-xray-normal": "✅ ఎక్స్-రేలో స్పష్టమైన ఫ్రాక్చర్ ఏమీ కనిపించడం లేదు. స్వల్ప గాయం మాత్రమే అయింది. విశ్రాంతి తీసుకోండి, నొప్పి తగ్గకపోతే డాక్టర్‌ని సంప్రదించండి.",
        
        // Care Steps
        "care-fracture-0": "స్ప్లింట్ లేదా స్లింగ్ ఉపయోగించి అవయవాన్ని వెంటనే కదలకుండా చేయండి.",
        "care-fracture-1": "వాపును తగ్గించడానికి గుడ్డలో చుట్టిన ఐస్ ప్యాక్ పెట్టండి (నేరుగా ఐస్ పెట్టవద్దు).",
        "care-fracture-2": "వీలైతే గాయపడిన భాగాన్ని గుండె కంటే ఎత్తులో ఉంచండి.",
        "care-fracture-3": "ఎముకను సరిచేయడానికి ప్రయత్నించవద్దు లేదా దానిపై బరువు పెట్టవద్దు.",
        
        "care-sprain-0": "విశ్రాంతి: గాయపడిన జాయింట్/అవయవాన్ని ఉపయోగించవద్దు.",
        "care-sprain-1": "ఐస్: ప్రతి 2-3 గంటలకు 15-20 నిమిషాల పాటు తువ్వాలులో చుట్టిన ఐస్ ప్యాక్ పెట్టండి.",
        "care-sprain-2": "కంప్రెషన్: వాపును తగ్గించడానికి సాగే గుడ్డ కట్టును (మరీ గట్టిగా కాకుండా) కట్టండి.",
        "care-sprain-3": "ఎలివేషన్: గాయపడిన భాగాన్ని మీ గుండె స్థాయి కంటే ఎత్తులో ఉంచండి.",
        
        "care-normal-0": "గాయపడిన భాగానికి విశ్రాంతి ఇవ్వండి మరియు 24-48 గంటల పాటు శ్రమతో కూడిన పనులను నివారించండి.",
        "care-normal-1": "తేలికపాటి నొప్పి లేదా వాపు ఉంటే చల్లటి కంప్రెస్ పెట్టండి.",
        "care-normal-2": "నొప్పి పెరిగితే వెంటనే గమనించండి.",
        
        // When to Seek Help
        "help-fracture-0": "వెంటనే అత్యవసర చికిత్స తీసుకోండి లేదా ఎమర్జెన్सी గదికి వెళ్ళండి.",
        "help-fracture-1": "స్పష్టమైన వైకల్యం ఉంటే, చర్మం నుండి ఎముక బయటకు వస్తే, తిమ్మిరి ఉంటే వెంటనే వెళ్ళండి.",
        
        "help-sprain-0": "ఒకవేళ మీరు 48 గంటల తర్వాత కూడా నిలబడలేకపోతే లేదా బరువు పెట్టలేకపోతే.",
        "help-sprain-1": "విశ्राంతి తీసుకున్నప్పటికీ నొప్పి లేదా వాపు గణనీయంగా పెరిగితే.",
        "help-sprain-2": "మీకు తిమ్మిరి, సూదులు గుచ్చినట్లు అనిపిస్తే లేదా ఆ భాగం చల్లగా అనిపిస్తే.",
        
        "help-normal-0": "ఒకవేళ 3 రోజుల తర్వాత भी నొప్పి తగ్గడం ప్రారంభం కాకపోతే.",
        "help-normal-1": "ఒకవేళ వాపు లేదా నల్లగా కమలడం అకస్మాత్తుగా పెరిగితే.",
        "help-normal-2": "మీరు కీలును కదపడంలో ఇబ్బంది పడుతుంటే.",
        
        // Differentials
        "diff-fracture-0": "స్థానభ్రంశం చెందిన ఎముక విరగడం (Displaced Fracture)",
        "diff-fracture-1": "స్థానభ్రంశం చెందని ఎముక విరగడం (Non-displaced Fracture)",
        "diff-fracture-2": "తీవ్రమైన గ్రేడ్ 3 లిగమెంట్ గాయం",
        
        "diff-sprain-0": "లిగమెంట్ గాయం (గ్రేడ్ 1 లేదా 2)",
        "diff-sprain-1": "కండరాల నరాల లాగడం (Muscle Strain)",
        "diff-sprain-2": "స్వల్ప హెయిర్‌లైన్ లేదా అవిల్షన్ ఫ్రాక్చర్",
        
        "diff-normal-0": "స్వల్ప నల్లటి దెम्ब / కమలడం (Contusion)",
        "diff-normal-1": "తేలికపాటి కండరాల నరాల లాగడం",
        "diff-normal-2": "స్వల్ప గాయం తర్వాత సాధారణ రికవరీ"
    },
    ta: {
        // Recommendations
        "rec-fracture": "⚠️ எலும்பு முறிவு (ஃபிராக்சர்) ஏற்படுவதற்கான அதிக வாய்ப்பு உள்ளது. தயவுசெய்து உடனடியாக அவசர சிகிச்சை பிரிவு அல்லது எலும்பியல் மருத்துவமனைக்குச் செல்லவும். பாதிக்கப்பட்ட பகுதியில் எடையை வைக்க வேண்டாம். உறுப்பை அசைக்காமல் வைத்து, துணியில் சுற்றிய பனிக்கட்டியை வைக்கவும்.",
        "rec-sprain": "🟡 சுளுக்கு (ஸ்ப்ரெய்ன்) ஏற்பட வாய்ப்புள்ளது. R.I.C.E. முறையைப் பின்பற்றுங்கள் — ஓய்வு (Rest), பனிக்கட்டி (Ice - ஒவ்வொரு 2 மணி நேரத்திற்கும் 20 நிமிடங்கள்), கம்ப்ரெஷன் கட்டு (Compression), உயர்த்துதல் (Elevation). 48 மணி நேரத்திற்குள் வலி குறையவில்லை என்றால் மருத்துவரை அணுகவும்.",
        "rec-normal": "✅ லேசான காயம் மட்டுமே கண்டறியப்பட்டுள்ளது. பாதிக்கப்பட்ட பகுதிக்கு ஓய்வு கொடுங்கள், 24-48 மணி நேரம் கடினமான வேலைகளைத் தவிர்க்கவும். உடனடியாக மருத்துவமனைக்குச் செல்லத் தேவையில்லை.",
        "rec-xray-fracture": "⚠️ எக்ஸ்-ரேயில் எலும்பு முறிவு இருப்பதற்கான அதிக வாய்ப்பு உள்ளது. தயவுசெய்து உடனடியாக அவசர சிகிச்சை பிரிவு அல்லது எலும்பியல் மருத்துவமனைக்குச் செல்லவும். பாதிக்கப்பட்ட பகுதியில் எடை வைக்க வேண்டாம்.",
        "rec-xray-normal": "✅ எக்ஸ்-ரேயில் தெளிவான எலும்பு முறிவு எதுவும் தெரியவில்லை. லேசான காயம் மட்டுமே கண்டறியப்பட்டுள்ளது. ஓய்வு எடுத்துக்கொண்டு, வலி தொடர்ந்தால் மருத்துவரை அணுகவும்.",
        
        // Care Steps
        "care-fracture-0": "உறுப்பை உடனடியாக அசைக்காமல் வைக்க ஸ்ப்ளிண்ட் அல்லது சிலிங் பயன்படுத்தவும்.",
        "care-fracture-1": "வீக்கத்தைக் குறைக்க துணியில் சுற்றிய பனிக்கட்டியை வைக்கவும் (நேரடியாக பனிக்கட்டி வைக்கக் கூடாது).",
        "care-fracture-2": "முடிந்தால் காயம்பட்ட உறுப்பை இதயத்தின் அளவிற்கு மேல் உயர்த்தி வைக்கவும்.",
        "care-fracture-3": "எலும்பை நேராக்கவோ அல்லது அதன் மேல் எடை வைக்கவோ முயற்சிக்க வேண்டாம்.",
        
        "care-sprain-0": "ஓய்வு: காயம்பட்ட மூட்டு அல்லது உறுப்பைப் பயன்படுத்துவதைத் தவிர்க்கவும்.",
        "care-sprain-1": "பனிக்கட்டி: ஒவ்வொரு 2-3 மணி நேரத்திற்கும் 15-20 நிமிடங்கள் துண்டில் சுற்றிய பனிக்கட்டியை வைக்கவும்.",
        "care-sprain-2": "கம்ப்ரெஷன்: வீக்கத்தைக் குறைக்க மீள் கட்டு (elastic bandage) போடவும் (அதிக இறுக்கமாக இருக்கக் கூடாது).",
        "care-sprain-3": "உயர்த்துதல்: காயம்பட்ட பகுதியை இதய மட்டத்திற்கு மேல் உயர்த்தி வைக்கவும்.",
        
        "care-normal-0": "பாதிக்கப்பட்ட பகுதிக்கு ஓய்வு கொடுத்து 24-48 மணி நேரம் கடினமான செயல்பாடுகளைத் தவிர்க்கவும்.",
        "care-normal-1": "லேசான அசௌகரியம் அல்லது வீக்கம் இருந்தால் குளிர்ந்த ஒத்தடம் கொடுக்கவும்.",
        "care-normal-2": "வலி மேலும் அதிகரிக்கிறதா என்று கண்காணிக்கவும்.",
        
        // When to Seek Help
        "help-fracture-0": "உடனடியாக அவசர மருத்துவ உதவியை நாடுங்கள் அல்லது அவசர சிகிச்சை பிரிவுக்குச் செல்லவும்.",
        "help-fracture-1": "உறுப்பில் தெளிவான மாற்றம், எலும்பு தோலைத் துளைத்து வெளியே வருதல், மரத்துப்போதல் ஆகியவை இருந்தால் உடனடியாகச் செல்லவும்.",
        
        "help-sprain-0": "48 மணி நேரத்திற்குப் பிறகும் உங்களால் நிற்கவோ அல்லது எடை வைக்கவோ முடியாவிட்டால்.",
        "help-sprain-1": "ஓய்வு எடுத்த போதிலும் வலி அல்லது வீக்கம் கணிசமாக அதிகரித்தால்.",
        "help-sprain-2": "உங்களுக்கு மரத்துப்போதல், ஊசி குத்துவது போன்ற உணர்வு அல்லது உறுப்பு குளிர்ந்து போனால்.",
        
        "help-normal-0": "3 நாட்களுக்குப் பிறகும் வலி குறையத் தொடங்கவில்லை என்றால்.",
        "help-normal-1": "வீக்கம் அல்லது காயம் திடீரென அதிகரித்தால்.",
        "help-normal-2": "உங்களால் மூட்டை அசைக்க முடியாத சிரமம் ஏற்பட்டால்.",
        
        // Differentials
        "diff-fracture-0": "இடம் மாறிய எலும்பு முறிவு (Displaced Fracture)",
        "diff-fracture-1": "இடம் மாறாத எலும்பு முறிவு (Non-displaced Fracture)",
        "diff-fracture-2": "கடுமையான தசைநார் காயம் (தரம் 3 சுளுக்கு)",
        
        "diff-sprain-0": "தசைநார் காயம் (தரம் 1 அல்லது 2 சுளுக்கு)",
        "diff-sprain-1": "தசை பிடிப்பு (Muscle Strain)",
        "diff-sprain-2": "லேசான ஹேர்லைன் எலும்பு முறிவு",
        
        "diff-normal-0": "லேசான காயம் / சிராய்ப்பு (Contusion)",
        "diff-normal-1": "மிதமான தசை பிடிப்பு",
        "diff-normal-2": "லேசான காயத்திற்குப் பின் ஏற்படும் சாதாரண முன்னேற்றம்"
    },
    mr: {
        // Recommendations
        "rec-fracture": "⚠️ हाड मोडल्याची (फ्रॅक्चर) दाट शक्यता आहे. कृपया ताबडतोब आपत्कालीन विभाग किंवा ऑर्थोपेडिक क्लिनिकला भेट द्या. दुखापत झालेल्या भागावर वजन टाकू नका. अवयव स्थिर ठेवा आणि कापडात गुंडाळलेला बर्फ लावा.",
        "rec-sprain": "🟡 लचक (स्प्रेन) असण्याची शक्यता आहे. R.I.C.E. पद्धतीचा अवलंब करा — विश्रांती (Rest), बर्फ (Ice - दर २ तासांनी २० मिनिटे), कम्प्रेशन पट्टी (Compression), उंचीवर ठेवणे (Elevation). ४८ तासांत वेदना कमी न झाल्यास डॉक्टरांचा सल्ला घ्या.",
        "rec-normal": "✅ किरकोळ दुखापत आढळली आहे. दुखापत झालेल्या भागाला विश्रांती द्या, २४-४८ तास जड कामांपासून दूर राहा आणि वेदना वाढते का यावर लक्ष ठेवा. ताबडतोब डॉक्टरांकडे जाण्याची आवश्यकता नाही.",
        "rec-xray-fracture": "⚠️ एक्स-रेमध्ये फ्रॅक्चर असण्याची दाट शक्यता दिसत आहे. कृपया ताबडतोब आपत्कालीन विभाग किंवा ऑर्थोपेडिक क्लिनिकला भेट द्या. दुखापत झालेल्या भागावर वजन टाकू नका आणि तो भाग स्थिर ठेवा.",
        "rec-xray-normal": "✅ एक्स-रेमध्ये कोणतेही स्पष्ट फ्रॅक्चर दिसत नाही. किरकोळ दुखापत आढळली आहे. विश्रांती घ्या आणि वेदना कायम राहिल्यास डॉक्टरांचा सल्ला घ्या.",
        
        // Care Steps
        "care-fracture-0": "काठी किंवा झोळी (sling) वापरून अवयव ताबडतोब स्थिर करा.",
        "care-fracture-1": "सूज कमी करण्यासाठी कापडात गुंडाळलेला बर्फ लावा (थेट बर्फ लावू नका).",
        "care-fracture-2": "शक्य असल्यास दुखापत झालेला भाग हृदयाच्या पातळीपेक्षा उंच ठेवा.",
        "care-fracture-3": "हाड स्वतः सरळ करण्याचा प्रयत्न करू नका किंवा त्यावर वजन टाकू नका.",
        
        "care-sprain-0": "विश्रांती: दुखापत झालेल्या सांध्याचा/अवयवाचा वापर करणे टाळा.",
        "care-sprain-1": "बर्फ: दर २-३ तासांनी १५-२० मिनिटांसाठी टॉवेलमध्ये गुंडाळलेला बर्फाचा पॅक लावा.",
        "care-sprain-2": "कम्प्रेशन: सूज कमी करण्यासाठी लवचिक पट्टी (जास्त घट्ट नाही) गुंडाळा.",
        "care-sprain-3": "उंची: दुखापत झालेला भाग तुमच्या हृदयाच्या पातळीपेक्षा उंच ठेवा.",
        
        "care-normal-0": "दुखापत झालेल्या भागाला विश्रांती द्या आणि २४-४८ तासांसाठी कष्टाची कामे टाळा.",
        "care-normal-1": "सौम्य वेदना किंवा सूज असल्यास थंड पाण्याचा शेक द्या.",
        "care-normal-2": "वेदना वाढते का यावर बारीक लक्ष ठेवा.",
        
        // When to Seek Help
        "help-fracture-0": "त्वरित वैद्यकीय मदत घ्या किंवा आपत्कालीन विभागात (ER) जा.",
        "help-fracture-1": "स्पष्ट विकृती असल्यास, हाड त्वचेबाहेर आल्यास, बधिरता आल्यास किंवा नाडी जाणवत नसल्यास त्वरित जा.",
        
        "help-sprain-0": "४८ तासांनंतरही तुम्ही पाय जमिनीवर टेकवू शकत नसल्यास किंवा उभे राहू शकत नसल्यास.",
        "help-sprain-1": "विश्रांती घेऊनही वेदना किंवा सूज खूप वाढल्यास.",
        "help-sprain-2": "तुम्हाला बधिरता, मुंग्या येत असल्यास किंवा तो भाग थंड पडल्यास.",
        
        "help-normal-0": "३ दिवसांनंतरही वेदना कमी होण्यास सुरुवात न झाल्यास.",
        "help-normal-1": "सूज किंवा काळे-निळे पडणे अचानक वाढल्यास.",
        "help-normal-2": "तुम्हाला सांधा किंवा अवयव हलवण्यास अडचण येत असल्यास.",
        
        // Differentials
        "diff-fracture-0": "विस्थापित अस्थिभंग (Displaced Fracture)",
        "diff-fracture-1": "अविस्थापित अस्थिभंग (Non-displaced Fracture)",
        "diff-fracture-2": "गंभीर ग्रेड ३ लिगामेंट दुखापत",
        
        "diff-sprain-0": "लिगामेंट दुखापत (ग्रेड १ किंवा २ लचक)",
        "diff-sprain-1": "स्नायूंचा ताण (Muscle Strain)",
        "diff-sprain-2": "किरकोळ हेअरलाईन फ्रॅक्चर",
        
        "diff-normal-0": "किरकोळ मुका मार / दुखापत (Contusion)",
        "diff-normal-1": "सौम्य स्नायूंचा ताण",
        "diff-normal-2": "किरकोळ दुखापतीनंतर सामान्य सुधारणा"
    }
};

// Translate medical elements based on code mapping
window.translateMedicalItem = function(type, diagnosis, index, defaultValue) {
    const lang = window.currentLanguage;
    const key = `${type}-${diagnosis}-${index}`;
    if (window.medicalTranslations[lang] && window.medicalTranslations[lang][key]) {
        return window.medicalTranslations[lang][key];
    }
    const recKey = `${type}-${diagnosis}`;
    if (type === 'rec' && window.medicalTranslations[lang] && window.medicalTranslations[lang][recKey]) {
        return window.medicalTranslations[lang][recKey];
    }
    return defaultValue;
};

