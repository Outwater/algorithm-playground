//* 난이도 및 풀이 시간
// start:  8:05
// end: 8:30
// 실제 난이도: 하  체감 난이도: 하
//* 아이디어
// 각 상황에서, 0,1의 개수를 세고 적은 경우를 뒤집는 행위의 반복
//* 풀이방법(순서도, 절차적프로그래밍)
// 1. S를 순회하며 연속된 0과1의 덩어리 개수를 센다.
// 2. prev와 다를 경우에만 해당 숫자 cnt를 올려준다.
// 3. 0, 1의 cnt 중 적은 것을 return
//* 시간복잡도
// O(N)
//* 복습필요여부
// No

function solution(S) {
  let prev = "";
  let zero = 0;
  let one = 0;

  for (let i = 0; i < S.length; i++) {
    if (!prev) {
      S[i] === "0" ? zero++ : one++;
      prev = S[i];
    }
    if (S[i] === "0" && prev !== S[i]) {
      zero++;
      prev = "0";
    } else if (S[i] === "1" && prev !== S[i]) {
      one++;
      prev = "1";
    }
  }
  console.log([zero, one]);
  return Math.min(zero, one);
}

console.log(solution("0001100")); //1
console.log(solution("1010001101011")); // 4
