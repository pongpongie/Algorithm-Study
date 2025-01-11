const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").toString().split(" ");

const calTime = (num) => {
  const arr = num.map((elem) => {
    return Number(elem);
  });

  if (arr[0] === 0) {
    if (arr[1] < 45) {
      console.log(23, 15 + arr[1]);
    } else {
      console.log(0, arr[1] - 45);
    }
  } else if (arr[1] < 45) {
    console.log(arr[0] - 1, 15 + arr[1]);
  } else if (arr[1] >= 45) {
    console.log(arr[0], arr[1] - 45);
  }
};

calTime(input);
