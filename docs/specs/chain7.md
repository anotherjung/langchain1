# Chain7 Developer Documentation

## Overview
" Advanced prompt composition using PipelinePromptTemplate for complex multi-part prompts
" Movie recommendation AI system with structured example-based responses
" Modular prompt architecture with reusable components

## Key Features
" **Pipeline Prompts**: Composition of multiple PromptTemplate instances
" **Structured AI Responses**: Example-driven conversation formatting
" **Modular Design**: Separate prompts for system role, examples, and user input
" **Variable Interpolation**: Multiple template variables across pipeline stages

## Architecture Components
" **Model**: Google Gemini 1.5 Flash for movie recommendations
" **System Prompt**: AI assistant role definition as movie buff
" **Example Response**: Template showing desired response format
" **Conversation Prompt**: User query template for movie recommendations
" **Final Prompt**: Composition template combining all components

## Pipeline Structure
" **systemRole**: "You are a helpful A.I assistant who is also a movie buff"
" **aiExampleResponse**: Format template with example genre and answers
" **newConversation**: User question template for specific genre requests
" **finalHumanPrompt**: Combines all components with placeholder variables

## Prompt Composition Pattern
```javascript
const composedPrompt = new PipelinePromptTemplate({
    finalPrompt: finalHumanPrompt,
    pipelinePrompts: [
        { name: "systemRole", prompt: systemPrompt },
        { name: "aiExampleResponse", prompt: aiExampleResponsePrompt },
        { name: "newConversation", prompt: newConversationPrompt }
    ]
});
```

## Variable System
" **example_genre**: Genre used in example formatting (e.g., "action")
" **example_answer**: Movie title for example responses (e.g., "Mission Impossible")
" **question_genre**: Target genre for user recommendation request
" **Template Inheritance**: Variables flow through pipeline components

## Execution Methods
" **Direct Format**: `composedPrompt.format()` then `model.invoke()`
" **Chain Pipeline**: `composedPrompt.pipe(model).invoke()` (recommended)
" **Commented Alternative**: Shows both approaches for comparison

## Response Format Structure
" **Question Format**: "Suggest 3 most recent {genre} movie?"
" **Answer Pattern**: "Great question, {movie} {movie} {movie} is my favorite"
" **Structured Output**: Consistent formatting across all movie recommendations

## Configuration
" Environment: Requires GOOGLE_API_KEY for Google GenAI access
" Model: Gemini 1.5 Flash for conversational responses
" Temperature: Default setting (not explicitly set)

## Developer Notes
" **Prompt Hierarchy**: Final prompt combines all pipeline components
" **Variable Scoping**: Each pipeline prompt can have independent variables
" **Format Consistency**: Example response guides AI output structure
" **Chain vs Direct**: Pipeline method preferred for complex prompt composition
" **Reusability**: Individual prompt templates can be reused in other contexts

## Use Cases
" **Complex Prompt Engineering**: Multi-component prompt systems
" **Conversational AI**: Structured response formatting
" **Domain-Specific Assistants**: Movie recommendation specialization
" **Template Composition**: Building prompts from modular components

## Example Usage
```javascript
const response = await chain.invoke({
    example_genre: "action",
    example_answer: "Mission Impossible", 
    question_genre: "science fiction"
});
```

## Benefits
" **Maintainability**: Separate concerns for different prompt components
" **Flexibility**: Easy modification of individual prompt parts
" **Consistency**: Structured approach to complex prompt creation
" **Reusability**: Modular components for different conversation types