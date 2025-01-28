const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

const t = Number(input[0]);

for (let i = 1; i < t + 1; i++) {
  let str = "";
  str += input[i][0];
  str += input[i][input[i].length - 1];
  console.log(str);
}
