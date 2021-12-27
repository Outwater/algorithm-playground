// 효율성 실패
function solution(n) {
  let memo = [];
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < memo.length; j++) {
      if (i % memo[j] === 0) {
        break;
      }
    }
    isPrime(i) && memo.push(i);
  }

  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  return memo.length;
}

/*
 미리 n까지의 모든 숫자를 배열에 선언하여두고,
 소수가 아닌 것들을 0으로 만들어 최종적으로 1의 개수(소수)를 구한다.
 0,1은 소수가 아니며,
 2부터 시작하여 2,3,4,..의 배수들을 차례대로 0으로 만든다.
*/
function solution(n) {
  let nums = Array(n + 1).fill(1);
  nums[0] = 0;
  nums[1] = 0;

  for (let i = 2; i < Math.sqrt(n); i++) {
    for (let j = 2; i * j <= n; j++) nums[i * j] = 0;
  }
  return nums.reduce((acc, cur) => acc + cur);
}
