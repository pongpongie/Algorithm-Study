![1](과제%20안내신%20분.._%20-%205597.jpg)

# [Bronze III] 과제 안 내신 분..? - 5597 

[문제 링크](https://www.acmicpc.net/problem/5597) 

### 성능 요약

메모리: 9344 KB, 시간: 92 ms

### 분류

구현

### 제출 일자

2025년 1월 20일 19:18:33

### 문제 설명

<p>X대학 M교수님은 프로그래밍 수업을 맡고 있다. 교실엔 학생이 30명이 있는데, 학생 명부엔 각 학생별로 1번부터 30번까지 출석번호가 붙어 있다.</p>

<p>교수님이 내준 특별과제를 28명이 제출했는데, 그 중에서 제출 안 한 학생 2명의 출석번호를 구하는 프로그램을 작성하시오.</p>

### 입력 

 <p>입력은 총 28줄로 각 제출자(학생)의 출석번호 n(1 ≤ n ≤ 30)가 한 줄에 하나씩 주어진다. 출석번호에 중복은 없다.</p>

### 출력 

 <p>출력은 2줄이다. 1번째 줄엔 제출하지 않은 학생의 출석번호 중 가장 작은 것을 출력하고, 2번째 줄에선 그 다음 출석번호를 출력한다.</p>

 ---

 ## 후기

`Array`의 메서드 중 하나인 `sort()` 사용에 주의해야한다.

처음 다음과 같이 `sort()`를 작성하였다.

```javascript
const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs
  .readFileSync(filePath, "utf-8")
  .toString()
  .split("\n")
  .map(Number);

let students = new Array(30);

for (let i = 1; i <= students.length; i++) {
  students[i - 1] = i;
}

const assginment = (num) => {
  let answer = [];
  for (let i = 0; i < students.length; i++) {
    let pivot = students[i];
    for (let j = 0; j < input.length + 1; j++) {
      if (j === input.length) {
        answer.push(pivot);
        break;
      }
      if (input[j] === pivot) {
        break;
      }
    }
  }
  answer.sort();
  for (elem of answer) {
    console.log(elem);
  }
};

assginment(input.length);

```

내가 여태 찾았던 반례들에 대해서 문제없이 출력이 잘 되었는데, 계속 틀렸다.
결국 찾아보니 나와 비슷한 시행착오를 겪은 분이 계셨고, `sort()`를 사용하는 방법이 틀렸음을 알았다.

위의 `answer.sort()`를 `answer.sort((a, b) => a - b);`로 바꿈으로써 정답은 맞췄는데, 왜 정답이 되었는지 살펴보자.

`sort()`는 파라미터로 **콜백 함수를 받는데, 없을 경우 기본적으로 요소를 문자열로 변환한 후 UTF-16 코드 단위 값의 순서에 따라 오름차순으로 정렬한다.**

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]
```

따라서 숫자를 정렬할 때는 주의해야 한다. 적절한 콜백을 넣어주지 않으면 숫자를 문자열 취급하기 때문에 원하지 않는 결과가 나올 수 있다.

예를 들어 다음의 결과를 보자.


```javascript
let arr = [100, 80, 90];
arr.sort();
console.log(arr); // [100, 80, 90]
```

따라서 원하는대로 숫자를 오름차순으로 정렬하기 위해서는 `arr.sort((a, b) => a-b)` 내림차순은 `arr.sort((a, b) => b-a)`와 같이 각각 양수와 음수를 반환하는 콜백을 넣어주면 된다.

좀 더 깊이 보자면, JavaScript의 `sort()`는 추가적인 메모리 공간을 사용하지 않고 배열을 정렬하는 제자리(in-place)알고리즘을 사용한다.
또한 `sort()`는 원본 배열을 변경하고, 같은 값을 가진 요소들의 상대적인 순서가 보장되지 않는 "불안정한" 정렬을 사용한다.


### Reference
https://velog.io/@dontki11it/%EB%B0%B1%EC%A4%80Node.js-5597-%EA%B3%BC%EC%A0%9C-%EC%95%88-%EB%82%B4%EC%8B%A0-%EB%B6%84
https://www.perplexity.ai/search/jsyi-sort-hamsue-daehae-jasehi-x7xsM6RDShm34KIvqK20Uw