const OpenAI = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_BASE_URL = "https://api.pawan.krd/pai-001/v1/";

let openai = null;

openai =  new OpenAI({
    apiKey: OPENAI_API_KEY,
    baseURL: OPENAI_BASE_URL,
});



const connectOpenAI = async () => {
    const chatCompletion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content:
                    "You are an expert 100 words text summarizer.Summarize the text that i will give you into a clear and concise paragraph of 100 words that captures the main ideas and important details. Make sure the summary is easy to understand and provides a high-level overview of the content. Make sure The summary should be accurate, avoiding unnecessary details, and should help the reader quickly grasp the core information. The paragraph should be in 100 words only.",
            }
        ],
        model: 'gpt-3.5-turbo'
      });
    
    console.log(chatCompletion.choices[0].message.content);
}

module.exports = {openai, connectOpenAI};