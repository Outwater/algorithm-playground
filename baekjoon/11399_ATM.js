function solution(input) {
  //   const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
  input = input.toString().split("\n");
  let N = Number(input.shift());
  let arr = input
    .shift()
    .split(" ")
    .map((el) => Number(el));
  //   console.log(arr);

  //1) arr를 오름차순 정렬
  //2) for문 순회하며 그 사람까지의 시간의 합을 memo[i] 에 저장
  //3) for문 종료되고 memo.reduce

  arr.sort((a, b) => a - b);
  //   console.log(arr);
  let memo = [arr[0]];
  for (let i = 1; i < N; i++) {
    memo[i] = memo[i - 1] + arr[i];
  }
  console.log(memo.reduce((acc, cur) => acc + cur));
}

solution(`5
3 1 4 3 2`);
