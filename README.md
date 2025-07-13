# LangChain Examples Collection

A comprehensive collection of LangChain implementations demonstrating various AI integration patterns, from basic prompts to advanced multi-stage pipelines.

## Quick Start

```bash
npm init -y
npm install langchain @langchain/core @langchain/google-genai @langchain/ollama dotenv
```

Create `.env` file:
```
GOOGLE_API_KEY=your-google-api-key
```

## Chain Examples

### Basic Implementations
- **chain.js** - Simple prompt template with Google GenAI ([docs](docs/specs/chain.md))
- **chain2.js** - Direct message handling with dotenv integration ([docs](docs/specs/chain2.md))
- **chain3.js** - Streaming translation with command-line arguments ([docs](docs/specs/chain3.md))
- **chain4.js** - String output parsing for clean responses ([docs](docs/specs/chain4.md))
- **chain5.js** - Basic PromptTemplate formatting (no AI model) ([docs](docs/specs/chain5.md))

### Advanced Features
- **chain6.js** - Multimodal image analysis with base64 encoding ([docs](docs/specs/chain6.md))
- **chain7.js** - Pipeline prompt composition for movie recommendations ([docs](docs/specs/chain7.md))
- **chain8.js** - Local Ollama integration (no API keys needed) ([docs](docs/specs/chain8.md))
- **chain9.js** - Callback monitoring and token usage tracking ([docs](docs/specs/chain9.md))
- **chain10.js** - Request cancellation with abort signals ([docs](docs/specs/chain10.md))

### Output Parsing & Data Structures
- **chain11.js** - String and comma-separated list parsers ([docs](docs/specs/chain11.md))
- **chain12.js** - JSON output parsing with RunnableSequence ([docs](docs/specs/chain12.md))
- **chain13.js** - Multi-stage chain composition (Ollama) ([docs](docs/specs/chain13.md))
- **chain13g.js** - Multi-stage chain composition (Google GenAI) ([docs](docs/specs/chain13.md))

## Key Concepts Demonstrated

- **Basic Prompting**: Template variables and model invocation
- **Streaming Responses**: Real-time output processing
- **Local vs Cloud**: Ollama vs Google GenAI comparison
- **Output Parsing**: String, JSON, and list data extraction
- **Chain Composition**: Multi-stage processing pipelines
- **Error Handling**: Timeouts, cancellation, and graceful failures
- **Multimodal**: Text + image processing capabilities

## Running Examples

```bash
# Google GenAI examples (require API key)
node chain.js
node chain2.js
node chain3.js "Hello world!" "Spanish"

# Local Ollama examples (require Ollama service)
ollama pull gemma3:4b-it-qat
node chain8.js
node chain11.js

# Advanced features
node chain6.js  # Image analysis
node chain9.js  # Usage tracking
node chain10.js # Cancellation demo
```

## Documentation

Detailed specifications available in `docs/specs/` directory:
- Each chain has corresponding documentation explaining architecture and usage
- Examples include code patterns, configuration options, and best practices

## Dependencies

- **@langchain/core** - Core LangChain functionality
- **@langchain/google-genai** - Google Generative AI integration
- **@langchain/ollama** - Local Ollama model integration
- **dotenv** - Environment variable management