// 4번 문제.

let user = {
  Name: "지환",
  years: 23,
};

// 아래에 코드를 작성해주세요 ~

alert(Name); // "지환"
alert(age); // 23
alert(isAdmin); // false

/* 정답 코드
let user = {
  Name: "지환",
  years: 23
};

let {Name, years: age, isAdmin = false} = user;

alert( Name ); // "지환"
alert( age ); // 23
alert( isAdmin ); // false
*/
