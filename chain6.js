import dotenv from "dotenv";
dotenv.config();
import { readFile } from "fs/promises";

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const model = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-flash",
    apiKey: process.env.GOOGLE_API_KEY,
});

const invokeImage = await readFile("public/photo2.jpeg")
const base64Image = invokeImage.toString("base64")

const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", "Describe the image in detail."],
    ["user", [
        {
            "type": "text",
            "text": "What do you see in this image?"
        },
        {
            "type": "image_url",
            "image_url": {
                "url": `data:image/jpeg;base64,${base64Image}`
            }
        }
    ]],
]);

const chain = promptTemplate.pipe(model);

const response = await chain.invoke({});

console.log(response.content);

//node chain6.js