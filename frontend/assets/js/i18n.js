// Ee code website multilingual translation switching (English, Hindi, Telugu, Tamil, Marathi) ni handle chesthundi

let currentLang = localStorage.getItem('selectedLanguage') || 'en';
window.currentLanguage = currentLang;

document.addEventListener('DOMContentLoaded', () => {
    initLanguageSelector();
    applyTranslations(currentLang);
});

// Header language dropdown dropdown list setup
function initLanguageSelector() {
    const langSelect = document.getElementById('lang-select');
    if (!langSelect) return;

    langSelect.value = currentLang;
    langSelect.addEventListener('change', (e) => {
        const newLang = e.target.value;
        setLanguage(newLang);
    });
}

// Global language switcher function
function setLanguage(lang) {
    currentLang = lang;
    window.currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    applyTranslations(lang);
    
    // Voice assistant drop-down update if present
    if (window.onVoiceLangChange) {
        const voiceLangMap = {
            'en': 'en-US',
            'hi': 'hi-IN',
            'te': 'te-IN',
            'ta': 'ta-IN',
            'mr': 'mr-IN'
        };
        const voiceSelect = document.getElementById('voice-lang-select');
        if (voiceSelect && voiceLangMap[lang]) {
            voiceSelect.value = voiceLangMap[lang];
            window.onVoiceLangChange(voiceLangMap[lang]);
        }
    }
}
window.setLanguage = setLanguage;

// Selected language strings ni UI elements ki applying
function applyTranslations(lang) {
    const staticDict = (window.STATIC_TRANSLATIONS && window.STATIC_TRANSLATIONS[lang]) ? window.STATIC_TRANSLATIONS[lang] : {};

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (staticDict[key]) {
            el.innerHTML = staticDict[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (staticDict[key]) {
            el.setAttribute('placeholder', staticDict[key]);
        }
    });

    // Re-render diagnosis cards if present
    if (window.renderHistoryList && typeof window.renderHistoryList === 'function') {
        window.renderHistoryList();
    }
}
window.applyTranslations = applyTranslations;

// Static string values translation lookup
window.translateValue = function(key, fallback) {
    const dict = (window.STATIC_TRANSLATIONS && window.STATIC_TRANSLATIONS[currentLang]) ? window.STATIC_TRANSLATIONS[currentLang] : {};
    return dict[key] || fallback;
};

// Medical diagnosis recommendations translation lookup
window.translateMedicalItem = function(type, diagnosisKey, index = null, fallback = '') {
    const dict = (window.STATIC_TRANSLATIONS && window.STATIC_TRANSLATIONS[currentLang]) ? window.STATIC_TRANSLATIONS[currentLang] : {};
    let key = '';
    if (type === 'rec') {
        key = `rec-${diagnosisKey}`;
    } else if (type === 'med') {
        key = `med-${diagnosisKey}`;
    } else if (type === 'care' && index !== null) {
        key = `care-${diagnosisKey}-${index}`;
    } else if (type === 'help' && index !== null) {
        key = `help-${diagnosisKey}-${index}`;
    }

    if (dict[key]) {
        return dict[key];
    }
    return fallback;
};
