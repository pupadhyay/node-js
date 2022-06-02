const mongoose = require("mongoose");

const saveInDb = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  const productsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
  });
  const productsModel = new mongoose.model("products", productsSchema);
  let data = new productsModel({
    name: "GT Master",
    price: 30000,
    brand: "Realme",
    category: "phone",
  });
  let result = await data.save();
  console.log(result);
};
saveInDb();
