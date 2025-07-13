import dotenv from "dotenv";
dotenv.config();

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const model = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-flash",
    apiKey: process.env.GOOGLE_API_KEY,
    callbacks: [
        {
          handleLLMEnd(output) {
            console.log(JSON.stringify(output, null, 2));
          },
        },
      ],
});

const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", "Translate the following from English into {language}"],
    ["user", "{user}"]
])

const chain = promptTemplate.pipe(model)

const response = await chain.invoke({
    language: "Korean",
    user: 'Good Mornin, how it going?'
})

console.log(response.content)

console.log(response.usage_metadata.input_tokens)

console.log(response.usage_metadata.output_tokens)

console.log(response.usage_metadata.total_tokens)

//node chain9.js