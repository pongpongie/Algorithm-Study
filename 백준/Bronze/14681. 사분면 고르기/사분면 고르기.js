const fs = require("fs");
const filePath = process.platform === "linux" ? "0" : "run/input.txt";
const input = fs.readFileSync(0, "utf-8").toString().split("\n");

const calQuadrant = (num) => {
  const arr = num.map((elem) => {
    return Number(elem);
  });

  if (arr[0] > 0) {
    console.log("14"[Number(arr[1] < 0)]);
  } else {
    console.log("23"[Number(arr[1] < 0)]);
  }
};

calQuadrant(input);
