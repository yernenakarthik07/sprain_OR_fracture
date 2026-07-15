/**
 * Vercel Serverless Function — Groq / Gemini AI Chat & Voice Proxy
 * Primary model: Groq Llama-3.3-70b-versatile & Whisper
 */

const GROQ_API_KEY_DEFAULT = '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';
const GROQ_MODEL = 'llama-3.3-70b-versatile';

async function handler(req, res) {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ error: 'Method not allowed' });
        }

        const apiKey = process.env.GROQ_API_KEY || GROQ_API_KEY_DEFAULT;
        
        const systemPrompt = req.body.system_prompt || "You are Dr. AI, an expert medical triage assistant.";
        const userMessage = req.body.message || (req.body.contents ? req.body.contents[0]?.parts[0]?.text : "");

        const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

        const upstream = await fetch(GROQ_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
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
            }),
        });

        const data = await upstream.json();
        return res.status(upstream.status).json(data);

    } catch (err) {
        console.error('[Groq Chat Proxy Error]', err);
        return res.status(500).json({
            error: 'Proxy function error',
            message: err.message,
        });
    }
}

module.exports = handler;
