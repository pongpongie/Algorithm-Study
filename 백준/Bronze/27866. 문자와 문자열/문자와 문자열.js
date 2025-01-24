const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").toString().split("\n");

const word = input[0];
const s = Number(input[1]);

const readString = (string) => {
  console.log(string[s - 1]);
};

readString(word);