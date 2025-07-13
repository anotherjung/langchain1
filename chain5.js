import { PromptTemplate } from "@langchain/core/prompts";

/*
const promptTemplate = new PromptTemplate({
    template: "how many {items} can git into a {container}?",
    inputVariables: ["items", "container"],
});
*/

//class short code 
const promptTemplate = PromptTemplate.fromTemplate(
    "how many {items} can git into a {container}?"
);

const prompt1 = await promptTemplate.format({ items: "adults", container: "truck" });
console.log(prompt1);

const prompt2 = await promptTemplate.invoke({ items: "adults", container: "truck" });
console.log(prompt2);
