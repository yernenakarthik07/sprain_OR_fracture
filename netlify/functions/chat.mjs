// Server-side proxy for AI Doctor chat requests, keeping the Groq API key off the client.

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'
const MODEL_NAME = 'llama-3.3-70b-versatile'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export default async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS })
  }

  if (req.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405, headers: CORS_HEADERS })
  }

  const groqApiKey = process.env.GROQ_API_KEY
  if (!groqApiKey) {
    return Response.json(
      { error: 'AI Doctor chat is not configured. Set GROQ_API_KEY in the site environment variables.' },
      { status: 503, headers: CORS_HEADERS },
    )
  }

  try {
    const { system_prompt, message } = await req.json()

    const groqResponse = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: [
          { role: 'system', content: system_prompt || 'You are an empathetic medical assistant.' },
          { role: 'user', content: message },
        ],
        temperature: 0.5,
        max_tokens: 1024,
      }),
    })

    const data = await groqResponse.json()
    return Response.json(data, { status: groqResponse.status, headers: CORS_HEADERS })
  } catch (error) {
    return Response.json({ error: 'Failed to process chat request' }, { status: 500, headers: CORS_HEADERS })
  }
}

export const config = {
  path: '/api/chat',
}
