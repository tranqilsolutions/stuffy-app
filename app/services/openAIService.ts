import Config from "@/config"

const API_URL = "https://api.openai.com/v1"

export const openAIService = {
  transcribe: async (audioFile: File) => {
    const formData = new FormData()
    formData.append("file", audioFile)
    formData.append("model", "whisper-1")

    const response = await fetch(`${API_URL}/audio/transcriptions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Config.openAIApiKey}`,
      },
      body: formData,
    })

    return await response.json()
  },

  chat: async (messages: Array<{ role: string; content: string }>) => {
    const response = await fetch(`${API_URL}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Config.openAIApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages,
      }),
    })

    return await response.json()
  },
}
