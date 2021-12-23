//* 난이도 및 풀이 시간
/* start: 9:30
   end: 12:00
 실제 난이도: lv3  체감 난이도: lv3
*/
//* 문제이해
// 지렁이는 1초에 1칸 움직이며, 사과를 먹으면 몸의 길이가 1 증가한다. 특정 시간에 왼쪽,오른쪽으로 회전하는 명령배열이 주어질 때, 지렁이가 자기 몸에 닿거나, 벽을 만나 게임이 끝나는 시간은?
//* 아이디어
//
//* 풀이방법(순서도, 절차적프로그래밍)
// 1. 보드만들기
// 2. 회전함수 만들기
// 3. 이동시키기(while)
//* 시간복잡도
// O()

//* 복습필요여부
// 풀긴 풀었으나, 구현하는 것에 시간이 너무 오래걸렸다. tail 부분 짜는데 오래걸림

function solution(N, apples, directions) {
  let time = 0;
  let tail = []; // 현재위치 계속 담기, 사과없을 때 body.pop(), 현재위치는 계속 push, 사과있으면 이전자리도 push
  let curD = 0;
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  // 1. 보드 만들기
  let B = makeBoard(N);
  apples.forEach((apple) => {
    let [r, c] = apple;
    B[r][c] = "a";
  });
  function makeBoard(N) {
    let B = Array.from(Array(N + 2), () => Array(N + 2).fill(0));
    for (let i = 0; i < N + 2; i++) {
      for (let j = 0; j < N + 2; j++) {
        if (i <= 0 || i === N + 1) {
          B[i][j] = 1;
        }
        if (j <= 0 || j === N + 1) {
          B[i][j] = 1;
        }
      }
    }
    return B;
  }
  //2. 회전함수 만들기 (현재idx, 왼or오) -> 다음stepIdx
  function turn(curD, LorR) {
    if (LorR === "D") {
      return (curD + 1) % 4;
    } else {
      let next = curD - 1;
      if (next < 0) {
        next = 3;
      }
      return next % 4;
    }
  }

  //3. 이동시키기
  let prevR = 1;
  let prevC = 1;
  let curR;
  let curC;
  while (true) {
    time++;
    // head전진
    let [dx, dy] = dir[curD];
    curR = prevR + dx;
    curC = prevC + dy;
    // 박으면
    if (B[curR][curC] === 1) {
      console.log("Boom", [curR, curC], B[curR][curC]);
      break;
    } else if (B[curR][curC] === "a") {
      // 사과가 있다면
      B[prevR][prevC] = 1; // 꼬리를 늘리고
      tail.push([prevR, prevC]); // 꼬리를 담는다. (나중에 제거하기 위해서)
    } else if (B[curR][curC] === 0) {
      // 전진하면
      tail.push([prevR, prevC]); // 직전 것 담는다. 길이유지위해
      let [removeR, removeC] = tail.shift();
      B[removeR][removeC] = 0; // 마지막꼬리제거
    }
    B[curR][curC] = 1; // 머리가 위치한 곳은 1
    prevR = curR;
    prevC = curC;
    // time이 변환시기d라면
    for (let i = 0; i < directions.length; i++) {
      if (time === directions[i][0]) {
        curD = turn(curD, directions[i][1]);
      }
    }
  }
  return time;
}

console.log(
  solution(
    6,
    [
      [3, 4],
      [2, 5],
      [5, 3],
    ],
    [
      [3, "D"],
      [15, "L"],
      [17, "D"],
    ]
  )
); // 9
[
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
console.log(
  solution(
    10,
    [
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
    ],
    [
      [8, "D"],
      [10, "D"],
      [11, "D"],
      [13, "L"],
    ]
  )
); // 21
console.log(
  solution(
    10,
    [
      [1, 2],
      [1, 3],
      [1, 6],
      [1, 7],
      [1, 5],
    ],
    [
      [8, "D"],
      [10, "D"],
      [11, "D"],
      [13, "L"],
    ]
  )
); // 21

[
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
