const assistant = require('../Config/config');
const assistantId = process.env.ibm_id;

module.exports = {
  async createSession() {
    try {

      const session = await assistant.createSession({
        assistant_id: assistantId
      })
      return session;
    } catch (error) {
      return error;
    }


  },
  async sendMessage(sessionId,messageInput) {
    try {
      const message = await assistant.message({
        assistant_id: assistantId,
        session_id: sessionId,
        input: messageInput
      })
      return message;
    } catch (error) {
      return error;
    }

  }
}
