import Config from "@/config"

const API_URL = "https://api.elevenlabs.io/v1"

export const elevenLabsService = {
  synthesizeSpeech: async (text: string, voiceId: string) => {
    const response = await fetch(`${API_URL}/text-to-speech/${voiceId}`, {
      method: "POST",
      headers: {
        "xi-api-key": Config.elevenLabsApiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.8,
        },
      }),
    })

    return await response.arrayBuffer()
  },
}
