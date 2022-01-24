//* 난이도 및 풀이 시간
// 50분
// 실제 난이도: easy  체감 난이도: medium
//* 문제이해
// 단 1번만 존재하는 value를 찾아 리턴, 없다면 -1 리턴
//* 아이디어
// 처음에 해매었지만, indexOf(v) === lastIndexOf(v) 라면 uniqueNumber이다.
//* 풀이방법(순서도, 절차적프로그래밍)
// 1. A를 순회
// 2. indexOf(A[i]) === lastIndexOf(A[i]) 라면 해당 값 리턴
// 3. 반복문 모두 돌았는데 리턴 없다면 존재하지 않으므로 -1 리턴
//* 시간복잡도
// O(N^2) -> O(N)으로 줄여야함

//* 복습필요여부
// No

function solution(A) {
  for (let i = 0; i < A.length; i++) {
    let currentValue = A[i];

    if (A.indexOf(currentValue) === A.lastIndexOf(currentValue)) {
      return currentValue;
    }
  }

  return -1;
}

// O(NlogN)으로 풀기
function solution(A) {
  // [1,1,1,6,6,6]
  let memo = new Map();

  for (let i = 0; i < A.length; i++) {
    let currentValue = A[i];
    if (memo.has(currentValue)) {
      memo.set(currentValue, memo.get(currentValue) + 1);
    } else {
      memo.set(currentValue, 1);
    }
  }
  for (const [key, value] of memo.entries()) {
    if (value === 1) {
      return key;
    }
  }
  return -1;
}
