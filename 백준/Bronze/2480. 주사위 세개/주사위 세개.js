const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs
  .readFileSync(filePath, "utf-8")
  .toString()
  .split(" ")
  .map(Number);

const game = (num) => {
  if (num[0] === num[1] && num[1] === num[2]) {
    console.log(10000 + 1000 * num[0]);
  } else if (num[0] === num[1]) {
    console.log(1000 + 100 * num[0]);
  } else if (num[1] === num[2]) {
    console.log(1000 + 100 * num[1]);
  } else if (num[0] === num[2]) {
    console.log(1000 + 100 * num[0]);
  } else {
    num.sort();
    console.log(100 * num[2]);
  }
};

game(input);