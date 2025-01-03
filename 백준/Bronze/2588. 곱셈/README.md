# [Bronze III] 곱셈 - 2588 

[문제 링크](https://www.acmicpc.net/problem/2588) 

### 성능 요약

메모리: 9584 KB, 시간: 100 ms

### 분류

사칙연산, 수학

### 제출 일자

2025년 1월 3일 14:22:01

### 문제 설명

<p>(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.</p>

<p style="text-align: center;"><img alt="" src="https://www.acmicpc.net/upload/images/f5NhGHVLM4Ix74DtJrwfC97KepPl27s%20(1).png" style="width: 306px; height: 183px; "></p>

<p>(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.</p>

### 입력 

 <p>첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.</p>

### 출력 

 <p>첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.</p>

## 후기

그냥 하드코딩 해버렸다.

```javascript
const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const operation = (a, b) => {
  let num1 = 0;
  let num2 = 0;
  let num3 = 0;

  let sum = 0;

  num1 +=
    Number(a[0]) * 100 * Number(b[2]) +
    Number(a[1]) * 10 * Number(b[2]) +
    Number(a[2]) * Number(b[2]);

  num2 +=
    Number(a[0]) * 100 * Number(b[1]) +
    Number(a[1]) * 10 * Number(b[1]) +
    Number(a[2]) * Number(b[1]);

  num3 +=
    Number(a[0]) * 100 * Number(b[0]) +
    Number(a[1]) * 10 * Number(b[0]) +
    Number(a[2]) * Number(b[0]);

  sum += num1 + num2 * 10 + num3 * 100;

  const result = [num1, num2, num3, sum];

  for (v of result) {
    console.log(v);
  }
};

operation(input[0], input[1]);

```

숏코딩을 봤다.

```javascript
const [A, B] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
for (let i = B.length; i > 0; i--) {
    console.log(Number(A) * Number(B[i - 1]));
}
console.log(Number(A) * Number(B));
```

나는 실제로 곱셈을 하는 것처럼 하드코딩 했다면, 이 풀이는 반복문과 배열 그리고 배열의 인덱싱을 활용하여 효율적이고 간략하게 표현했다.

**아직까지 자바스크립트 문법이 익숙하지 않은 것이 티가 난다.**