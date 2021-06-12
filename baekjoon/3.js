const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(N) {
  const memo = [0, 1, 1, 1, 2, 2];
  for (let i = 6; i <= N; i++) {
    memo[i] = memo[i - 1] + memo[i - 5];
  }
  console.log(memo[N]);
}

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 입력 파싱

  let TC = input.shift();
  for (let tc = 0; tc < TC; tc++) {
    // 각 테스트의 입력 정보
    let N = input
      .shift()
      .split(" ")
      .map((x) => Number(x))[0];
    solution(N);
  }

  process.exit();
});
