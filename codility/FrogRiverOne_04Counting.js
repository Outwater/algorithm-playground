// [문제링크](https://app.codility.com/c/run/trainingSQB338-EF3/)

// 2차풀이 (set 레퍼참고)

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
