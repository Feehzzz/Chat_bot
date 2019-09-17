const routes = require('express').Router();
const botController = require('../Controller/botController');

routes.post('/chat/:text', async (req, res) => {
 
  let sessionId;
  const { text } = req.params;
  try {
    const session = await botController.createSession()
    sessionId = session.session_id
    const botResponse = await botController.sendMessage(sessionId,{
      message_type: 'text',
      text: text
    })
    
    res.json({msg: botResponse.output.generic[0].text})
  } catch (error) {
    res.status(400).json({Error: "Something went wrong " + error})
    
  }
 
})

module.exports = routes