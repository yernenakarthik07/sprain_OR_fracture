// Ee code user previous diagnosis history ni Firestore database nundi read chesi page lo table/cards lagana render chesthundi

import { db, auth } from '../../assets/js/firebase-config.js';
import { collection, query, orderBy, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Global array - full history cards access kosam
let loadedHistory = [];

document.addEventListener('DOMContentLoaded', () => {
    // Firebase auth check chesi user ID tho history loading trigger chestham
    auth.onAuthStateChanged((user) => {
        if (user) {
            const emailEl = document.getElementById('user-email');
            if (emailEl) emailEl.textContent = user.email;
            fetchHistory(user.uid);
        }
    });
});

// User profile 'history' collection nundi documents load chesthundi
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

        if (loadingEl) loadingEl.classList.add('hidden');

        if (loadedHistory.length === 0) {
            if (emptyEl) emptyEl.classList.remove('hidden');
            if (listEl) listEl.classList.add('hidden');
        } else {
            if (emptyEl) emptyEl.classList.add('hidden');
            if (listEl) listEl.classList.remove('hidden');
            renderHistoryList();
        }
    } catch (err) {
        console.error('Diagnosis history fetching error:', err);
        if (loadingEl) {
            loadingEl.innerHTML = `
                <span class="material-symbols-outlined text-5xl text-error mb-4">error</span>
                <p class="font-headline-sm text-headline-sm text-error">Failed to load diagnosis history.</p>
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-2">${err.message}</p>
            `;
        }
    }
}

// Loaded records anni screen paina aesthetic HTML cards ga render avuthayi
function renderHistoryList() {
    const listEl = document.getElementById('history-list');
    if (!listEl) return;
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

        const transDiagnosis = window.translateValue('diagnosis-' + diagnosis, diagnosis.charAt(0).toUpperCase() + diagnosis.slice(1));
        const transSeverity = window.translateValue('severity-' + severity.toLowerCase(), severity);
        const typeLabel = record.type === 'xray' ? window.translateValue('xray-header', 'X-Ray Analysis') : window.translateValue('label-ai-diagnosis', 'Symptom Triage');

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

// Modal view details open chesthunnam
window.openDetailsModal = function(index) {
    const record = loadedHistory[index];
    if (!record) return;

    const modal = document.getElementById('details-modal');
    const diagnosis = record.diagnosis;
    const severity = record.severity || (diagnosis === 'fracture' ? 'High' : (diagnosis === 'sprain' ? 'Medium' : 'Low'));

    const colorMap = {
        'fracture': { bg: 'bg-error', icon: 'skeleton' },
        'sprain': { bg: 'bg-warning', icon: 'healing' },
        'normal': { bg: 'bg-success', icon: 'check_circle' }
    };
    const colors = colorMap[diagnosis] || colorMap['normal'];

    const iconContainer = document.getElementById('modal-icon-container');
    if (iconContainer) iconContainer.className = `w-12 h-12 rounded-full flex items-center justify-center text-white ${colors.bg}`;
    
    const iconEl = document.getElementById('modal-icon');
    if (iconEl) iconEl.textContent = record.type === 'xray' ? 'radiology' : colors.icon;
    
    const typeLabel = document.getElementById('modal-type-label');
    if (typeLabel) typeLabel.textContent = record.type === 'xray' ? window.translateValue('xray-header', 'X-Ray Analysis') : window.translateValue('label-ai-diagnosis', 'Clinical Assessment');
    
    const diagTitle = document.getElementById('modal-title-diagnosis');
    if (diagTitle) diagTitle.textContent = window.translateValue('diagnosis-' + diagnosis, diagnosis.charAt(0).toUpperCase() + diagnosis.slice(1));

    let formattedDate = '-';
    if (record.timestamp) {
        formattedDate = new Date(record.timestamp).toLocaleString();
    }
    const dateEl = document.getElementById('modal-date');
    if (dateEl) dateEl.textContent = formattedDate;

    const confEl = document.getElementById('modal-confidence');
    if (confEl) confEl.textContent = `${Math.round(record.confidence * 100)}%`;
    
    const sevEl = document.getElementById('modal-severity');
    if (sevEl) sevEl.textContent = window.translateValue('severity-' + severity.toLowerCase(), severity);
    
    const typeEl = document.getElementById('modal-type');
    if (typeEl) typeEl.textContent = record.type === 'xray' ? 'X-Ray Scan' : 'Symptom Triage';

    const inputsEl = document.getElementById('modal-inputs-detail');
    if (inputsEl) {
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
    }

    const recActionText = record.type === 'xray'
        ? window.translateMedicalItem('rec', 'xray-' + diagnosis, null, record.recommended_action)
        : window.translateMedicalItem('rec', diagnosis, null, record.recommended_action);
    
    const actionEl = document.getElementById('modal-action-text');
    if (actionEl) actionEl.textContent = recActionText;

    if (modal) modal.classList.remove('hidden');
};

window.closeDetailsModal = function() {
    const modal = document.getElementById('details-modal');
    if (modal) modal.classList.add('hidden');
};
