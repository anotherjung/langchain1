import { ChatOllama } from "@langchain/ollama";
import { PromptTemplate } from "@langchain/core/prompts";

const model = new ChatOllama({
    model: "gemma3:4b-it-qat",
    temperature: 0,
    maxRetries: 2,
    //baseURL: "http://localhost:11434",
});

//first prompt to model
const inputText = "Ollama is an AI company that ";

const completion = await model.invoke(inputText);
completion;

console.log(completion.content)

//send prompt to model

const prompt = "what is good morning, how are you in mexican spanish"

const response = await model.invoke(prompt)
console.log(response.content)


//node chain8.js