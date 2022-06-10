const express = require("express");
const multer = require("multer");
const app = express(); // express function execution

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "fileuploadAPI");
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "_" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

app.post("/upload", upload, (request, response) => {
  response.send("file upload");
});
app.listen(5000);
