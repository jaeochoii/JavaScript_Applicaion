// 3번 문제.
let userName = prompt("사용자 이름을 입력해주세요.", "");

if (userName == "Admin") {
  let pass = prompt("비밀번호:", "");

  if (pass == "TheMaster") {
    alert("환영합니다!");
  } else if (pass == "" || pass == null) {
    alert("취소되었습니다.");
  } else {
    alert("인증에 실패하였습니다.");
  }
} else if (userName == "" || userName == null) {
  alert("취소되었습니다.");
} else {
  alert("인증되지 않은 사용자입니다.");
}
