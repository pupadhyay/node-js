const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`; // File path and file name variable
//fs.writeFileSync(filePath, "This is simple text file"); // Creating file

// file reading
/*fs.readFile(filePath, "utf8", (err, item) => {
  console.log(item);
});*/

// Appending text in crud file
/*fs.appendFile(filePath, " and file name is apple.txt", (err) => {
  if (!err) {
    console.log("file is updated");
  }
});*/

// Renaming file name
/*fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
  if (!err) {
    console.log("file is updated");
  }
});*/

// Deleting file
fs.unlinkSync(`${dirPath}/fruit.txt`);
