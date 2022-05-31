const dbConnect = require("./mongodb");
const deleteData = async () => {
  let data = await dbConnect();
  let result = await data.deleteMany({ name: "Note 5 Pro" });
  console.warn(result);
  if (result.acknowledged) {
    console.log("Recoed deleted");
  }
};
deleteData();
