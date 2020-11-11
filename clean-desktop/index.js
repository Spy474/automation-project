const fs = require("fs");
const path = require("path");

const DESKTOP_PATH = path.resolve("C:\\Users\\Frederick Methot\\Desktop");

async function checkForFiles(dirPath) {
  fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
    if (err) return console.log("Unable to scan directory: " + err);
    files.map((file) => console.log(file));
  });
}

checkForFiles(DESKTOP_PATH);
