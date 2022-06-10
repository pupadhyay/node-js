const express = require("express");
const EventEmitter = require("events");
const app = express();
const event = new EventEmitter();
let count = 0;
event.on("countAPI", () => {
  count++;
  console.log("event called", count);
});
app.get("/", (request, response) => {
  response.send("api called");
  event.emit("countAPI");
});
app.get("/search", (request, response) => {
  response.send("search api called");
  event.emit("countAPI");
});
app.get("/update", (request, response) => {
  response.send("update api called");
  event.emit("countAPI");
});
app.listen(5000);
