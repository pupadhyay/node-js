const http = require("http");
const data = require("./data");

const server = http.createServer((reqr, resp) => {
  resp.writeHead(200, { "Content-Type": "application/json" });
  resp.write(JSON.stringify(data));
  resp.end();
});

server.listen(5000);
