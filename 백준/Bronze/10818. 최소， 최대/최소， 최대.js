const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").toString().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const minMax = (n) => {
  let min = arr[0];
  let max = arr[0];

  for (elem of arr) {
    if (min > elem) {
      min = elem;
    }

    if (max < elem) {
      max = elem;
    }
  }
  console.log(min, max);
};

minMax(n);