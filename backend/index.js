const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const { summarizeFile, summarizeText } = require("./controllers.js/summarize");
const { singleUpload } = require("./middlewares/multer");
const { connectOpenAI } = require("./utils/ai");


const app = express();

app.use(bodyParser.json());
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
dotenv.config();

app.post("/summarize/text", summarizeText);
app.post("/summarize/file", singleUpload, summarizeFile);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    await connectOpenAI();
    console.log(`Server running on port ${PORT}`);
});
