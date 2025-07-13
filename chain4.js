import dotenv from "dotenv";
dotenv.config();

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",
  apiKey: process.env.GOOGLE_API_KEY,
  temperature: 0
});

const promptTemplate = ChatPromptTemplate.fromMessages([
  ["system", "You are an expert in {area_of_expertise}."],
  ["user", "{question}"],
]);

const stringParser = new StringOutputParser();

//pipe
//invoke

const chain = promptTemplate.pipe(model).pipe(stringParser);

//invoke chain
const response = await chain.invoke({
  area_of_expertise: "AI",
  question: "explain implementation of langchain work with google genai? use javascript.",
});
console.log(response);

