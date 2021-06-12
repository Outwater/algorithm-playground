function solution(input) {
  //   const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
  input = input.toString().split("\n");
  const N = Number(input.shift());
  let arr = [];
  //   let trim = input.trim();
  for (let i = 0; i < N; i++) {
    arr.push(input[i].split(" ").map((el) => Number(el)));
  }

  let zeroCnt = 0;
  let oneCnt = 0;

  function aux(arr) {
    let SumVal = arr
      .map((row) => row.reduce((acc, cur) => acc + cur))
      .reduce((acc, cur) => acc + cur);

    if (SumVal === arr.length ** 2) {
      oneCnt++;
      return;
    }
    if (SumVal === 0) {
      zeroCnt++;
      return;
    }

    let n = arr.length;
    let AB = arr.slice(0, n / 2); // matrix(그림)에서 상단 의미
    let CD = arr.slice(n / 2); // matrix 하단 의미
    let A = AB.map((el) => el.slice(0, el.length / 2)); // 좌상단
    let B = AB.map((el) => el.slice(el.length / 2)); // 우상단
    let C = CD.map((el) => el.slice(0, el.length / 2)); //좌하단
    let D = CD.map((el) => el.slice(el.length / 2)); //우하단
    aux(A);
    aux(B);
    aux(C);
    aux(D);
  }
  aux(arr);
  console.log(zeroCnt);
  console.log(oneCnt);
}
solution(`8
1 1 0 0 0 0 1 1
1 1 0 0 0 0 1 1
0 0 0 0 1 1 0 0
0 0 0 0 1 1 0 0
1 0 0 0 1 1 1 1
0 1 0 0 1 1 1 1
0 0 1 1 1 1 1 1
0 0 1 1 1 1 1 1`);
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input.push(line);
//   }).on('close', function () {
//     // 입력 파싱

//     process.exit();
//   });
