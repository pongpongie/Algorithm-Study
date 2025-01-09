const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString();

const calLeapYear = (year) => {
  const _year = Number(year);

  if (_year % 4 === 0 && _year % 100 != 0) {
    console.log(1);
  } else if (_year % 400 == 0) {
    console.log(1);
  } else {
    console.log(0);
  }
};

calLeapYear(input);