const dbConnect = require("./mongodb");
const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: "Note 5" },
    { $set: { name: "Note 5 Pro" } }
  );
  console.warn(result);
};
updateData();
