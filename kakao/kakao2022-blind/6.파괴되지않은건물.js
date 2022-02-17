/*
//* 문제이해
N*M 행렬의 board와 (r1,c1) ~ (r2, c2) 까지 type에 따라 +- degree를 나타내는 skills가 주어질때
모든 skill이 적용된 이후에 board의 값이 1이상인 개수를 리턴하는 문제

//* 아이디어
> solution1 O(K * M * N) 알고리즘
skill의 길이: K

1. skill을 순회

2. 2중 반복문을 통하여 값 변경하기

3. 1이상의 값 계산하기

> solution2 O(K) 알고리즘

부분합을 이용한 풀이
[[1,1,1,1]
 [1,1,1,1]    [0,5,0,-5]     [0,5,5,0]
 [1,1,1,1]    [0,5,0,-5]     [0,5,5,0]
 [1,1,1,1]]
(1,1) (2,2) 까지 +5를 한다고 할 때, 더해주는 부분합배열 만들어 나중에 1번의 덧셈연산만 해주면 된디.

위의 예제는 가로로만 부분합을 구해 O(K *N *1)의 연산이 필요하지만
이를 세로에까지 적용한다면 O(K * 1) 의 연산 가능

[[1,1,1,1]     부분합배열     가로 부분합 계산과정    세로부분합 계산과정
 [1,1,1,1]    [0,5,0,-5]     [0,5,5,0]       [0,5,5,0]
 [1,1,1,1]    [0,0,0,0]      [0,0,0,0]       [0,5,5,0]
 [1,1,1,1]]   [0,-5,0,5]     [0,-5,-5,0]     [0,0,0,0]

//* 풀이방법
(r1,c1): +degree
(r1, c2+1): -degree
(r2+1, c1): -degree
(r2+1, c2+1) : +degree
*/
function solution1(board, skill) {
  skill.forEach((s) => {
    const [type, r1, c1, r2, c2, degree] = s;

    for (let row = r1; row <= r2; row++) {
      for (let col = c1; col <= c2; col++) {
        type === 1 ? (board[row][col] -= degree) : (board[row][col] += degree);
      }
    }
  });

  return board.reduce((acc, row) => acc + row.filter((v) => v > 0).length, 0);
}

function solution2(board, skill) {
  let [N, M] = [board.length, board[0].length];
  let cal_board = Array.from({ length: N }, () => Array(M).fill(0));

  //1. skill 순회하며 cal_board 만들기 (O(K))
  skill.forEach((s) => {
    const [type, r1, c1, r2, c2, degree] = s;
    const degree_by_type = type === 1 ? -degree : degree;

    const isValidPos = (r2, c2) => r2 + 1 <= N - 1 && c2 + 1 <= M - 1;

    cal_board[r1][c1] += degree_by_type;
    isValidPos(0, c2) && (cal_board[r1][c2 + 1] -= degree_by_type);
    isValidPos(r2, 0) && (cal_board[r2 + 1][c1] -= degree_by_type);
    isValidPos(r2, c2) && (cal_board[r2 + 1][c2 + 1] += degree_by_type);
  });

  // 2. cal_board 부분합으로 계산하기 O(M*N)
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < M - 1; col++) {
      cal_board[row][col + 1] += cal_board[row][col];
    }
  }

  for (let row = 0; row < N - 1; row++) {
    for (let col = 0; col < M; col++) {
      cal_board[row + 1][col] += cal_board[row][col];
    }
  }

  // return board.map((row, rowIdx) =>
  //   row.map((value, colIdx) => value + cal_board[rowIdx][colIdx])
  // );

  // 3. board와 calboard 합쳐주면서 1보다 큰 값 세기 (O(M*N))
  // 최종적으로 O(K + M*N)
  return board.reduce(
    (acc, rowList, rowIdx) =>
      acc +
      rowList.filter((board_value, colIdx) => {
        let final_value = board_value + cal_board[rowIdx][colIdx];
        return final_value >= 1;
      }).length,
    0
  );
}

console.log(
  solution1(
    [
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
    ],
    [
      [1, 0, 0, 3, 4, 4],
      [1, 2, 0, 2, 3, 2],
      [2, 1, 0, 3, 1, 2],
      [1, 0, 1, 3, 3, 1],
    ]
  )
); //10
console.log(
  solution1(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 1, 1, 2, 2, 4],
      [1, 0, 0, 1, 1, 2],
      [2, 2, 0, 2, 0, 100],
    ]
  )
); //6
console.log(
  solution2(
    [
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
    ],
    [
      [1, 0, 0, 3, 4, 4],
      [1, 2, 0, 2, 3, 2],
      [2, 1, 0, 3, 1, 2],
      [1, 0, 1, 3, 3, 1],
    ]
  )
); //10
console.log(
  solution2(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 1, 1, 2, 2, 4],
      [1, 0, 0, 1, 1, 2],
      [2, 2, 0, 2, 0, 100],
    ]
  )
); //6
