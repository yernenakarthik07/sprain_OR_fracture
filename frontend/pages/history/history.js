import { db, auth } from '../../assets/js/firebase-config.js';
import { collection, query, orderBy, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Global arrays to hold history records for modal popup access and translation switching
let loadedHistory = [];

document.addEventListener('DOMContentLoaded', () => {
    // Wait for Firebase auth to initialize
    auth.onAuthStateChanged((user) => {
        if (user) {
            document.getElementById('user-email').textContent = user.email;
            fetchHistory(user.uid);
        } else {
            console.log('[History Page] Not authenticated, require-auth.js will redirect.');
        }
    });
});

async function fetchHistory(uid) {
    const loadingEl = document.getElementById('history-loading');
    const emptyEl = document.getElementById('history-empty');
    const listEl = document.getElementById('history-list');

    try {
        const historyRef = collection(db, 'users', uid, 'history');
        const q = query(historyRef, orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);

        loadedHistory = [];
        querySnapshot.forEach((doc) => {
            loadedHistory.push({
                id: doc.id,
                ...doc.data()
            });
        });

        loadingEl.classList.add('hidden');

        if (loadedHistory.length === 0) {
            emptyEl.classList.remove('hidden');
            listEl.classList.add('hidden');
        } else {
            emptyEl.classList.add('hidden');
            listEl.classList.remove('hidden');
            renderHistoryList();
        }
    } catch (err) {
        console.error('Error fetching diagnosis history:', err);
        loadingEl.innerHTML = `
            <span class="material-symbols-outlined text-5xl text-error mb-4">error</span>
            <p class="font-headline-sm text-headline-sm text-error">Failed to load diagnosis history.</p>
            <p class="font-body-sm text-body-sm text-on-surface-variant mt-2">${err.message}</p>
        `;
    }
}

function renderHistoryList() {
    const listEl = document.getElementById('history-list');
    listEl.innerHTML = '';

    const colorMap = {
        'fracture': { bg: 'tertiary-container', text: 'tertiary', icon: 'skeleton' },
        'sprain': { bg: 'secondary-container', text: 'secondary', icon: 'healing' },
        'normal': { bg: 'primary-container', text: 'primary', icon: 'check_circle' }
    };

    loadedHistory.forEach((record, index) => {
        const diagnosis = record.diagnosis;
        const confidence = Math.round(record.confidence * 100);
        const severity = record.severity || (diagnosis === 'fracture' ? 'High' : (diagnosis === 'sprain' ? 'Medium' : 'Low'));
        const colors = colorMap[diagnosis] || colorMap['normal'];

        // Translations
        const transDiagnosis = window.translateValue('diagnosis-' + diagnosis, diagnosis.charAt(0).toUpperCase() + diagnosis.slice(1));
        const transSeverity = window.translateValue('severity-' + severity.toLowerCase(), severity);
        const typeLabel = record.type === 'xray' ? window.translateValue('xray-header', 'X-Ray Analysis') : window.translateValue('label-ai-diagnosis', 'Symptom Triage');

        // Formatted timestamp
        let formattedDate = '-';
        if (record.timestamp) {
            const dateObj = new Date(record.timestamp);
            formattedDate = dateObj.toLocaleDateString(undefined, { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }

        const card = document.createElement('div');
        card.className = 'bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 shadow-ambient hover:shadow-elevated transition-shadow duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4';
        
        card.innerHTML = `
            <div class="flex items-start gap-4">
                <div class="w-14 h-14 rounded-2xl bg-${colors.bg}/20 flex items-center justify-center text-${colors.text} shrink-0">
                    <span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">
                        ${record.type === 'xray' ? 'radiology' : colors.icon}
                    </span>
                </div>
                <div>
                    <div class="flex items-center flex-wrap gap-2 mb-1">
                        <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">${typeLabel}</span>
                        <span class="px-2.5 py-0.5 rounded-full font-label-sm text-label-sm text-white bg-${colors.text}">${transSeverity}</span>
                    </div>
                    <h3 class="font-headline-sm text-headline-sm text-on-surface mb-1">${transDiagnosis} <span class="font-body-sm text-body-sm text-on-surface-variant font-normal">(${confidence}% ${window.translateValue('label-confidence', 'Confidence')})</span></h3>
                    <p class="font-body-sm text-body-sm text-on-surface-variant">${formattedDate}</p>
                </div>
            </div>
            <div class="flex items-center gap-2 self-end md:self-center">
                <button onclick="openDetailsModal(${index})" class="bg-primary text-white font-label-md text-label-md px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2">
                    <span class="material-symbols-outlined text-[18px]">visibility</span>
                    <span data-i18n="hist-view-details">View Details</span>
                </button>
            </div>
        `;
        listEl.appendChild(card);
    });
}

// Global modal handlers exposed to window
window.openDetailsModal = function(index) {
    const record = loadedHistory[index];
    if (!record) return;

    const modal = document.getElementById('details-modal');
    const container = document.getElementById('modal-container');
    const diagnosis = record.diagnosis;
    const severity = record.severity || (diagnosis === 'fracture' ? 'High' : (diagnosis === 'sprain' ? 'Medium' : 'Low'));

    // Set colors
    const colorMap = {
        'fracture': { bg: 'bg-error', icon: 'skeleton', label: 'diagnosis-fracture' },
        'sprain': { bg: 'bg-warning', icon: 'healing', label: 'diagnosis-sprain' },
        'normal': { bg: 'bg-success', icon: 'check_circle', label: 'diagnosis-normal' }
    };
    const colors = colorMap[diagnosis] || colorMap['normal'];

    const iconContainer = document.getElementById('modal-icon-container');
    iconContainer.className = `w-12 h-12 rounded-full flex items-center justify-center text-white ${colors.bg}`;
    document.getElementById('modal-icon').textContent = record.type === 'xray' ? 'radiology' : colors.icon;
    
    // Header labels
    document.getElementById('modal-type-label').textContent = record.type === 'xray' ? window.translateValue('xray-header', 'X-Ray Analysis') : window.translateValue('label-ai-diagnosis', 'AI Diagnosis');
    document.getElementById('modal-title-diagnosis').textContent = window.translateValue('diagnosis-' + diagnosis, diagnosis.charAt(0).toUpperCase() + diagnosis.slice(1));

    // Date
    let formattedDate = '-';
    if (record.timestamp) {
        formattedDate = new Date(record.timestamp).toLocaleString();
    }
    document.getElementById('modal-date').textContent = formattedDate;

    // Confidence & Severity & Type
    document.getElementById('modal-confidence').textContent = `${Math.round(record.confidence * 100)}%`;
    document.getElementById('modal-severity').textContent = window.translateValue('severity-' + severity.toLowerCase(), severity);
    document.getElementById('modal-type').textContent = record.type === 'xray' ? 'X-Ray Scan' : 'Symptom Triage';

    // Inputs details
    const inputsEl = document.getElementById('modal-inputs-detail');
    if (record.type === 'xray') {
        inputsEl.innerHTML = `
            <p><strong>${window.translateValue('xray-q-area', 'Area X-Rayed')}:</strong> ${record.inputs?.location || 'Unknown'}</p>
            <p class="mt-1"><strong>${window.translateValue('hist-type', 'File Name')}:</strong> ${record.inputs?.file_name || 'xray.png'}</p>
        `;
    } else {
        const inputs = record.inputs || {};
        inputsEl.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                <p><strong>${window.translateValue('q-injury-location', 'Injury Location')}:</strong> ${inputs.location || '-'}</p>
                <p><strong>${window.translateValue('q-pain', 'Pain Level')}:</strong> ${inputs.pain_level || '-'}/10</p>
                <p><strong>${window.translateValue('q-swelling', 'Swelling')}:</strong> ${inputs.swelling || '-'}</p>
                <p><strong>${window.translateValue('q-weight', 'Bear Weight')}:</strong> ${inputs.weight_bearing_possible === 'yes' || inputs.weight_bearing_possible === true ? 'Yes' : 'No'}</p>
                <p><strong>${window.translateValue('q-deformity', 'Visible Deformity')}:</strong> ${inputs.deformity_visible ? 'Yes' : 'No'}</p>
                <p><strong>${window.translateValue('q-tenderness', 'Press Pain')}:</strong> ${inputs.point_tenderness ? 'Yes' : 'No'}</p>
            </div>
        `;
    }

    // Recommended Actions
    const recActionText = record.type === 'xray'
        ? window.translateMedicalItem('rec', 'xray-' + diagnosis, null, record.recommended_action)
        : window.translateMedicalItem('rec', diagnosis, null, record.recommended_action);
    document.getElementById('modal-action-text').textContent = recActionText;

    // Care Steps list
    const careStepsContainer = document.getElementById('modal-care-steps-container');
    const careStepsList = document.getElementById('modal-care-steps-list');
    const careSteps = record.care_steps || [];
    if (careSteps.length > 0) {
        careStepsContainer.classList.remove('hidden');
        careStepsList.innerHTML = '';
        careSteps.forEach((step, idx) => {
            const transStep = record.type === 'xray'
                ? (window.translateMedicalItem('care', 'xray-' + diagnosis, idx, step) || window.translateMedicalItem('care', diagnosis, idx, step))
                : window.translateMedicalItem('care', diagnosis, idx, step);
            const li = document.createElement('li');
            li.textContent = transStep;
            careStepsList.appendChild(li);
        });
    } else {
        careStepsContainer.classList.add('hidden');
    }

    // Red Flags list
    const flagsContainer = document.getElementById('modal-red-flags-container');
    const flagsList = document.getElementById('modal-red-flags-list');
    const helpSteps = record.when_to_seek_help || [];
    if (helpSteps.length > 0) {
        flagsContainer.classList.remove('hidden');
        flagsList.innerHTML = '';
        helpSteps.forEach((step, idx) => {
            const transStep = record.type === 'xray'
                ? (window.translateMedicalItem('help', 'xray-' + diagnosis, idx, step) || window.translateMedicalItem('help', diagnosis, idx, step))
                : window.translateMedicalItem('help', diagnosis, idx, step);
            const li = document.createElement('li');
            li.textContent = transStep;
            flagsList.appendChild(li);
        });
    } else {
        flagsContainer.classList.add('hidden');
    }

    // Differentials
    const diffContainer = document.getElementById('modal-differentials-container');
    const diffList = document.getElementById('modal-differentials-list');
    const diffs = record.differential || [];
    if (diffs.length > 0) {
        diffContainer.classList.remove('hidden');
        diffList.innerHTML = '';
        diffs.forEach((diff, idx) => {
            const transDiff = record.type === 'xray'
                ? (window.translateMedicalItem('diff', 'xray-' + diagnosis, idx, diff) || window.translateMedicalItem('diff', diagnosis, idx, diff))
                : window.translateMedicalItem('diff', diagnosis, idx, diff);
            const badge = document.createElement('span');
            badge.className = 'inline-block bg-surface-container px-3 py-1 rounded-full text-on-surface-variant font-body-sm text-body-sm';
            badge.textContent = transDiff;
            diffList.appendChild(badge);
        });
    } else {
        diffContainer.classList.add('hidden');
    }

    // Open Modal animation
    modal.classList.remove('pointer-events-none');
    modal.classList.add('opacity-100');
    container.classList.remove('scale-95');
    container.classList.add('scale-100');
};

window.closeDetailsModal = function() {
    const modal = document.getElementById('details-modal');
    const container = document.getElementById('modal-container');

    modal.classList.add('pointer-events-none');
    modal.classList.remove('opacity-100');
    container.classList.add('scale-95');
    container.classList.remove('scale-100');
};

// Listen to languageChanged to reload translations dynamically in-place
window.addEventListener('languageChanged', () => {
    console.log('[History Page] Live-reloading translations on language select');
    if (loadedHistory.length > 0) {
        renderHistoryList();
    }
});
