# [Bronze V] A+B - 1000 

[문제 링크](https://www.acmicpc.net/problem/1000) 

### 성능 요약

메모리: 9344 KB, 시간: 100 ms

### 분류

구현, 사칙연산, 수학

### 제출 일자

2025년 1월 2일 13:44:35

### 문제 설명

<p>두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.</p>

### 입력 

 <p>첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)</p>

### 출력 

 <p>첫째 줄에 A+B를 출력한다.</p>

## 후기
백준에서 Node.js를 사용하여 문제를 풀던 중 런타임 에러(EACCES)가 발생하였다.

사실 이전에 nodejs로 입출력을 처리하는 데 애를 먹고 있었던 터라, 여러 방법을 찾아봤었다.

그 중에서 `fs` 모듈을 사용하는 것을 백준에서도 추천해주고 있었고, 다른 사람들의 여러 후기를 보면서 나에게 가장 적합한 입출력 방식을 찾았다.

https://help.acmicpc.net/language/info

```javascript
const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString();
```

EACCES 문제를 만나기 전까지는 이와 같이 `fs` 객체를 생성해서, `readFileSync`라는 메서드에 백준에서 사용되는 플랫폼인 리눅스인지, 아님 다른 플랫폼인지(내가 로컬에서 돌릴)에 따라 filePath를 다르게 설정했다. 

`readFileSync(path, option)`는 path에 불러올 파일의 상대적 위치를 사용하고 [option]으로 인코딩하는 방식으로 어떤 파일을 읽어올지 정한다고 생각하면 된다.

내가 로컬에서 할때나, 백준에 이 코드를 옮겨서 제출 할 때 모두 할 수 있도록 만들었었고 더 이상 입출력 문제는 쳐다보지 않으려고 했다.

그러나 이후 이 문제에서 EACCES 오류를 발견하고, 왜 안될까 이유를 찾아보니 이는 권한과 관련된 문제였고, 입력을 불러 올 때 경로가 "dev/stdin"인 경우 발생할 수 있다고 하더라.

https://www.acmicpc.net/board/view/137718

따라서 위 글을 읽고 다음과 같이 수정했다.

```javascript
const fs = require("fs");
const filePath = process.platform === "linux" ? 0 : "run/input.txt";
const input = fs.readFileSync(filePath, "utf-8").toString().trim();
```

기왕 이렇게 된 거 각각 메서드들이 어떤 역할을 하는지 살펴보자.

> [!TIP]
>
> `.toString()` 
앞에서 `readFileSync`로 받아온 파일을 문자열로 받는다는 뜻이다. 인코딩 방법을 정해주지 않으면 Buffer 객체로 변환되기 때문에 필요하다. 하지만 방금 확인해 본 결과 나는 "utf-8"로 인코딩 방식을 명시해주기 때문에 `toString()`을 사용하지 않아도 string으로 인코딩 되는 것 같다.

> [!TIP]
> 
> `.trim()` 
애초에 입력을 받아 올 때 trim으로 공백을 제거해주면 이후 나오는 "예제 입력은 다 맞고 반례도 다 잘 출력되는데 왜 틀리는거지?"라는 지옥에서 빠져나올 수 있다. `split()`으로 입력을 분리하고 나면 다음과 같은 입력에서 우리가 원하는 것과 다른 결과를 얻을 수 있다.

어떤 이유에서인진 모르겠지만 입력이 우리의 예상과 다르게 다음과 같이 주어진다고 생각해보자.

```javascript

2
3
6


```

이를 `.trim()`없이 `.split()`으로 받아오면

```javascript
[ '', '2', '3', '5', '' ]
```

이렇게 공백과 함께 받아온다.

하지만 trim을 해주고 받아오면 앞 뒤 공백 없이 우리가 원하는 원소들만 있는 배열을 받아올 수 있다.

### Reference
https://minjo0n.tistory.com/2