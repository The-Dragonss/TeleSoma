// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const { Document, Packer, Paragraph, TextRun } = require("docx"); // For DOCX parsing
const fs = require("fs");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Define the custom prompt
chunking_quiz_prompt = `
You are a chunking expert specializing in breaking down educational materials into detailed, cognitively manageable sections while preserving all important information. Your goal is to organize content without losing any significant details.

For each chapter, follow these guidelines:

1. *Content Analysis and Preservation*:
   - Maintain all key details, examples, and explanations from the original text
   - Preserve technical terms, specific examples, and numerical data
   - Keep original quotes and citations when present
   - Retain all contextual information and supporting details

2. *Meaningful Sectioning*:
   - Create descriptive, content-based titles that reflect the specific topic or concept
   - Avoid generic titles like "Chunk 1" - instead use titles like "Quantum Entanglement Principles" or "Medieval Trade Routes"
   - Each section should have a clear thematic focus while maintaining full detail

3. *Content Organization Rules*:
   - For *theoretical content*: Keep all definitions, explanations, and supporting evidence together
   - For *procedural content*: Maintain complete step-by-step instructions with all details and warnings
   - For *case studies*: Keep all context, analysis, and outcomes together
   - For *examples*: Include all relevant details, conditions, and explanations

4. *Structure Guidelines*:
   - Use clear hierarchical organization with main topics and subtopics
   - Maintain all original bullet points, lists, and enumerations
   - Preserve relationships between ideas and concepts
   - Keep related examples and explanations together

5. *Detail Preservation Checklist*:
   - Include all definitions and technical terms
   - Maintain all examples and illustrations
   - Preserve cause-and-effect relationships
   - Keep all numerical data and statistics
   - Retain all contextual information

6. *Quiz Generation*:
   - Create detailed 7 questions that test specific knowledge
   - Include complex scenarios from the content
   - Use precise language from the original text
   - Ensure questions cover both broad concepts and specific details

Respond in valid JSON format as follows:
{
  "title": "<Specific topic-based title>",
  "subtitle": "<Detailed subtitle>",
  "summarizedContent": [
    {
      "chunk": "<Specific, descriptive topic title>",
      "description": "<One-sentence topic overview>",
      "content": "<Complete detailed content with all important information preserved>"
    }
  ],
  "quiz": [
    {
      "question": "<Detailed scenario or concept-based question>",
      "options": ["<Detailed option 1>", "<Detailed option 2>", "<Detailed option 3>"],
      "answer": "<Correct answer>"
    }
  ]
}
`;
// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
});

// Utility function to extract text from DOCX files
const extractTextFromDocx = async (buffer) => {
  const doc = await docx.Packer.toBuffer(Document.fromBuffer(buffer));

  return "DOCX parsing not implemented.";
};

// API Endpoint to handle file upload and processing
app.post("/api/openai", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    let textContent = "";

    if (!file) {
      return res.status(400).json({ error: "No file uploaded." });
    }

    // Determine file type and extract text accordingly
    if (file.mimetype === "application/pdf") {
      const data = await pdfParse(file.buffer);
      textContent = data.text;
    } else if (
      file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      // For DOCX files
      // Implement DOCX parsing or use a suitable library
      // Placeholder implementation:
      textContent = await extractTextFromDocx(file.buffer);
    } else if (file.mimetype === "text/plain") {
      textContent = file.buffer.toString("utf-8");
    } else {
      return res.status(400).json({ error: "Unsupported file type." });
    }

    if (!textContent.trim()) {
      return res
        .status(400)
        .json({ error: "Uploaded file is empty or unreadable." });
    }

    // Combine the custom prompt with the extracted text
    const prompt = `${chunking_quiz_prompt}\n\n${textContent}`;

    // Make a request to OpenAI API
    const openaiApiKey = process.env.OPENAI_API_KEY;

    const openaiResponse = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo", // Or 'gpt-4' if you have access
        messages: [
          {
            role: "system",
            content: "You are an assistant that formats responses in JSON.",
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 3000, // Adjust as needed
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiApiKey}`,
        },
      }
    );

    // Extract the text response from OpenAI
    const aiText = openaiResponse.data.choices[0].message.content;

    // Attempt to parse the AI response as JSON
    let responseData;
    try {
      // Remove any leading/trailing whitespace
      const trimmedText = aiText.trim();

      // If the response is wrapped in a code block, remove it
      const codeBlockRegex = /^```json\s*([\s\S]*?)\s*```$/;
      const match = trimmedText.match(codeBlockRegex);
      if (match && match[1]) {
        responseData = JSON.parse(match[1]);
      } else {
        // Attempt to parse directly
        responseData = JSON.parse(trimmedText);
      }

      res.json(responseData);
    } catch (jsonError) {
      console.error("Failed to parse OpenAI response as JSON:", jsonError);
      console.error("Response text:", aiText);
      res.status(500).json({ error: "Invalid JSON format from OpenAI." });
    }
  } catch (error) {
    console.error(
      "Internal server error:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Failed to fetch OpenAI response." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
