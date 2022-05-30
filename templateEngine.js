const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();

const publicPath = path.join(__dirname, "public");
app.set("view engine", "ejs"); // Template engine

app.get("", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/profile", (req, res) => {
  const user = {
    name: "Pramod",
    email: "abc@abc.com",
    skills: ["php", "database", "javascript"],
  };
  res.render("profile", { user });
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app.get("/contact", (req, res) => {
  res.sendFile(`${publicPath}/contact.html`);
});
app.get("/help", (req, res) => {
  res.sendFile(`${publicPath}/help.html`);
});
app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/pageNotFound.html`);
});

app.listen(5000);
