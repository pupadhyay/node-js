const express = require("express");
//const bootstrap = require("bootstrap");
const app = express();

app.get("", (req, res) => {
  //   console.log("Data sent by browser", req.query.name);
  //   res.send("Hello, This is home page" + req.query.name);
  res.send(
    `<h1>Hello, This is home page</h1> <a href="/about" class="link-primary">About page link</a>`
  );
});
app.get("/about", (req, res) => {
  res.send(
    `
    <input type="email" class="form-control" id="" value="${req.query.name}" ><button class="btn btn-light">About Us</button> <a href="/" class="link-primary">Home page link</a>`
  );
});
app.get("/help", (req, res) => {
  res.send([
    { name: "Pramod", email: "pkpandit@gmail.com" },
    { name: "Yeshani", email: "yeshani@gmail.com" },
  ]);
});
app.listen(5000);
