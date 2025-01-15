const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").toString().split("\n");

const price = Number(input[0]);
const t = Number(input[1]);
let sum = 0;

const calPrice = (times) => {
  for (let i = 2; i < times + 2; i++) {
    const arr = input[i].split(" ").map(Number);
    sum += arr[0] * arr[1];
  }

  if (sum === price) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

calPrice(t);