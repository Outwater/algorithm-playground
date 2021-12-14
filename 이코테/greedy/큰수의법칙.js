//* 아이디어
// 큰수를 제일 많이 써야한다. 가장큰수와 그다음 큰수만 필요,
// K * 몫 만큼 큰수 선택, 몫만큼 그다음 수 선택
//* 풀이방법(순서도, 절차적프로그래밍)
// 1. 큰 수와 그 다음 큰 수를 구한다.
// 2. M / K 의 몫과 나머지를 구한다.
// 3. largetset * 몫 * K + second * 나머지
//* 시간복잡도
// O()
//* 풀이 시간
// start: 11:30 end: 11:45
// 실제 난이도:하  체감 난이도: 하
//* 복습필요여부
// X

function solution(M, K, nums) {
  nums.sort((a, b) => b - a);
  const [first, second] = nums;
  let q = parseInt(M / K);
  let r = M % K;

  let max = first * q * K + second * r;
  return max;
}

console.log(solution(8, 3, [2, 4, 5, 4, 6])); // 46 => 666,5,666,5
console.log(solution(7, 2, [3, 4, 3, 4, 3])); // 28 => 4444444
console.log(solution(8, 3, [6, 5, 4])); // 46
