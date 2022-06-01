const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require("mongodb");
const app = express();
app.use(express.json());
// getting data
app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  // console.log(data);
  resp.send(data);
});
// sending data
app.post("/", async (req, resp) => {
  let data = await dbConnect();
  let result = data.insertOne(req.body);
  resp.send(result);
});

// update method
app.put("/", async (req, resp) => {
  let data = await dbConnect();
  let result = data.updateOne({ name: req.body.name }, { $set: req.body });
  resp.send(result);
});
app.delete("/:id", async (requset, response) => {
  const data = await dbConnect();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(requset.params.id),
  });
  response.send(result);
});
app.listen(5000);
