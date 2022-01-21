//* 난이도 및 풀이 시간
// 30분
// 실제 난이도:  easy 체감 난이도: medium
//* 문제이해
// 주어진 수를 이진수로 바꾸었을 때, 1사이의 최대 0의 개수를 리턴하는 문제
//* 아이디어
// 단순 완전탐색 불가 (10억)
// 1을 기준으로 split하여, 가장 긴 배열의 길이를 담아보는 접근법
//* 풀이방법(순서도, 절차적프로그래밍)
// 1. toString()으로 2진수 변환
// 2. 양 끝이 1로 막혀있어야 하므로, 가장 마지막 1을 찾고, slice 해준다
// 3. '1'을 기준으로 split 하고, 배열 중 가장 긴 요소의 길이를 리턴
//* 시간복잡도
// O(log(N)?)

//* 복습필요여부
// no

function solution(N) {
  const binaryN = N.toString(2);
  let start = binaryN.indexOf("1");
  let end = binaryN.lastIndexOf("1");
  if (start === end) return 0;

  let zeroList = binaryN.slice(start + 1, end).split("1");
  return Math.max(...zeroList.map((v) => v.length));
}

console.log(solution(9)); //1001 : 2
console.log(solution(529)); // 1000010001 :4
console.log(solution(32)); // 10000 : 0
