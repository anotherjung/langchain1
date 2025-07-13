# Chain5 Developer Documentation

## Overview
• Basic PromptTemplate implementation demonstrating template formatting
• Simple variable interpolation without AI model integration
• Two methods for prompt generation: format() and invoke()

## Key Features
• **Template Creation**: PromptTemplate.fromTemplate() shorthand method
• **Variable Interpolation**: Dynamic content insertion with {variable} syntax
• **Dual Output Methods**: Both format() and invoke() for prompt generation
• **Standalone Operation**: No model or parser dependencies

## Architecture Components
• **PromptTemplate**: Core template engine from @langchain/core/prompts
• **Template String**: "how many {items} can git into a {container}?"
• **Input Variables**: items, container (automatically detected)

## Implementation Methods
• **Long Form**: new PromptTemplate() with explicit inputVariables array
• **Short Form**: PromptTemplate.fromTemplate() with automatic variable detection
• **Current**: Uses short form implementation for cleaner code

## Output Methods
• **format()**: Returns formatted string directly
• **invoke()**: Returns PromptValue object (standard LangChain pattern)
• **Usage**: Both methods accept same parameter object structure

## Example Usage
```javascript
const promptTemplate = PromptTemplate.fromTemplate(
    "how many {items} can git into a {container}?"
);

// String output
const prompt1 = await promptTemplate.format({ items: "adults", container: "truck" });

// PromptValue object
const prompt2 = await promptTemplate.invoke({ items: "adults", container: "truck" });
```

## Variable System
• **Syntax**: Curly braces {variableName} for placeholder definition
• **Detection**: Automatic variable extraction from template string
• **Flexibility**: Any number of variables supported in template

## Developer Notes
• **Template Foundation**: Basic building block for more complex chains
• **No Model Required**: Pure template formatting without AI integration
• **Async Methods**: Both format() and invoke() are async operations
• **Object vs String**: invoke() returns LangChain objects, format() returns strings
• **Pipeline Ready**: invoke() output compatible with chain pipelines

## Use Cases
• **Template Testing**: Validate prompt structure before model integration
• **Dynamic Prompts**: Generate variations of prompts programmatically
• **Chain Foundation**: Base component for building complex LangChain pipelines
• **Prompt Engineering**: Rapid iteration on prompt templates