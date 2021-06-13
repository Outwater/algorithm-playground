function solution(input) {
  //0613 실패: 로직, 테케 전부 맞는데, 이상하게 틀렸다고 오류;;

  //   const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
  input = input.toString().split("\n");
  input.pop();
  input = input.map((el) => el.split(" ").map((el) => Number(el)));
  let memo = new Array(21);
  for (let i = 0; i < 21; ++i) {
    memo[i] = new Array(21);
    for (let j = 0; j < 21; ++j) {
      memo[i][j] = new Array(21).fill(0);
    }
  }
  function w(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
      return 1;
    }
    if (a > 20 || b > 20 || c > 20) {
      return w(20, 20, 20);
    }
    if (memo[a][b][c] !== 0) {
      return memo[a][b][c];
    }
    if (a < b && b < c) {
      memo[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
      return memo[a][b][c];
    }
    let sol2 =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);
    memo[a][b][c] = sol2;
    return sol2;
  }

  for (let i = 0; i < input.length; i++) {
    let [a, b, c] = input[i];
    console.log(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
  }
}
solution(`1 1 1
2 2 2
10 4 6
50 50 50
-1 7 18
-1 -1 -1`);
