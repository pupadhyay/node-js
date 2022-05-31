const dbConnect = require("./mongodb");
const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertOne({
    name: "Note 5",
    brand: "one plus",
    price: 320,
    category: "mobile",
  });
  if (result.acknowledged) {
    console.log("Data inserted");
  }
};
insert();
