const fs = require("fs");
const { URLSearchParams } = require("url");


const RequestHandler = (req, res) => {
  // console.log('I was here in handler',req);
  console.log("Request received:", req.url, req.method);


  res.setHeader("Content-Type", "text/html");

  // these if else statement is called as routing management.

  if (req.url === "/") {
      res.write(`<!DOCTYPE html>
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
    res.end();
  }

  else if (req.url === "/products") {
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Product</title>
    </head>
    <body>
      <h1>Products list will appear here.</h1>
    </body>
    </html>`);
      res.end();
  }
    
  else if (req.url === '/buy-product') {
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
  
  }

  else {
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
  }

};

// module.exports = RequestHandler;
module.exports = {
  handler: RequestHandler,
}
