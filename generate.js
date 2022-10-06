const fs = require("fs");
const path = require("path");
const axios = require("axios").default;
const dotenv = require('dotenv');

// Get local .env
dotenv.config();

const { GITHUB_TOKEN } = process.env;

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
async function getUserV2(username, data) {
  try {
    const response = await axios.get(`${baseUrl}/${username}`, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${GITHUB_TOKEN}`
      }
    });

    const resData = response?.data || { avatar: "", name: "" };

    data.forEach((item) => {
      const payload = {
        id: +new Date(),
        jokes: item.jokes,
        avatar: `${resData?.avatar_url}&s=100` || "",
        name: resData?.name || resData?.login,
        username,
      };

      arr.push(payload);
    });

    arr = randomizeList(arr);

    fs.writeFileSync(
      "./src/assets/jokes.json",
      JSON.stringify({ data: arr }, null, 4)
    );

    console.info('Success get user of ', username);
  } catch (error) {
    const errorResult = error?.response?.data ?? error;
    const result = {
      username,
      error: errorResult?.message,
    };

    console.table(result);
  }
}

// Get json file
const jsonsInDir = fs
  .readdirSync("./src/data")
  .filter((file) => path.extname(file) === ".json");

// Read each of item from src/data
jsonsInDir.forEach((file) => {
  const fileData = fs.readFileSync(path.join("./src/data", file));
  const jsonParsed = JSON.parse(fileData.toString());

  getUserV2(jsonParsed.author, jsonParsed.data);
});
