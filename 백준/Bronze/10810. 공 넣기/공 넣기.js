const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").toString().split("\n");

const [times, ...numArr] = input;
const [n, m] = times.split(" ").map(Number);

const cntBasket = (m) => {
  const arr = new Array();
  let answer = "";
  for (let i = 0; i <= n; i++) {
    arr[i] = [0];
  }

  for (let j = 0; j < m; j++) {
    const arr2 = numArr[j].split(" ").map(Number);

    for (let k = arr2[0]; k <= arr2[1]; k++) {
      if (arr[k].length === 1) {
        arr[k] = [];
      }
      arr[k].push(arr2[2]);
    }
  }

  for (let h = 1; h <= n; h++) {
    answer += `${arr[h]} `;
  }
  console.log(answer.trim());
};

cntBasket(m);
