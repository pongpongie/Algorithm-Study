const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const arr = input[i].split(" ");
  console.log(Number(arr[0]) + Number(arr[1]));
}
