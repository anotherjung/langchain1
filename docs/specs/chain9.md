# Chain9 Developer Documentation

# docs
https://js.langchain.com/docs/how_to/llm_token_usage_tracking/

## Overview
" LangChain implementation with callback monitoring and usage tracking
" Translation service with detailed token consumption metrics
" Real-time callback system for debugging and performance monitoring

## Key Features
" **Callback Integration**: Custom handleLLMEnd callback for output monitoring
" **Usage Metadata**: Detailed token consumption tracking (input, output, total)
" **Translation Service**: English to target language conversion with variables
" **Debug Output**: JSON formatted callback data for development insights

## Architecture Components
" **Model**: Google Gemini 1.5 Flash with callback configuration
" **Callbacks Array**: Custom event handlers for LLM lifecycle monitoring
" **Prompt Template**: Parameterized translation template with language variables
" **Usage Tracking**: Built-in token counting and metadata collection

## Callback System
" **handleLLMEnd**: Triggered when LLM completes processing
" **JSON Output**: Pretty-printed callback data with 2-space indentation
" **Debug Information**: Complete output object logging for development
" **Event-Driven**: Automatic callback execution during chain operations

## Template Configuration
" **System Message**: "Translate the following from English into {language}"
" **User Message**: "{user}" for input text placeholder
" **Variable Interpolation**: Dynamic language and text substitution
" **Reusable Pattern**: Template supports any target language

## Usage Metadata Tracking
" **Input Tokens**: Number of tokens in the request (`response.usage_metadata.input_tokens`)
" **Output Tokens**: Number of tokens in the response (`response.usage_metadata.output_tokens`)
" **Total Tokens**: Combined token count (`response.usage_metadata.total_tokens`)
" **Cost Monitoring**: Essential for API usage tracking and optimization

## Implementation Pattern
```javascript
const model = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-flash",
    apiKey: process.env.GOOGLE_API_KEY,
    callbacks: [{
        handleLLMEnd(output) {
            console.log(JSON.stringify(output, null, 2));
        },
    }],
});
```

## Example Usage
" **Target Language**: Korean translation example
" **Input Text**: "Good Mornin, how it going?" (casual English)
" **Variable Binding**: Language and user text through invoke parameters
" **Output**: Korean translation with token metrics

## Callback Data Structure
" **Generations**: Array of model response generations
" **LLM Output**: Complete response metadata and content
" **Timing Information**: Processing duration and performance metrics
" **Model Information**: Details about the specific model used

## Developer Benefits
" **Performance Monitoring**: Track response times and token usage
" **Debug Visibility**: See complete LLM interaction data
" **Cost Tracking**: Monitor API usage for budget management
" **Development Insights**: Understand model behavior and optimization opportunities

## Configuration Options
" **Multiple Callbacks**: Add additional callback handlers to array
" **Selective Logging**: Choose specific callback events to monitor
" **Custom Handlers**: Implement handleLLMStart, handleLLMError, etc.
" **Conditional Callbacks**: Environment-based callback activation

## Token Management
" **Input Optimization**: Monitor input token consumption patterns
" **Output Analysis**: Track response length variations
" **Total Usage**: Comprehensive token accounting
" **Cost Estimation**: Calculate API costs based on token usage

## Use Cases
" **Translation Services**: Multi-language content conversion
" **Performance Optimization**: Identify bottlenecks and usage patterns
" **Development Debugging**: Detailed LLM interaction inspection
" **Usage Analytics**: Track and analyze API consumption patterns

## Developer Notes
" **Callback Order**: handleLLMEnd executes after chain completion
" **Metadata Availability**: usage_metadata requires compatible model support
" **JSON Formatting**: Pretty-printed output aids in development debugging
" **Environment Setup**: Requires GOOGLE_API_KEY environment variable
" **Error Handling**: Consider implementing handleLLMError callback for robustness

## Monitoring Best Practices
" **Log Rotation**: Manage callback output volume in production
" **Selective Logging**: Enable detailed callbacks only in development
" **Performance Impact**: Callbacks add minimal overhead to processing
" **Data Privacy**: Be cautious with callback logging in sensitive applications