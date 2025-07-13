import dotenv from "dotenv";
dotenv.config();

import {ChatGoogleGenerativeAI} from "@langchain/google-genai"
import {PromptTemplate} from "@langchain/core/prompts"
import {RunnableSequence} from "@langchain/core/runnables"

const model = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-flash",
    apiKey: process.env.GOOGLE_API_KEY,
    temperature: 0
  });

const templateString = "Suggest 3 nicknames for a {pet_animal}"

const template = PromptTemplate.fromTemplate(templateString)

const templateString2 = "Which of these {pet_names} is also a good pet name for a dog"

const template2 = PromptTemplate.fromTemplate(templateString2)

const chain = template.pipe(model)

const composedChain = RunnableSequence.from([
    chain,
    (input) => ({pet_names : input.content}),
    template2,
    model
])

const response = await composedChain.invoke({
    //pet_animal: "Dog",
    pet_animal: "Panda"
})

console.log(response.content)