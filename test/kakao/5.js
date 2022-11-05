/* 
* 문제 타입

* 난이도 및 풀이 시간
start:
end:
실제 난이도:  체감 난이도:
* 문제이해

* 아이디어

* 풀이방법(순서도, 절차적프로그래밍)
1.
2.
3.
* 시간복잡도
O()

* 복습필요여부

*/
function solution(commands) {
  let board = Array.from({ length: 51 }, () =>
    Array.from({ length: 51 }, () => ({ value: "EMPTY" }))
  );
  let result = [];

  commands.forEach((command) => {
    const [c, arg1, arg2, arg3, arg4] = command.split(" ");

    if (c === "UPDATE") {
      update(arg1, arg2, arg3);
    } else if (c === "MERGE") {
      merge(arg1, arg2, arg3, arg4);
    } else if (c === "UNMERGE") {
      unmerge(arg1, arg2);
    } else if (c === "PRINT") {
      print(arg1, arg2);
    }
  });

  function update(arg1, arg2, arg3) {
    console.log("update:", arg1, arg2, arg3);
    if (!arg3) {
      board = board.map((row) =>
        row.map((el) => (el.value == arg1 ? { ...el, value: arg2 } : el))
      );
    } else {
      // merge 값인 경우 추가 처리
      if (board[arg1][arg2].merge) {
        const [r1, c1, r2, c2] = board[arg1][arg2].merge;
        const [row1, row2, col1, col2] = [
          Math.min(r1, r2),
          Math.max(r1, r2),
          Math.min(c1, c2),
          Math.max(c1, c2),
        ];

        for (let row = row1; row <= row2; row++) {
          for (let col = col1; col <= col2; col++) {
            board[row][col] = {
              merge: [row1, col1, row2, col2],
              value: arg3,
            };
          }
        }
        console.log("updateValue:", board[1][3]);
      } else {
        board[arg1][arg2] = { value: arg3 };
      }
    }
    if (arg3 === "group") {
      console.log(board);
    }
  }

  function merge(arg1, arg2, arg3, arg4) {
    console.log("merge시작!");
    console.log(arg1, arg2);
    console.log(arg3, arg4);

    let v1r1, v1c1, v1r2, v1c2, v2r1, v2c1, v2r2, v2c2;

    if (board[arg3][arg4].merge) {
      [v2r1, v2c1, v2r2, v2c2] = board[arg3][arg4].merge;
    } else {
      [v2r1, v2c1, v2r2, v2c2] = [arg1, arg2, arg3, arg4];
    }
    if (board[arg1][arg2].merge) {
      [v1r1, v1c1, v1r2, v1c2] = board[arg1][arg2].merge;
    } else {
      [v1r1, v1c1, v1r2, v1c2] = [arg1, arg2, arg3, arg4];
    }

    const [r1, c1, r2, c2] = [
      Math.min(arg1, arg3, v1r1, v2r1),
      Math.min(arg2, arg4, v1c1, v2c1),
      Math.max(arg1, arg3, v1r2, v2r2),
      Math.max(arg2, arg4, v1c2, v2c2),
    ];
    console.log(r1, c1, r2, c2);

    for (let row = r1; row <= r2; row++) {
      for (let col = c1; col <= c2; col++) {
        let mergeValue = board[arg1][arg2].value || board[arg3][arg4];
        console.log("mergeValue", mergeValue);
        board[row][col] = {
          merge: [r1, c1, r2, c2],
          value: mergeValue,
        };
        console.log("here", board[row][col]);
      }
    }
    console.log("merge완료!");
  }

  function unmerge(arg1, arg2) {
    console.log(arg1, arg2, board[arg1][arg2]);
    let [r1, c1, r2, c2] = board[arg1][arg2].merge;
    console.log(r1, c1, r2, c2, arg1, arg2);

    for (let row = r1; row <= r2; row++) {
      for (let col = c1; col <= c2; col++) {
        if (row === Number(arg1) && col === Number(arg2)) {
          console.log("here", row, col);
          board[row][col] = { value: board[arg1][arg2].value };
        } else {
          board[row][col] = { value: "EMPTY" };
        }
      }
    }
    console.log("unmerge!");
  }

  function print(arg1, arg2) {
    console.log("print", board[arg1][arg2]);
    result.push(board[arg1][arg2].value);
  }

  console.log(board);
  return result;
}

console.log(
  solution([
    "UPDATE 1 1 menu",
    "UPDATE 1 2 category",
    "UPDATE 2 1 bibimbap",
    "UPDATE 2 2 korean",
    "UPDATE 2 3 rice",
    "UPDATE 3 1 ramyeon",
    "UPDATE 3 2 korean",
    "UPDATE 3 3 noodle",
    "UPDATE 3 4 instant",
    "UPDATE 4 1 pasta",
    "UPDATE 4 2 italian",
    "UPDATE 4 3 noodle",
    "MERGE 1 2 1 3",
    "MERGE 1 3 1 4",
    "UPDATE korean hansik",
    "UPDATE 1 3 group",
    "UNMERGE 1 4",
    "PRINT 1 3",
    "PRINT 1 4",
  ])
); //

// console.log(
//   solution([
//     "UPDATE 1 1 a",
//     "UPDATE 1 2 b",
//     "UPDATE 2 1 c",
//     "UPDATE 2 2 d",
//     "MERGE 1 1 1 2",
//     "MERGE 2 2 2 1",
//     "MERGE 2 1 1 1",
//     "PRINT 1 1",
//     "UNMERGE 2 2",
//     "PRINT 1 1",
//   ])
// );
