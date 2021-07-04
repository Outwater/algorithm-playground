// A를 정렬하고, i번째와 A[i] 값이 다를 경우 false,
// 순회종료시 true 리턴
function solution(A) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== i + 1) {
      return 0;
    }
  }
  return 1;
}
