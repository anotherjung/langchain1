import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",
  temperature: 0
});

const promptTemplate = ChatPromptTemplate.fromMessages([
  ["system", "You are an expert in {area_of_expertise}."],
  ["user", "{question}"],
]);

const chain = promptTemplate.pipe(model);

const response = await chain.invoke({
  area_of_expertise: "AI",
  question: "Which LLM are you",
});
console.log(response.content);

