const fs = require("fs");


const bodyParser = require('body-parser');

// external module
const express = require('express');



const app = express();


app.use(bodyParser.urlencoded());

// First Middleware

app.use((req, res, next) => {
  console.log('Request Received', req.url, req.method,req.body);
  next();
});


app.get("/",(req, res, next) => {

  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  <h1>Welcome to First Server</h1>
  <form action="/buy-product" method="POST">
    <input type="text" placeholder="Enter the product that you want" name="product">
    <br/>
    <input type="text" placeholder="Enter your budget " name="budget">
    <input type="submit">
  </form>
</body>
</html>`);
});

app.post("/buy-product", (req, res, next) => {

        fs.writeFile('buy.json', JSON.stringify(req.body), (err) => {
       // sending response
  
        res.statusCode = 302;
        res.setHeader('Location', '/products');
        res.end();
        });
})

app.get("/products", (req, res, next) => {
  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Product</title>
    </head>
    <body>
      <h1>Products list will appear here.</h1>
    </body>
    </html>`);
})

app.use((req, res, next) => {
      res.statusCode = 404;
      res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <title>page not found</title>
    </head>
    <body>
      <h1> Errro 404 page not found</h1>
    </body>
    </html>`);
      res.end();
})


// Local module
// const RequestHandler = require("./Request Handler");

// const { handler } = require("./Request Handler");

// const server = http.createServer(RequestHandler);




const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server running at: http://localhost:${PORT}`);
});


