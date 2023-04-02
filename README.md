# JavaScript_Applicaion(운영진용)

이번 세션시간에는 리액트에서 많이 사용되는 자바스크립트 응용에 대해서 배웠습니다.

이번 과제는 총 5문제로 오늘 배운 새로운 함수나 메소드를 이용하여 풀어주시면 되겠습니다.

README.md 파일에 문제에 대한 자세한 설명이 있고 각 js파일에 코드를 작성해주시면 됩니다. 과제는 돌아오는 세션 전인 4/7 18:00까지 push해주시고 담당운영진한테 확인 받으시면 됩니다.🙆🏻‍♂️

## 1번 다음의 결과값 예측해보기(★★)

다음 코드의 결과를 예측해서 작성해주세요~

```js
let Name = "나현";

alert(`hello ${1}`); // ?

alert(`hello ${"Name"}`); // ?

alert("hello ${Name}"); // ?

alert(`hello ${Name}`); // ?
```

## 2번 밀린 회비 합계 구하기(★★★)

멋쟁이 사자처럼 11기 회비가 연체된 인원에 대한 정보를 담고 있는 객체가 존재한다. 연체 합산 금액을 구하고 그 값을 변수 `sum`에 저장해주세요.

```js
let lionMoney = {
  상혁: 20000,
  유선: 8300,
  주용: 2800,
  맑음: 50000,
};
```

## 3번 로그인 구현하기(★★★★)

프롬프트(prompt) 대화상자를 이용해 간이 로그인 창을 구현해보세요.

사용자가 `"LikeLion"`을 입력하면 비밀번호를 물어보는 프롬프트 대화상자를 띄워주세요. 이때 아무런 입력도 하지 않거나 `Esc`를 누르면 "취소되었습니다."라는 메시지를 보여주세요. 틀린 비밀번호를 입력했다면 "인증에 실패하였습니다." 라는 메시지를 보여주세요.

비밀번호 확인 절차는 다음과 같습니다.

- 맞는 비밀번호 `"KingJS"`를 입력했다면 "환영합니다!"라는 메시지를 보여주세요.
- 틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.
- 빈 문자열을 입력하거나 입력을 취소했다면 "취소되었습니다"라는 메시지를 보여주세요.

- 힌트1: 중첩 if 블록과 논리 연산자만 이용한다면 풀 수 있습니다.
- 힌트2: 출력은 alert(실행 내용)으로 합니다.
- 힌트3: 프롬프트 창에 아무것도 입력하지 않으면 빈 문자열인 ''가, ESC를 누르면 null이 반환됩니다.

## 4번 객체 구조 분해 할당 이해하기(★★★)

아래와 같은 객체가 있다고 가정해보자.

```js
let user = {
  Name: "지환",
  years: 23,
};
```

구조 분해 할당을 사용해 아래 미션을 수행해 보세요.

- `name` 프로퍼티의 값을 변수 `name`에 할당하세요.
- `years` 프로퍼티의 값을 변수 `age`에 할당하세요.
- `isAdmin` 프로퍼티의 값을 변수 `isAdmin`에 할당하세요. `isAdmin`이라는 프로퍼티가 없으면 false를 할당하세요.

## 5번 객체를 JSON으로 바꾼 후 다시 객체로 바꾸기(★★★★)

`user`를 JSON 형태의 문자열로 바꾼 다음 이를 다시 객체로 바꾼 후 제2의 변수에 저장해주세요~

```js
let user = {
  name: "윤정",
  age: 20,
};
```
