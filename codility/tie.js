function solution(K, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // 묶어서 K 보다 커지는 로프의 세트의 수가 최대가 되도록 리턴

  let cnt = 0;
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    if (sum >= K) {
      cnt++;
      sum = 0;
    }
  }
  return cnt;
}
