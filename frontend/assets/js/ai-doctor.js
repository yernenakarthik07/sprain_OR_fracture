// Ee code AI doctor chat system, multilingual voice synthesis, mariyu interactive chat responses ni manage chesthundi

const GROQ_API_KEY_LOCAL = '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';
const GROQ_MODEL = 'llama-3.3-70b-versatile';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// App state variables
let isVoiceOutputEnabled = true;
let isListening = false;
let recognition = null;
let selectedVoiceLang = 'en-US';

const langNameMap = {
    'en-US': 'English',
    'hi-IN': 'Hindi (हिंदी)',
    'te-IN': 'Telugu (తెలుగు)',
    'ta-IN': 'Tamil (தமிழ்)',
    'mr-IN': 'Marathi (मराठी)'
};

// Medical Assistant Prompt Configuration
const BASE_SYSTEM_PROMPT = `You are Dr. AI, a professional, empathetic medical assistant specializing in injury assessment, fractures, sprains, and general health advice.

RULES:
1. ONLY answer questions related to health, medical conditions, injuries, symptoms, and wellness.
2. If asked about non-medical topics, politely redirect in the requested language.
3. Provide accurate, helpful medical information concisely.
4. Use a warm, empathetic, professional tone.
5. Remind users to seek professional medical care for serious conditions.
6. Keep responses concise, clear, and easy to read out loud.`;

document.addEventListener('DOMContentLoaded', () => {
    rotateHealthContent();
    setInterval(rotateHealthContent, 30000);
    initRevealAnimations();
    syncInitialLanguage();
});

// Selected site language synchronization
function syncInitialLanguage() {
    const siteLang = window.currentLanguage || localStorage.getItem('selectedLanguage') || 'en';
    const langCodeMap = {
        'en': 'en-US',
        'hi': 'hi-IN',
        'te': 'te-IN',
        'ta': 'ta-IN',
        'mr': 'mr-IN'
    };
    
    if (langCodeMap[siteLang]) {
        selectedVoiceLang = langCodeMap[siteLang];
    }
    
    const selectEl = document.getElementById('voice-lang-select');
    if (selectEl) {
        selectEl.value = selectedVoiceLang;
    }
}

// User language dropdown selection change listener
function onVoiceLangChange(langCode) {
    selectedVoiceLang = langCode;
    stopCurrentSpeech();
}
window.onVoiceLangChange = onVoiceLangChange;

// Preferred language system prompt generator
function getSystemPromptForLanguage() {
    const langName = langNameMap[selectedVoiceLang] || 'English';
    return `${BASE_SYSTEM_PROMPT}\n\nCRITICAL LANGUAGE INSTRUCTION: You MUST write your entire response natively in ${langName}. Do not respond in English unless requested.`;
}

// Health facts mariyu quotes rotation
function rotateHealthContent() {
    const healthQuotes = [
        "An apple a day keeps the doctor away! 🍎",
        "Health is not valued until sickness comes. - Thomas Fuller 💪",
        "Take care of your body. It's the only place you have to live. - Jim Rohn 🏃",
        "The greatest wealth is health. - Virgil 💎",
        "Movement is medicine. Stay active! 🚴",
        "Drink water like it's your job! Stay hydrated! 💧"
    ];
    const healthFacts = [
        "Your bones are 4 times stronger than concrete! 🦴",
        "The human body has enough iron to make a 3-inch nail! 🔩",
        "Your heart beats about 100,000 times a day! ❤️",
        "You have about 206 bones in your adult body! 🦴",
        "A fracture can start healing within hours of injury! ⚡"
    ];

    const randomQuote = healthQuotes[Math.floor(Math.random() * healthQuotes.length)];
    const randomFact = healthFacts[Math.floor(Math.random() * healthFacts.length)];

    const quoteEl = document.getElementById('health-quote');
    const factEl = document.getElementById('health-fact');
    if (quoteEl) quoteEl.textContent = randomQuote;
    if (factEl) factEl.textContent = randomFact;
}

// Input field keypress handler
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        stopCurrentSpeech();
        sendMessage();
    }
}
window.handleKeyPress = handleKeyPress;

// Spoken voice playback toggle
function toggleVoiceOutput() {
    isVoiceOutputEnabled = !isVoiceOutputEnabled;
    const btnText = document.getElementById('voice-toggle-text');
    const btnIcon = document.getElementById('voice-toggle-icon');

    if (isVoiceOutputEnabled) {
        if (btnText) btnText.textContent = "Voice On";
        if (btnIcon) btnIcon.textContent = "volume_up";
    } else {
        stopCurrentSpeech();
        if (btnText) btnText.textContent = "Voice Off";
        if (btnIcon) btnIcon.textContent = "volume_off";
    }
}
window.toggleVoiceOutput = toggleVoiceOutput;

// Ongoing Text-to-Speech playback stop function
function stopCurrentSpeech() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
}
window.stopCurrentSpeech = stopCurrentSpeech;

// Doctor voice synthesis in preferred regional language
function speakDoctorResponse(text) {
    if (!isVoiceOutputEnabled || !('speechSynthesis' in window)) return;

    stopCurrentSpeech();

    let cleanText = text
        .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
        .replace(/[*#_•`]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = selectedVoiceLang;
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const targetLangPrefix = selectedVoiceLang.split('-')[0];
    
    const matchedVoice = voices.find(v => v.lang === selectedVoiceLang || v.lang.startsWith(targetLangPrefix))
        || voices.find(v => v.lang.startsWith('en'));

    if (matchedVoice) {
        utterance.voice = matchedVoice;
    }

    window.speechSynthesis.speak(utterance);
}

// User question sending pipeline
async function sendMessage() {
    const input = document.getElementById('chat-input');
    if (!input) return;
    const message = input.value.trim();

    if (!message) return;

    stopCurrentSpeech();
    addMessage(message, 'user');
    input.value = '';

    const suggestions = document.getElementById('quick-suggestions');
    if (suggestions) suggestions.style.display = 'none';

    showTypingIndicator();

    try {
        const responseText = await getGroqResponse(message);
        hideTypingIndicator();
        addMessage(responseText, 'ai');
        speakDoctorResponse(responseText);
    } catch (error) {
        console.error('AI Doctor response error:', error);
        hideTypingIndicator();
        const fallback = getSmartFallback(message);
        addMessage(fallback, 'ai');
        speakDoctorResponse(fallback);
    }
}
window.sendMessage = sendMessage;

// Backend / Serverless API request
async function getGroqResponse(userMessage) {
    const systemPrompt = getSystemPromptForLanguage();

    try {
        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY_LOCAL}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: GROQ_MODEL,
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userMessage }
                ],
                temperature: 0.5,
                max_tokens: 1024
            })
        });

        if (!response.ok) {
            const proxyResponse = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    system_prompt: systemPrompt,
                    message: userMessage
                })
            });
            const proxyData = await proxyResponse.json();
            if (proxyData.choices && proxyData.choices[0]?.message?.content) {
                return proxyData.choices[0].message.content;
            }
            throw new Error('API request failed');
        }

        const data = await response.json();
        if (data.choices && data.choices[0]?.message?.content) {
            return data.choices[0].message.content;
        } else {
            throw new Error('Invalid response structure');
        }
    } catch (error) {
        const proxyResponse = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                system_prompt: systemPrompt,
                message: userMessage
            })
        });
        const proxyData = await proxyResponse.json();
        if (proxyData.choices && proxyData.choices[0]?.message?.content) {
            return proxyData.choices[0].message.content;
        }
        throw error;
    }
}

// Fallback logic
function getSmartFallback(message) {
    const lowerMessage = message.toLowerCase();

    const nonMedicalKeywords = ['skin care', 'skincare', 'beauty', 'makeup', 'cosmetic', 'fashion', 'politics', 'sports', 'movie', 'music', 'game', 'recipe', 'cooking'];
    if (nonMedicalKeywords.some(keyword => lowerMessage.includes(keyword))) {
        return "I'm a specialized medical assistant for injury assessment and health triage. 👨‍⚕️ I focus on health questions about injuries, fractures, sprains, pain management, and first aid.";
    }

    if (lowerMessage.includes('fracture') || lowerMessage.includes('broken') || lowerMessage.includes('break')) {
        return "Signs of a fracture include severe pain that worsens with movement, visible deformity, inability to bear weight, and rapid swelling. If you suspect a fracture, immobilize the area and seek medical care right away! 🏥";
    }
    if (lowerMessage.includes('sprain') || lowerMessage.includes('twist') || lowerMessage.includes('rolled')) {
        return "A sprain involves stretched or torn ligaments. Common signs are tenderness, swelling, bruising, and limited range of motion. Rest the joint and apply ice for 15-20 minutes every 2 hours! 🩹";
    }
    if (lowerMessage.includes('rice') || lowerMessage.includes('r.i.c.e')) {
        return "R.I.C.E stands for:\n🧊 Rest - Avoid using the joint\n❄️ Ice - Apply ice for 15-20 mins every 2 hours\n🔄 Compression - Wrap lightly with elastic bandage\n⬆️ Elevation - Elevate above heart level";
    }
    if (lowerMessage.includes('emergency') || lowerMessage.includes('er') || lowerMessage.includes('hospital') || lowerMessage.includes('urgent')) {
        return "Go to the Emergency Room immediately if you experience severe deformity, inability to move the limb, numbness, heavy bleeding, or bone protruding through skin! 🚨";
    }
    if (lowerMessage.includes('pain')) {
        return "For pain management: Apply ice for acute injuries (first 48h), elevate the limb, rest, and consider over-the-counter pain relievers following proper dosage instructions. Seek medical care if pain persists! 💊";
    }

    return "I'm here to help with your health and injury concerns! 🩺 Ask me about fractures vs sprains, R.I.C.E first aid, pain management, or emergency care.";
}

// Quick message template action handler
async function sendQuickMessage(message) {
    const input = document.getElementById('chat-input');
    if (input) input.value = message;
    await sendMessage();
}
window.sendQuickMessage = sendQuickMessage;

// Sticker message handler
async function sendSticker(sticker) {
    stopCurrentSpeech();
    addMessage(sticker, 'user', true);
    showTypingIndicator();

    try {
        const responseText = await getGroqResponse(`The user reacted with this emoji sticker: ${sticker}. Provide a brief, friendly, medical-assistant response.`);
        hideTypingIndicator();
        addMessage(responseText, 'ai');
        speakDoctorResponse(responseText);
    } catch {
        hideTypingIndicator();
        const response = "Got it! How can I assist with your health today? 🩺";
        addMessage(response, 'ai');
        speakDoctorResponse(response);
    }
}
window.sendSticker = sendSticker;

// Chat bubble rendering function
function addMessage(text, sender, isSticker = false) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;

    const messageDiv = document.createElement('div');

    if (sender === 'user') {
        messageDiv.className = 'flex gap-3 items-start justify-end';
        messageDiv.innerHTML = `
            <div class="flex-1 flex flex-col items-end">
                <div class="bg-primary-container p-4 rounded-2xl rounded-tr-none max-w-md ${isSticker ? 'text-5xl' : ''}">
                    <p class="font-body-md text-body-md text-on-primary ${isSticker ? 'text-center' : ''}">${escapeHtml(text)}</p>
                </div>
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-1 mr-2">Just now</p>
            </div>
            <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span class="material-symbols-outlined text-primary">person</span>
            </div>
        `;
    } else {
        messageDiv.className = 'flex gap-3 items-start';
        messageDiv.innerHTML = `
            <div class="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-2xl flex-shrink-0">
                👨‍⚕️
            </div>
            <div class="flex-1">
                <div class="bg-surface-container-high p-4 rounded-2xl rounded-tl-none max-w-md">
                    <p class="font-body-md text-body-md text-on-surface whitespace-pre-line">${escapeHtml(text)}</p>
                </div>
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-1 ml-2">Dr. AI Assistant • Just now</p>
            </div>
        `;
    }

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function escapeHtml(unsafe) {
    return String(unsafe)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Typing animation indicator
function showTypingIndicator() {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;

    const indicatorDiv = document.createElement('div');
    indicatorDiv.id = 'typing-indicator';
    indicatorDiv.className = 'flex gap-3 items-start';
    indicatorDiv.innerHTML = `
        <div class="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-2xl flex-shrink-0">
            👨‍⚕️
        </div>
        <div class="bg-surface-container-high p-4 rounded-2xl rounded-tl-none flex items-center gap-1">
            <span class="w-2 h-2 bg-primary rounded-full animate-bounce"></span>
            <span class="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></span>
            <span class="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></span>
        </div>
    `;
    chatMessages.appendChild(indicatorDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
}

// Chat history reset
function clearChat() {
    stopCurrentSpeech();
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;

    chatMessages.innerHTML = `
        <div class="flex gap-3 items-start">
            <div class="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-2xl flex-shrink-0">
                👨‍⚕️
            </div>
            <div class="flex-1">
                <div class="bg-surface-container-high p-4 rounded-2xl rounded-tl-none max-w-md">
                    <p class="font-body-md text-body-md text-on-surface">
                        Hello! I'm Dr. AI, your virtual health assistant. 👋
                    </p>
                    <p class="font-body-md text-body-md text-on-surface mt-2">
                        You can type your health question in your preferred language!
                    </p>
                </div>
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-1 ml-2">Just now</p>
            </div>
        </div>
    `;
    const suggestions = document.getElementById('quick-suggestions');
    if (suggestions) suggestions.style.display = 'block';
}
window.clearChat = clearChat;

function initRevealAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        document.querySelectorAll('.reveal').forEach((el) => {
            revealObserver.observe(el);
        });
    }
}
