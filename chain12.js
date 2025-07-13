import {ChatOllama} from "@langchain/ollama"
import {PromptTemplate} from "@langchain/core/prompts"
import {RunnableSequence} from "@langchain/core/runnables"
import { JsonOutputParser } from "@langchain/core/output_parsers"

const model = new ChatOllama({
    model: "gemma3:4b-it-qat",
    temperature: 0,
    maxRetries: 2,
    //baseURL: "http://localhost:11434",
})

const templateString = "Suggest 3 nicknames for a {pet_animal}"

const template = PromptTemplate.fromTemplate(templateString)

//pipe method is a shortcut for RunnableSequence.from([template, model])
const chain = template.pipe(model)

const response = await chain.invoke({
    //pet_animal: "Bulldog"
    pet_animal: "Dog"
})

console.log(response.content) // array of nicknames

const outputParser = new JsonOutputParser();

//RunnableSequence.from() is a more explicit way to create a chain

const template2 = PromptTemplate.fromTemplate(
    "Suggest a pet profile as JSON with keys: name, age, and breed for a {pet_animal}."
  );

const chain2 = RunnableSequence.from([
    template2,
    model,
    outputParser
])

console.log(await chain2.invoke({
    pet_animal: "Dog"
}))
