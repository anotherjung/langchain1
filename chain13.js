import {ChatOllama} from "@langchain/ollama"
import {PromptTemplate} from "@langchain/core/prompts"
import {RunnableSequence} from "@langchain/core/runnables"

const model = new ChatOllama({
    model: "gemma3:4b-it-qat",
    temperature: 0,
    maxRetries: 2,
    //baseURL: "http://localhost:11434",
})

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
    //pet_animal: "Dog"
    pet_animal: ["Fido", "Buddy", "Pax"]
})

console.log(response.content)