const fs = require("fs");
const { URLSearchParams } = require("url");


// external module
const express = require('express');



const app = express();

// First Middleware
app.use((req, res, next) => {
  console.log('Request Received', req.url, req.method);
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
      console.log('Form data received');
  
      const arr = [];// buffer
  
      // reading chunck
      req.on('data', (chunk) => {
        console.log(chunk);
        arr.push(chunk);
      });
      req.on('end', () => {
        const body = Buffer.concat(arr).toString();
        const urlParams =  new URLSearchParams(body);
        const bodyJson = {};// this is JS object
  
        //[["product","Jeans"],["price","1299"]]
        for (const [key, value] of urlParams.entries()) {
          bodyJson[key] = value;
        }
        fs.writeFile('buy.txt', JSON.stringify(bodyJson), (err) => {
       // sending response
  
        res.statusCode = 302;
        res.setHeader('Location', '/products');
        res.end();
        console.log('Sending Response');
        });
        
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


