import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_AI_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.send("Hello from your API Key working!");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
  } catch (err) {}
});

export default router;
// This file will generate the image from the openAi. First was to connect to the openAI. To connect we needed an api key from openai.com and clicking on api. Log in. Click on your account name and choose api key. We created a new key and secured safely in a location where we dont lose it. We add the api key to our .env file. After we later create a configuration constant that contains our api key. We then have the openAIApi instanace or a copy template with the configuration aka the api key in it. The router is a test to see if it is connected.
