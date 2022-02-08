//* 난이도 및 풀이 시간
// start: 09:10
// end: 09:30
// 실제 난이도: lv2  체감 난이도: lv1
//* 문제이해
// 양의 정수n을 k진수로 바꿨을 때, 변환된 수에서 조건에 맞는 소수가 몇개인지 리턴
// 조건
// 1) 0P0 : 양쪽에 0이 있는 경우
// 2) P0 : 오른쪽에만 0이 있고, 왼쪽에는 아무것도 없는 경우
// 3) 0P : 왼쪽에만 0이 있고, 오른쪽에는 아무것도 없는 경우
// 4) P : 양쪽에 아무것도 없는 경우
//* 아이디어
// 변환된 수 전체를 1번 소수검사(P)
// 나머지는 0을 기준으로 split한 후 각각 검사한다.

// utils
// 1) isPrime(numByTenth) : 십진수 숫자를 넣고, 소수인지 판별하는 함수
//* 풀이방법(순서도, 절차적프로그래밍)
// 1. 주어진 수를 k진수로 변환 (numByKth)
// 2. 변환된 수 소수검사 => 0이 포함되면 안되고, 0이 없을 경우 split(0)했을 때 그대로 담기므로 따로 검사필요x
// 3. 변환된 수를 0으로 split하여 각각 소수검사
//* 시간복잡도
// O()

//* 복습필요여부
// No

function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(n, k) {
  const candidates = n.toString(k).split("0");

  return candidates.filter((c) => isPrime(c)).length;
}

console.log(solution(437674, 3)); // 3
console.log(solution(110011, 10)); // 2
