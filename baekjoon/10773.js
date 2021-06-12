function solution (input) {
  // 입출력
  //   const input = require("fs").readFileSync("dev/stdin").toString().split("\n").map((el) => Number(el));
  input = input
    .toString()
    .split('\n')
    .map((el) => Number(el));
  const n = input[0];
  const numbers = input.slice(1);
  // 접근
  // stack을 통해 숫자를 저장하고 0을 만났을 경우 스택에서 빼준다.
  const stack = [];
  // 1) numbers 순회
  for (let i = 0; i < n; i++) {
    if (numbers[i] === 0) {
      // 0일 때 stack에서 빼기
      stack.pop();
    } else {
      stack.push(numbers[i]); // 0이 아니면 숫자넣기
    }
  }
  const sum = stack.length && stack.reduce((acc, cur) => acc + cur); // 2) stack에 있는 숫자 모두 더해 출력
  console.log(sum);
}
const ex1 = '4\n3\n0\n4\n0';
const ex2 = '10\n1\n3\n5\n4\n0\n0\n7\n0\n0\n6';
solution(ex1);
solution(ex2);
