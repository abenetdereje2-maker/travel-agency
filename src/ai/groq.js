import Groq from "groq-sdk";
import { SYSTEM_PROMPT } from "./prompts";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function askAI(message, history = []) {
  try {
    const messages = [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },

      ...history,

      {
        role: "user",
        content: message,
      },
    ];

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages,
      temperature: 0.7,
      max_completion_tokens: 700,
      top_p: 1,
      stream: false,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Groq Error:", error);

    if (error.status === 401) {
      return "❌ Invalid Groq API Key.";
    }

    if (error.status === 429) {
      return "⚠️ Groq rate limit exceeded. Please try again in a few moments.";
    }

    return "❌ Sorry, Luxe Travel AI is temporarily unavailable. Please try again later.";
  }
}