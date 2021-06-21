function solution(input) {
  // const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  input = input
    .toString()
    .split("\n")
    .map((el) => Number(el));
  let N = input.shift();

  // N만큼 반복하며 가운데수를 출력하도록 한다.
  // 1) 빈배열에 숫자를 추가하고, 정렬하기
  // 2-1) []length가 홀수라면 2로 나눈 몫을 idx로 하고
  // 2-2) []length가 짝수라면 2로 나눈 idx와 idx-1을 구하고 비교한다.

  let numbers = [];
  for (let i = 0; i < N; i++) {
    let number = input.shift();
    numbers.push(number);
    numbers.sort((a, b) => a - b);
    if (numbers.length % 2 === 0) {
      let idx = numbers.length / 2;
      let min = Math.min(numbers[idx], numbers[idx - 1]);
      console.log(min);
    } else {
      console.log(numbers[parseInt(numbers.length / 2)]);
    }
  }
}

solution(`7
1
5
2
10
-99
7
5`);
