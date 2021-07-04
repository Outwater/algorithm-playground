// [문제링크](https://app.codility.com/programmers/lessons/4-counting_elements/)

// 2차풀이 (set 레퍼참고)
// 중복을 포함하지 않는 set 객체
// set에 해당 값 넣고, 해당 값의 길이가 X일 때
function solution(X, A) {
  let memo = new Set();

  for (let i = 0; i < A.length; i++) {
    memo.add(A[i]);

    if (memo.size === X) return i;
  }
  return -1;
}

// 1차풀이
// 시간복잡도 O(N^2)으로 실패

function solution(X, A) {
  // x = 5. 1,2,3,4,5 가 전부나왔을 때
  let memo = [];
  let sum = (X * (X + 1)) / 2;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > X || memo.includes(A[i])) continue;
    memo.push(A[i]);

    sum -= A[i];
    if (sum === 0) return i;
  }
  return -1;
}
