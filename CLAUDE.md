# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a LangChain project demonstrating AI chain implementations using Google's Generative AI. The main application is a simple chatbot system that creates a prompt template and chains it with a Google Generative AI model.

## Architecture

- **Single-file application**: `chain.js` contains the complete implementation
- **LangChain integration**: Uses `@langchain/core` for prompt templates and `@langchain/google-genai` for the AI model
- **Simple chain pattern**: Demonstrates the basic pipe() pattern for chaining prompts with models

## Development Commands

- **Install dependencies**: `npm install`
- **Run the application**: `node chain.js`
- **Test**: No test framework is currently configured (package.json shows placeholder test script)

## Key Dependencies

- `@langchain/core`: Core LangChain functionality for prompts and chains
- `@langchain/google-genai`: Google Generative AI integration
- `langchain`: Main LangChain framework

Version overrides are used to pin `@langchain/core` to version 0.3.62.

## Environment Setup

The project requires a Google API key:
- Create a `.env` file (already in .gitignore)
- Set `GOOGLE_API_KEY=your-api-key`

## Code Patterns

The current implementation follows a standard LangChain pattern:
1. Import required modules
2. Instantiate the model with configuration
3. Create a prompt template with system and user messages
4. Chain the template with the model using `.pipe()`
5. Invoke the chain with input variables

## Development Notes

- The project uses ES modules (import statements)
- Model is configured with Gemini 1.5 Flash and temperature 0
- No build process or bundling is required for this simple Node.js application
- No linting or formatting tools are currently configured