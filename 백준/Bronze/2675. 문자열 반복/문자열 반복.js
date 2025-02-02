const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

const t = Number(input[0]);

for (let i = 1; i <= t; i++) {
  const arr = input[i].split(" ");
  let str = "";
  for (let j = 0; j < arr[1].length; j++) {
    str += arr[1][j].repeat(Number(arr[0]));
  }
  console.log(str);
}
