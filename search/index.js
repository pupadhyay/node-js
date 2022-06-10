const { request, response } = require("express");
const express = require("express");
require("./config");
const Products = require("./product");
const app = express(); // express functionexecution
app.use(express.json());

app.get("/search/:key", async (request, response) => {
  console.log(request.params.key);
  let data = await Products.find({
    $or: [
      { name: { $regex: request.params.key } },
      { brand: { $regex: request.params.key } },
      { category: { $regex: request.params.key } },
    ],
  });
  response.send(data);
});
app.listen(5000);
