const express = require('express');
const hostRouter = express.Router();

const hostController = require('../controllers/hostController');

hostRouter.get("/add-home", hostController.getAddHome);

hostRouter.post("/add-home",hostController.postAddHome);

// module.exports = hostRouter;this is default export
exports.hostRouter = hostRouter;// named exports
