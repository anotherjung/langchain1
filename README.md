# Setup

npm init -y 

npm i langchain @langchain/core

"overrides": {
"@langchain/core": {
    "version": "0.3.62"
}

npm install @langchain/google-genai
GOOGLE_API_KEY=your-api-key  

See [docs/specs/chain.md](docs/specs/chain.md) for system prompt and [chain] usage.

See [docs/specs/chain2.md](docs/specs/chain2.md) for details on human message architecture and usage in chain2.

See [docs/specs/chain3.md](docs/specs/chain3.md) for streaming for translations. 

See [docs/specs/chain4.md](docs/specs/chain4.md) for details on chain4 string parser for document outputs.

See [docs/specs/chain5.md](docs/specs/chain5.md) for details on fromTemplate class short code

See [docs/specs/chain6.md](docs/specs/chain6.md) for details on chain6 multimodal image analysis.

See [docs/specs/chain7.md](docs/specs/chain7.md) for details on chain7 advanced prompt pipeline.

See [docs/specs/chain8.md](docs/specs/chain8.md) for details on chain8 local Ollama integration.

See [docs/specs/chain9.md](docs/specs/chain9.md) for details on chain9 callback monitoring and usage tracking.

touch docs/specs/chain10.md chain10.js

