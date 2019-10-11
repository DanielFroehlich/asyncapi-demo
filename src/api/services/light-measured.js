const service = module.exports = {};

/**
 * Inform about environmental lighting conditions for a particular streetlight.
 * @param {object} ws WebSocket connection.
 * @param {object} options
 * @param {object} options.message The message to send.
 * @param {integer} options.message.payload.id - Id of the streetlight.
 * @param {integer} options.message.payload.lumens - Light intensity measured in lumens.
 * @param {string} options.message.payload.sentAt - Date and time when the message was sent.
 */
service. = async (ws, { message }) => {
  ws.send('Message from the server: Implement your business logic here.');
};
