require('dotenv').config()
const AssistantV2 = require('ibm-watson/assistant/v2');

const assistant = new AssistantV2({
  version: '2019-02-28',
  iam_apikey: process.env.ibm_key,
  url: process.env.ibm_url,
  headers: {
    'X-Watson-Learning-Opt-Out': 'true'
  }
});

module.exports = assistant
