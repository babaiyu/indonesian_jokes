const fs = require("fs");
const path = require("path");
const axios = require("axios").default;

const baseUrl = "https://api.github.com/users";
let arr = [];

// Randomize list
function randomizeList(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// Get github profile by username
async function getUser(username, data) {
  const response = await axios.get(`${baseUrl}/${username}`);
  const resData = response?.data || { avatar: "", name: "" };

  data.map((item) => {
    const payload = {
      id: +new Date(),
      jokes: item.jokes,
      avatar: resData?.avatar_url || "",
      name: resData?.name || "Username not found!",
      username,
    };

    arr.push(payload);
  });

  arr = randomizeList(arr);

  fs.writeFileSync(
    "./src/assets/jokes.json",
    JSON.stringify({ data: arr }, null, 4)
  );
}

// Get json file
const jsonsInDir = fs
  .readdirSync("./src/data")
  .filter((file) => path.extname(file) === ".json");

// Read each of item from src/data
jsonsInDir.forEach((file) => {
  const fileData = fs.readFileSync(path.join("./src/data", file));
  const jsonParsed = JSON.parse(fileData.toString());

  getUser(jsonParsed.author, jsonParsed.data);
});
