//* 난이도 및 풀이 시간
// start: 10:10
// end: 10:35
// 실제 난이도: easy  체감 난이도: medium
//* 문제이해
// 문자열을 받아 RomanValue값을 리턴, 단 특정 문자앞에 위치하는 경우 해당 로마값을 더하는 것이 아니라 빼주도록한다.
//* 아이디어
// 제약사항을 따로 객체로 빼주어, 확인하는 방법
//* 풀이방법(순서도, 절차적프로그래밍)
// 1. 현재 문자가 제약사항이 존재하는 문자라면, 해당 값을 빼준다.
// 2. 제약사항이 없는 문자라면 해당 값을 더해준다.
//* 시간복잡도
// O()

//* 복습필요여부
// No

function solution(s) {
  let result = 0;
  const RomanValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const constraints = {
    I: ["V", "X"],
    X: ["L", "C"],
    C: ["D", "M"],
  };
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    let n = s[i + 1];
    if (constraints[c] && constraints[c].includes(n)) {
      result -= RomanValue[c];
    } else {
      result += RomanValue[c];
    }
  }
  return result;
}
console.log(solution("III")); //3
console.log(solution("LVIII")); // 58
console.log(solution("MCMXCIV")); // 1994
