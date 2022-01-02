const express = require('express');

const messagesRouter = express.Router();


const messageController = require('../controllers/messages.controller');

messagesRouter.post('/', messageController.postMessage);
messagesRouter.get('/', messageController.getMessage);

module.exports = messagesRouter;