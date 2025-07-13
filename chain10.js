import { ChatOllama } from "@langchain/ollama";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const chat = new ChatOllama({
    model: "gemma3:4b-it-qat",
    temperature: 0,
    maxRetries: 2,
    //baseURL: "http://localhost:11434",
});

const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", `Reply every prompt in Mexican Spanish`] ,
    ["user", "{input}"]
]);


const chainToCancel = promptTemplate.pipe(chat)

const controller = new AbortController()

console.time("CancellationTimer");

setTimeout(()=> {
    controller.abort()
}, 10000)

try {
    await chainToCancel.invoke({
        input: "What is the latest news climate change"
    },{
        signal: controller.signal
    })
} catch (error) {
    console.log(error)
}

console.timeEnd("CancellationTimer")