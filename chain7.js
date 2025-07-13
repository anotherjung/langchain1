import dotenv from "dotenv";
dotenv.config();

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate, PipelinePromptTemplate } from "@langchain/core/prompts";

const model = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-flash",
    apiKey: process.env.GOOGLE_API_KEY,
});

const systemPrompt = PromptTemplate.fromTemplate("You are a helpful A.I assistant who is also a movie buff")

const aiExampleResponsePrompt = PromptTemplate.fromTemplate(`
    Keep your reponse in this format:
    Question: Suggest 3 most recent {example_genre} movie?
    Answer: Great question, {example_answer} {example_answer} {example_answer} is my favorite
`)

const newConversationPrompt = PromptTemplate.fromTemplate("Question: Can you recommend a {question_genre} movie?")

const finalHumanPrompt = PromptTemplate.fromTemplate(`
    {systemRole}
    {aiExampleResponse}
    {newConversation}
`)

const composedPrompt = new PipelinePromptTemplate({
    finalPrompt: finalHumanPrompt,
    pipelinePrompts: [
        {
            name: "systemRole",
            prompt: systemPrompt
        },
        {
            name: "aiExampleResponse",
            prompt: aiExampleResponsePrompt
        },
        {
            name: "newConversation",
            prompt: newConversationPrompt
        }
    ]
})

//run without chain 
/*
const formattedPrompt = await composedPrompt.format({
    example_genre: "sci-fi",
    example_answer: "Averagers",
    question_genre: "action"
})
const response = await model.invoke(formattedPrompt)
console.log(response.content)
*/

//run using chain
const chain = composedPrompt.pipe(model)
const response = await chain.invoke({
    example_genre: "action",
    example_answer: "Mission Impossible",
    question_genre: "science fiction"
})
console.log(response.content)
//node chain7.js    



//const chain = composedPrompt.pipe(model)


