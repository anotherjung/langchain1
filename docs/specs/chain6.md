# Chain6 Developer Documentation

## Overview
" LangChain multimodal implementation for image analysis using Google Generative AI
" File system integration with fs/promises for image loading
" Base64 encoding for image processing and AI vision capabilities

## Key Features
" **Image Processing**: Local file reading and base64 conversion
" **Multimodal AI**: Text and image input processing in single chain
" **Vision Analysis**: Detailed image description and visual understanding
" **File System Integration**: Async file operations with fs/promises

## Architecture Components
" **Model**: Google Gemini 1.5 Flash with vision capabilities
" **File Reader**: fs/promises.readFile for image loading
" **Base64 Encoder**: Buffer to base64 string conversion
" **Multimodal Template**: Structured content array with text and image

## Image Processing Flow
" Load image file from `public/photo2.jpeg`
" Convert Buffer to base64 string encoding
" Embed base64 data in proper LangChain message structure
" Process through AI vision model for analysis

## Message Structure
" **System Message**: "Describe the image in detail."
" **User Content Array**: 
  - Text component with question
  - Image component with base64 data URL
" **Content Types**: "text" and "image_url" with proper formatting

## Critical Implementation Details
" **Content Array Format**: User message must be array of objects with `type` field
" **Image URL Structure**: `data:image/jpeg;base64,${base64Image}` format required
" **Base64 Conversion**: `toString("base64")` on file buffer
" **Empty Invoke**: No template variables needed - `chain.invoke({})`

## File Dependencies
" **Image File**: `public/photo2.jpeg` must exist in project directory
" **Environment**: GOOGLE_API_KEY required for API access
" **Modules**: dotenv, fs/promises, LangChain core and Google GenAI

## Usage Pattern
```javascript
const invokeImage = await readFile("path/to/image.jpeg");
const base64Image = invokeImage.toString("base64");

const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", "Describe the image in detail."],
    ["user", [
        { "type": "text", "text": "What do you see?" },
        { 
            "type": "image_url", 
            "image_url": { "url": `data:image/jpeg;base64,${base64Image}` }
        }
    ]]
]);
```

## Common Errors & Solutions
" **TypeError: message.content.map is not a function**: Use content array format, not direct object
" **Missing image file**: Ensure image exists in specified path
" **Invalid base64**: Verify proper buffer to string conversion
" **API errors**: Confirm GOOGLE_API_KEY environment variable

## Developer Notes
" **Async Operations**: File reading requires await/async handling
" **Memory Considerations**: Large images consume significant memory when base64 encoded
" **Format Support**: JPEG format confirmed working, test other formats as needed
" **Vision Capabilities**: Gemini 1.5 Flash supports detailed visual analysis

## Output Capabilities
" Detailed scene descriptions
" Object and person identification
" Spatial relationship analysis
" Color and composition details
" Contextual understanding of visual elements