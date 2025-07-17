// Allow responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  // Menggunakan API key dan endpoint baru dari laozhang.ai
  // IMPORTANT: For v0 preview, the API key is hardcoded for demonstration.
  // In a real deployment, ALWAYS use environment variables for security.
  // For Vercel deployments, set LAOZHANG_API_KEY in Project Settings -> Environment Variables.
  const LAOZHANG_API_KEY = "sk-7b34GIMObUK7nhdoC46dF163F4Fa44E9Bd31A829F7B29e48"
  const LAOZHANG_API_ENDPOINT = "https://api.laozhang.ai/v1/chat/completions"
  const MODEL_NAME = "gpt-4o-mini"

  if (!LAOZHANG_API_KEY) {
    const errorMessage = "Server configuration error: LAOZHANG_API_KEY is missing."
    console.error(errorMessage)
    return new Response(errorMessage, {
      status: 500,
      statusText: errorMessage,
    })
  }

  // Tambahkan system message baru untuk mendefinisikan persona AI
  const systemMessage = {
    role: "system",
    content:
      "You are a professional Web3 and crypto enthusiast named SKI MASK AI. You are highly knowledgeable about strategies, market analysis, blockchain technology, DeFi, NFTs, AI, and everything related to the Web3 and AI world. Provide informative, accurate, simple, and clear answers. Always respond in English. Do not use any markdown formatting like bolding (**).",
  }

  // Gabungkan system message dengan pesan dari pengguna
  const messagesWithSystem = [systemMessage, ...messages]

  try {
    const response = await fetch(LAOZHANG_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LAOZHANG_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: messagesWithSystem, // Gunakan messagesWithSystem
        stream: true, // Meminta streaming dari laozhang.ai
      }),
    })

    if (!response.ok || !response.body) {
      const errorData = await response.json().catch(() => ({ message: response.statusText }))
      const errorMessage = `Laozhang AI API error: ${errorData.message || "Unknown error"}`
      console.error("Laozhang AI API error:", errorData)
      return new Response(errorMessage, {
        status: response.status,
        statusText: errorMessage,
      })
    }

    const reader = response.body.getReader()
    const encoder = new TextEncoder()
    const decoder = new TextDecoder()
    let buffer = ""

    const customReadable = new ReadableStream({
      async start(controller) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) {
            controller.close()
            break
          }

          buffer += decoder.decode(value, { stream: true })

          const lines = buffer.split("\n")
          buffer = lines.pop() || ""

          for (const rawLine of lines) {
            const line = rawLine.replace(/^data:\s*/, "").trim()

            if (!line) continue
            if (line === "[DONE]") {
              controller.close()
              return
            }

            if (line.startsWith("{")) {
              try {
                const chunk = JSON.parse(line)
                const content = chunk.choices?.[0]?.delta?.content
                if (content) {
                  controller.enqueue(encoder.encode(content))
                }
              } catch (e) {
                console.error("Failed to parse JSON chunk from Laozhang AI:", e, line)
              }
            }
          }
        }
      },
    })

    return new Response(customReadable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
      },
    })
  } catch (error: any) {
    console.error("Error in AI stream:", error)
    const errorMessage = `Failed to get a response from SKI MASK AI (Laozhang AI): ${error.message || "Unknown error occurred during AI processing."}`
    return new Response(errorMessage, {
      status: 500,
      statusText: errorMessage,
    })
  }
}
