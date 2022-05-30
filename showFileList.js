// Multiople file creation in directory via loop

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "files");
//console.log(dirPath);

// adding multiple files
for (let index = 0; index < 5; index++) {
  fs.writeFileSync(
    dirPath + "/data-" + index + ".txt",
    "Multiple file creation via loop "
  );
  //fs.writeFileSync(`hello${index}.txt`, "Multiple file creation via loop ");
}
// reading files
fs.readdir(dirPath, (err, files) => {
  files.forEach((items) => {
    console.log("The file name is ", items);
  });
});
