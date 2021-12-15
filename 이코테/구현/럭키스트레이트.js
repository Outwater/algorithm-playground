//* 난이도 및 풀이 시간
// start: 11:20
// end: 11:30
// 실제 난이도: 하  체감 난이도: 하
//* 문제이해
// 짝수자리의 숫자가 주어졌을 때, 왼쪽절반과 오른쪽절반의 숫자의 합이 같은 여부를 리턴
//* 아이디어
// N이 99,999,999 임을 고려할 것
// 최대 자리수가 8자리이다.
// 완탐으로 n을 str으로 바꾼다.
// 자리수를 확인하고, 절반만큼 좌우를 더한 후 비교한다.
//* 풀이방법(순서도, 절차적프로그래밍)
// 0. 변수선언 - front, rear
// 1. n을 str으로 변경
// 2. str.length 확인
// 3. for문으로 절반까지는 front에 더하고, 뒤는 rear에 더한다
// 4. front = rear 에 따른 문자열 출력
//* 시간복잡도
// O(N.length)
//* 복습필요여부
//  No

function solution(n) {
  let front = 0;
  let rear = 0;
  let strN = String(n);
  for (let i = 0; i < strN.length; i++) {
    if (i < strN.length / 2) {
      front += Number(strN[i]);
    } else {
      rear += Number(strN[i]);
    }
  }
  return front === rear ? "LUCKY" : "READY";
}

console.log(solution(123402)); // LUCKY
console.log(solution(7755)); // READY
console.log(solution(776965)); // READY
