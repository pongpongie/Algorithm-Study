const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs
  .readFileSync(filePath, "utf-8")
  .toString()
  .trim(" ")
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
let arr = [];

for (let i = 0; i < n; i++) {
  arr[i] = i + 1;
}

const makeReverse = (m) => {
  for (let a = 1; a < m + 1; a++) {
    let [i, j] = input[a].split(" ").map(Number);
    let c = j - 1;
    for (let b = i - 1; b < c; b++) {
      let tmp = arr[b];
      arr[b] = arr[c];
      arr[c] = tmp;

      c--;

      if (b === c) {
        break;
      }
    }
  }
  console.log(arr.join(" ").trim());
};

makeReverse(m);
