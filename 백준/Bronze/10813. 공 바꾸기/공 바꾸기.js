const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let answer = new Array(n);

for (let c = 1; c <= n; c++) {
  answer[c - 1] = c;
}

const cntBasket = (m) => {
  for (let a = 0; a < m; a++) {
    const [i, j] = input[a + 1].split(" ").map(Number);
    let tmp = answer[j - 1];
    answer[j - 1] = answer[i - 1];
    answer[i - 1] = tmp;
  }
  console.log(answer.join(" "));
};

cntBasket(m);
