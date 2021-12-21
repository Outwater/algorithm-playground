//* 1. 피보나치 수열
// 1트 - 재귀 + memoizatiton
// 재귀 호출 횟수 초과로 13,14 실패
function solution(n) {
  let memo = [];
  function fibo(n) {
    if (n <= 1) {
      return n;
    }
    if (!memo[n]) {
      memo[n] = (fibo(n - 2) % 1234567) + (fibo(n - 1) % 1234567);
    }
    return memo[n];
  }

  return fibo(n) % 1234567;
}

//2트 - 반복문을 활용한 bottomup방식으로 풀이
function solution(n) {
  let memo = [0, 1];

  for (let i = 2; i <= n; i++) {
    if (!memo[i]) {
      memo[i] = (memo[i - 1] % 1234567) + (memo[i - 2] % 1234567);
    }
  }
  return memo[n] % 1234567;
}

//* 2. 튜플의 원소들이 주어질 때, 튜플 구하기
//* 아이디어
// 원소개수 오름차순으로 정렬하고, 추가되는 원소가 튜플의 다음 원소가 된다.
//* 풀이방법(순서도, 절차적프로그래밍)
// 1. s가공하기 -> 오름차순 배열로 -> [[2],[2,1],[2,1,3],[2,1,3,4]]
// 2. i번째에서 i-1번째에 해당하는 모든 원소 제거 후, 남은 하나의 원소를 튜플에 추가함

function solution(s) {
  //1. s가공
  let sortedElements = s
    .slice(2, s.length - 2)
    .split("},{")
    .map((el) => {
      return el.split(",").map((el2) => Number(el2));
    })
    .sort((a, b) => a.length - b.length);

  let tuple = sortedElements[0];

  //2. 추가된 원소 찾아, tuple에 넣기
  // 추가된 원소 찾기
  function diff(a, b) {
    let copyA = [...a];
    let copyB = [...b];
    for (let i = 0; i < copyB.length; i++) {
      const index = copyA.indexOf(copyB[i]);
      if (index > -1) {
        copyA.splice(index, 1);
      }
    }
    return copyA;
  }
  // 반복하여, tuple에 넣기
  for (let i = 1; i < sortedElements.length; i++) {
    let diffEl = diff(sortedElements[i], sortedElements[i - 1]);
    tuple.push(diffEl[0]);
  }

  return tuple;
}

console.log(solution()); //
console.log(solution()); //
