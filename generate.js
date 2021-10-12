const fs = require("fs");
const path = require("path");

let arr = [];

const jsonsInDir = fs
  .readdirSync("./src/data")
  .filter((file) => path.extname(file) === ".json");

jsonsInDir.forEach(async (file) => {
  const fileData = fs.readFileSync(path.join("./src/data", file));
  const jsonParsed = JSON.parse(fileData.toString());

  arr = [...arr, ...jsonParsed.data];

  fs.writeFileSync(
    "./src/assets/jokes.json",
    JSON.stringify({ data: arr }, null, 4)
  );
});

console.table(arr);
console.log("Generate jokes is complete!");
