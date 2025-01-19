const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").toString().split("\n");

const [n, x] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const cntSmaller = (n) => {
  let cnt = "";
  for (elem of arr) {
    if (elem < x) {
      cnt += `${elem} `;
    }
  }
  console.log(cnt.trim());
};

cntSmaller(n);