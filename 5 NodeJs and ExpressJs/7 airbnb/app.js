const path = require('path');
const fs = require("fs");
const bodyParser = require('body-parser');

// local module
const hostRouter = require('./routers/hostRouter');
const storeRouter = require('./routers/storeRouter');

const rootDir = require('./util/path-util');
// external module
const express = require('express');


const app = express();


app.use(express.static(path.join(rootDir, "public")));

app.use(bodyParser.urlencoded({ extended: true }));

// First Middleware
app.use(storeRouter);

app.use("/host",hostRouter);


app.use((req, res, next) => {
  res.statusCode = 404;
  res.sendFile(path.join(rootDir, 'views', '404.html'));
})
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server running at: http://localhost:${PORT}`);
});