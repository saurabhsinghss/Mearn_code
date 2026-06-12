// core module
const http = require("http");

// Local module
// const RequestHandler = require("./Request Handler");
const { handler } = require("./Request Handler");

console.log("I was here");


// const server = http.createServer(RequestHandler);


const server = http.createServer(handler);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server running at: http://localhost:${PORT}`);
});


