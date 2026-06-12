const http = require("http");
const fs = require("fs");
const { URLSearchParams } = require("url");

console.log("I was here");

const requestHandler = (req, res) => {
  // console.log('I was here in handler',req);
  console.log("Request received:", req.url, req.method);

  res.setHeader("Content-Type", "text/html");

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
        fs.writeFileSync('buy.txt', JSON.stringify(bodyJson));
    });
    


    
    // sending response

    res.statusCode = 302;
    res.setHeader('Location', '/products');
    console.log('Seding Response');
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
  }

  res.end();
};

const server = http.createServer(requestHandler);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server running at: http://localhost:${PORT}`);
});


