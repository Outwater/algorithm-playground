//* 난이도 및 풀이 시간
// start: 08:35
// end: 9:00
// 실제 난이도: 하  체감 난이도: 하
//* 문제이해
// 1~N번까지의 볼링공은 각각 1~M까지의 무게를 갖는다.
// 각각의 볼링공은 차례대로 번호가 부여된다.
// 두 사람이 무게가 다른 볼링공을 고르려고 할 때, 경우의 수는 ?
//* 아이디어
// [0, 1, 2, 2]
// [0, 1,2,1,2,2] 7 + 10 + 4 + 4   = 25
// i번째에서 나머지 까지 곱한 것을 더하는 방법으로 진행
//* 풀이방법(순서도, 절차적프로그래밍)
// 변수 cnt, weights
// 1. 무게를 기준으로 오름차순 배열을 만든다.
// 2. 무게배열을 순회
// 3.  i번째와 i이상의 값들의 곱을 전체 경우의수에 더한다.
//* 시간복잡도
// O(N^2)

//* 복습필요여부
// No

function solution(input) {
  let weights = [];
  let cnt = 0;
  //1. 무게를 담은 배열 만들기 // [_,0,2,2]
  input.forEach((el) => {
    weights[el] = weights[el] + 1 || 1;
  });

  //2. 무게 배열 순회하며 cnt구하기
  weights.forEach((el, idx) => {
    if (!el) return;
    for (let i = idx + 1; i < weights.length; i++) {
      cnt += el * weights[i];
    }
  });
  return cnt;
}

console.log(solution([1, 3, 2, 3, 2])); // 8
console.log(solution([1, 5, 4, 3, 2, 4, 5, 2])); // 25
