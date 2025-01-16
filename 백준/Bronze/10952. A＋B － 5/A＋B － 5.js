const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").toString().split("\n");

for (elem of input) {
  const arr = elem.split(" ");
  if (+arr[0] === 0 && +arr[1] === 0) {
    return;
  }
  console.log(+arr[0] + +arr[1]);
}