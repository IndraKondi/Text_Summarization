const axios = require("axios");
const pdf = require("pdf-parse");
const { openai, connectOpenAI } = require("../utils/ai");



const summarizeText = async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: "No text provided" });
    }

    try {

        const chatCompletion = await openai.chat.completions.create({
            messages: [
                { role: "user", content: `Summarize this: ${text}` }
            ],
            model: 'gpt-3.5-turbo'
          });

        

        const summary = chatCompletion.choices[0].message.content;
        return res.json({ success: true, summary: summary });
    } catch (error) {
        console.error("Error communicating with OpenAI:", error);
        return res.status(500).json({ error: "Failed to summarize the text" });
    }
};

const summarizeFile = async (req, res) => {
    try {
        if (!req.file || !req.file.buffer) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const dataBuffer = req.file.buffer;
        const data = await pdf(dataBuffer);
        const text = data.text;
        

        const chatCompletion = await openai.chat.completions.create({
            messages: [
                { role: "user", content: `Summarize this: ${text}` }
            ],
            model: 'gpt-3.5-turbo'
          });

        const summary = chatCompletion.choices[0].message.content;

        return res.json({ success: true, summary: summary });
    } catch (error) {
        console.error("Error summarizing file:", error);
        return res.status(500).json({ error: "Failed to summarize the text" });
    }
};

module.exports = { summarizeText, summarizeFile };
