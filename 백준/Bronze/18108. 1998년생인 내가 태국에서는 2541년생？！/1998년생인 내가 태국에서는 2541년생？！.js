const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString();

const toBuddist = (year) => {
  console.log(Number(year) - 543);
};

toBuddist(input);