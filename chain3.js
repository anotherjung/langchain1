import dotenv from "dotenv";
dotenv.config();

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

import { HumanMessage, SystemMessage } from "@langchain/core/messages";

// Validate environment setup
if (!process.env.GOOGLE_API_KEY) {
  console.error("❌ Error: GOOGLE_API_KEY not found in environment variables");
  console.log("💡 Please add GOOGLE_API_KEY to your .env file");
  process.exit(1);
}

const model = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",
  apiKey: process.env.GOOGLE_API_KEY,
  temperature: 0
});

// Configuration: Get input from command line or use default
const inputText = process.argv[2] || "Hello! How are you doing today? I hope you're having a wonderful time learning about AI and language models.";
const targetLanguage = process.argv[3] || "Italian";

const messages = [
    new SystemMessage(`Translate the following from English into ${targetLanguage}`),
    new HumanMessage(inputText),
  ];

console.log(`🌐 Translating to ${targetLanguage}:`);
console.log(`📝 Input: "${inputText}"`);
console.log();

try {
  const stream = await model.stream(messages);
  
  console.log("🔄 Streaming translation:");
  let fullResponse = "";
  
  for await (const chunk of stream) {
    const content = chunk.content || "";
    fullResponse += content;
    process.stdout.write(content); // Stream output without newlines
  }
  
  console.log("\n\n✅ Complete translation:");
  console.log(fullResponse);
  
} catch (error) {
  console.error("❌ Translation failed:", error.message);
  process.exit(1);
}

// Usage examples:
// node chain3.js
// node chain3.js "Good morning!"
// node chain3.js "Good morning!" "French"
// node chain3.js "How's the weather?" "Spanish"
