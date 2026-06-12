const path = require('path');

const express = require('express');
const hostRouter = express.Router();

const rootDir = require('../util/path-util');

hostRouter.get("/add-home", (req, res, next) => {
  res.render('add-home', { pageTitle: 'Add-home' });
});


const registeredHomes = [];// array of objects [{houseName:firsthome},{houseName: secondhome}]

hostRouter.post("/add-home", (req, res, next) => {
  registeredHomes.push(req.body);
  res.render('home-added', { pageTitle: 'Home added' });
});

// module.exports = hostRouter;this is default export
exports.hostRouter = hostRouter;// named exports
exports.registeredHomes = registeredHomes;