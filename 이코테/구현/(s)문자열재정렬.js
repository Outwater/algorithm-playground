//* 난이도 및 풀이 시간
// start: 10:40
// end: 10:55
// 실제 난이도: 하  체감 난이도: 하
//* 문제이해
// 숫자와 문자가 섞인 string을 받아, abc순 + 모든숫자의 합을 리턴하는 문제
//* 아이디어
// 입력값을 쪼개어 배열에 담고, sort를 통해 문자열을 정렬하고, 숫자와 문자를 구분한다.
//* 풀이방법(순서도, 절차적프로그래밍)
// 1. split을 통해 쪼개어 배열에 담는다.
// 2. 쪼개진 문자열arr를 sort한다.
// 3. for문을 통해 배열을 순회하며, 숫자의 합을 구하고, 문자열로 전환되는 idx를 구한다.
// 4. 문자열 부분을 따로 slice하여, join하고, 숫자의 합을 더해준다.
//* 시간복잡도
// O(N)

//* 복습필요여부
// No

function solution(S) {
  const strArr = S.split("");
  const a = strArr.sort();
  let sum = 0;
  let stringIdx = 0;
  for (let i = 0; i < a.length; i++) {
    if (isNaN(Number(a[i]))) {
      stringIdx = i;
      break;
    } else {
      sum += Number(a[i]);
    }
  }
  return a.slice(stringIdx).join("") + String(sum);
}

console.log(solution("K1KA5CB7"), solution("K1KA5CB7") === "ABCKK13"); // ABCKK13
console.log(solution("AJKDLSI412K4JSJ9D") === "ADDIJJJKKLSS20"); // ADDIJJJKKLSS20
console.log([
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]);
let b = [
  [0, 1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

console.log(
  b
    .map((el) => {
      return el.slice(3, 6);
    })
    .slice(3, 6)
);
