const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-comm");

const productsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});
// adding data
const saveInDB = async () => {
  const product = mongoose.model("products", productsSchema);
  let data = new product({
    name: "Note Pro",
    price: 250,
    brand: "Max",
    category: "phone",
  });
  let result = await data.save();
  console.log(result);
};
//saveInDB();
// Updateing data
const updateInDb = async () => {
  const product = mongoose.model("products", productsSchema);
  let data = await product.updateMany(
    { name: "Note Pro" },
    { $set: { price: 750 } }
  );
  console.log(data);
};
//updateInDb();

const deleteInDb = async () => {
  const product = mongoose.model("products", productsSchema);
  let data = await product.deleteMany({ name: "Note Pro" });
  console.log(data);
};
//deleteInDb();
const findInDb = async () => {
  const product = mongoose.model("products", productsSchema);
  let data = await product.find({ name: "gt master addition" });
  console.log(data);
};
findInDb();
