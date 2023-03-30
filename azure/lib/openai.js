const openai=require("openai")
const config = new openai.Configuration({
  apiKey: process.env.OPEN_AI_KEY,
  organization: process.env.OPEN_AI_ORG,
});

const openaiSDK = new openai.OpenAIApi(config);
module.exports=openaiSDK;