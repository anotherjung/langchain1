import {ChatOllama} from "@langchain/ollama"
import  { StringOutputParser, CommaSeparatedListOutputParser } from "@langchain/core/output_parsers"
import { PromptTemplate } from "@langchain/core/prompts"

const model = new ChatOllama({
    model: "gemma3:4b-it-qat",
    temperature: 0,
    maxRetries: 2,
    //baseURL: "http://localhost:11434",
})

const response = await model.invoke("what year did you finish your training?")

const stringParser = new StringOutputParser()

const output = await stringParser.parse(response.content)

console.log(typeof output);
console.log(response.content)


//comma separated list output parser

const templateString = "List 10 best hikes in {continent}.\n{format_instructions}"

const template = PromptTemplate.fromTemplate(templateString)

const listParser = new CommaSeparatedListOutputParser()

const formatInstructions = listParser.getFormatInstructions()

console.log(22, formatInstructions)

const chain = template.pipe(model)

const response2 = await chain.invoke({
    continent: "United States",
    format_instructions: formatInstructions
})

console.log(22, response2.content)

const listOutput = await listParser.parse(response2.content)

console.log(22, listOutput)