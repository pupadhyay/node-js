const express = require("express");
require("./config");
const Products = require("./product");
const app = express();
app.use(express.json());

// save data to database
app.post("/create", async (request, response) => {
  let data = new Products(request.body);
  let result = await data.save();
  //console.table(result);
  response.send(result);
});

// get data from database
app.get("/list", async (request, response) => {
  let data = await Products.find(); // no nedd to pass scheme in find method (Conditional statement)
  response.send(data);
});

// delete data from database
app.delete("/delete/:_id", async (request, response) => {
  console.log(request.params);
  let data = await Products.deleteOne(request.params);
  response.send(data);
});

// update data from database
app.put("/update/:_id", async (request, response) => {
  console.log(request.params);
  let data = await Products.updateOne(request.params, { $set: request.body });
  response.send(data);
});

app.listen(5000);
