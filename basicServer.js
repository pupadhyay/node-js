const http = require("http");
//var colors = require("colors");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World!",
      name: "Pramod",
    })
  );
});

server.listen(8000);
