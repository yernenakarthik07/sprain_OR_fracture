// Groq API & Speech Assistant Configuration
// -----------------------------------------------------------
const GROQ_API_KEY_LOCAL = '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';
const GROQ_MODEL = 'llama-3.3-70b-versatile';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// State Management for Voice & Assistant
let isVoiceOutputEnabled = true;
let isListening = false;
let recognition = null;

// System prompt to make Llama 3 act as a professional medical assistant
const SYSTEM_PROMPT = `You are Dr. AI, a professional, empathetic medical assistant specializing in injury assessment, fractures, sprains, and general health advice.

IMPORTANT RULES:
1. ONLY answer questions related to health, medical conditions, injuries, symptoms, and wellness.
2. If asked about non-medical topics (politics, entertainment, technology, etc.), politely redirect: "I'm a medical assistant and can only help with health-related questions. Do you have any concerns about injuries, pain, or your health?"
3. Always provide accurate, helpful medical information concisely.
4. Use a warm, empathetic, professional tone.
5. Remind users to seek professional medical care or emergency services for serious conditions.
6. Never provide specific medication dosages - always advise consulting a qualified doctor.

Keep responses conversational, concise, clear, and easy to speak out loud.`;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    rotateHealthContent();
    setInterval(rotateHealthContent, 30000);
    initRevealAnimations();
    initSpeechRecognition();
});

// Rotate health quotes and facts
function rotateHealthContent() {
    const healthQuotes = [
        "An apple a day keeps the doctor away, but if the doctor is cute, forget the fruit! 🍎",
        "Health is not valued until sickness comes. - Thomas Fuller 💪",
        "Take care of your body. It's the only place you have to live. - Jim Rohn 🏃",
        "The greatest wealth is health. - Virgil 💎",
        "Movement is medicine. Get active today! 🚴",
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

// Handle enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        stopCurrentSpeech();
        sendMessage();
    }
}

// Voice Output Toggle (Mute / Unmute Doctor Voice)
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

// Stop any ongoing Text-to-Speech playback immediately (No Conflicts)
function stopCurrentSpeech() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
}

// Text-to-Speech (TTS) Doctor Voice Output
function speakDoctorResponse(text) {
    if (!isVoiceOutputEnabled || !('speechSynthesis' in window)) return;

    stopCurrentSpeech();

    // Clean text: strip emojis, bullets, and markdown for smooth voice reading
    let cleanText = text
        .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
        .replace(/[*#_•`]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    // Pick warm English natural voice
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Daniel') || v.name.includes('Karen')) && v.lang.startsWith('en'))
        || voices.find(v => v.lang.startsWith('en'));

    if (englishVoice) {
        utterance.voice = englishVoice;
    }

    window.speechSynthesis.speak(utterance);
}

// Speech Recognition Initialization (STT - Speech to Text)
function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        console.warn('Speech Recognition API not supported in this browser.');
        return;
    }

    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
        isListening = true;
        updateMicUI(true);
        stopCurrentSpeech();
    };

    recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }
        const inputEl = document.getElementById('chat-input');
        if (inputEl) inputEl.value = transcript;
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        stopListening();
    };

    recognition.onend = () => {
        stopListening();
        const inputEl = document.getElementById('chat-input');
        if (inputEl && inputEl.value.trim().length > 0) {
            sendMessage();
        }
    };
}

// Toggle Voice Listening State
function toggleVoiceInput() {
    if (!recognition) {
        alert('Speech recognition is not supported in your browser. Please use Chrome, Edge, or Safari.');
        return;
    }

    stopCurrentSpeech();

    if (isListening) {
        recognition.stop();
        stopListening();
    } else {
        try {
            recognition.start();
        } catch (e) {
            console.error('Recognition start error:', e);
            stopListening();
        }
    }
}

function stopListening() {
    isListening = false;
    updateMicUI(false);
}

function updateMicUI(listening) {
    const micIcon = document.getElementById('mic-icon');
    const micBtn = document.getElementById('mic-btn');

    if (micIcon && micBtn) {
        if (listening) {
            micIcon.textContent = 'mic';
            micIcon.className = 'material-symbols-outlined text-2xl text-red-500 animate-pulse';
            micBtn.className = 'p-3 rounded-xl bg-red-100 dark:bg-red-900/40 border border-red-500 text-red-500 transition-all flex items-center justify-center';
        } else {
            micIcon.textContent = 'mic';
            micIcon.className = 'material-symbols-outlined text-2xl text-on-surface';
            micBtn.className = 'p-3 rounded-xl bg-surface-container-high hover:bg-surface-container text-on-surface transition-all flex items-center justify-center border border-outline-variant';
        }
    }
}

// Main Send Message Function
async function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();

    if (!message) return;

    stopCurrentSpeech();
    addMessage(message, 'user');
    input.value = '';

    const suggestions = document.getElementById('quick-suggestions');
    if (suggestions) suggestions.style.display = 'none';

    showTypingIndicator();

    try {
        console.log('Sending message to Groq Llama 3 AI...');
        const responseText = await getGroqResponse(message);
        hideTypingIndicator();
        addMessage(responseText, 'ai');
        speakDoctorResponse(responseText);
    } catch (error) {
        console.error('AI Request Error:', error);
        hideTypingIndicator();
        const fallback = getSmartFallback(message);
        addMessage(fallback, 'ai');
        speakDoctorResponse(fallback);
    }
}

// Call Groq API with Llama 3 model
async function getGroqResponse(userMessage) {
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
                    { role: 'system', content: SYSTEM_PROMPT },
                    { role: 'user', content: userMessage }
                ],
                temperature: 0.5,
                max_tokens: 1024
            })
        });

        if (!response.ok) {
            // Fallback to proxy route
            const proxyResponse = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    system_prompt: SYSTEM_PROMPT,
                    message: userMessage
                })
            });
            const proxyData = await proxyResponse.json();
            if (proxyData.choices && proxyData.choices[0]?.message?.content) {
                return proxyData.choices[0].message.content;
            }
            throw new Error('Groq API request failed.');
        }

        const data = await response.json();
        if (data.choices && data.choices[0]?.message?.content) {
            return data.choices[0].message.content;
        } else {
            throw new Error('Invalid response structure from Groq API');
        }
    } catch (error) {
        console.warn('Direct Groq call error, attempting proxy:', error.message);
        const proxyResponse = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                system_prompt: SYSTEM_PROMPT,
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

// Smart local fallback logic
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
    if (lowerMessage.match(/\b(hi|hello|hey|greetings)\b/)) {
        return "Hello! 👋 I'm Dr. AI. How can I assist you with your health or injury questions today?";
    }

    return "I'm here to help with your health and injury concerns! 🩺 Ask me about fractures vs sprains, R.I.C.E first aid, pain management, or emergency care.";
}

// Send quick message
async function sendQuickMessage(message) {
    document.getElementById('chat-input').value = message;
    await sendMessage();
}

// Send sticker
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

// Render Message UI
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
                        Hello! I'm Dr. AI, your virtual health assistant powered by Groq Llama 3 & Whisper. 👋
                    </p>
                    <p class="font-body-md text-body-md text-on-surface mt-2">
                        You can speak or type your question!
                    </p>
                </div>
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-1 ml-2">Just now</p>
            </div>
        </div>
    `;
    const suggestions = document.getElementById('quick-suggestions');
    if (suggestions) suggestions.style.display = 'block';
}

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
