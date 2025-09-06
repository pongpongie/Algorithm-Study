const fs = require("fs");
const filepath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs.readFileSync(filepath, "utf-8").split("\n");

let arr = input[0].split(" ");
let tmp;

for (let i = 0; i < 2; i++) {
  arr[i] = arr[i].split("");
  tmp = arr[i][0];
  arr[i][0] = arr[i][2];
  arr[i][2] = tmp;

  arr[i] = Number(arr[i].join(""));
}

console.log(arr[0] > arr[1] ? arr[0] : arr[1]);
