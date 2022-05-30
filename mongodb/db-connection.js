const dbConnect = require("./mongodb");

/*dbConnect().then((resp) => {
  resp
    .find()
    .toArray()
    .then((data) => {
      console.warn(data);
    });
});*/
//console.log(dbConnect());
//dbConnect();
const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.warn(data);
};
main();
