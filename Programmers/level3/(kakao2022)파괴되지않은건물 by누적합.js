//* 난이도 및 풀이 시간
// start:
// end: 13:00
// 실제 난이도: lv3  체감 난이도:
//* 문제이해
// skill과 board가 주어질 때,
// skill은 회복or공격 여부, 공격범위(r1,c1 ~ r2,c2), 공격력 이주어진다.
// 모든 skill이후에 파괴되지 않은 건물의 수를 리턴

//* 아이디어
// 누적합을 더하는 방법으로 푼다면, O(skill.length)로 풀수가 있다.
// 누적합 방법이란
// [1,2,3,4,5] 에서 0~3번 idx 까지 +2 를 하고 싶다면
// [+2,0,0,0,-2] 를 만들어 차례대로 누적합 한다면 [+2,+2,+2,+2,0] 이 되어
// 최종적으로 [1,2,3,4,5] + [+2,+2,+2,+2,0] = [3,4,5,6,5] 의 결과를 얻을 수 있다.

// ex 0~3번 +2,  2~3번은 -10 한다고 하면
// 1) [+2, 0, 0, 0,-2] , [0,0,-10, 0, 10] 을 만들고,
// 2) [+2, 0,-10, 0, 8] 의 최종 누적합 배열을 만든다.
// 3) [+2, +2, -8, -8, 0]
// 최종적으로 마지막 1번의 연산을 통해서
// [1,2,3,4,5] + [2,2, -8, -8, 0] = [3,4,-5,-4,5] 라는 결과를 얻을 수 있다.

// 이것을 2차원 배열에 적용시킨다면
/*
[0, 0, 0, 0]
[0, 0, 0, 0]
[0, 0, 0, 0]  일때 (1,1) (2,2) 라면
[0, 0, 0, 0]
 1) 왼쪽->오른쪽, 위->아래
 (r1,c1) = n , (r2+1, c2+1) = n
 (r2+1, c1) = -n , (r1, c1+1) = -n
[0, 0, 0, 0]
[0, n, 0, -n]
[0, 0, 0, 0]
[0, -n, 0, n] 

[0, 0, 0, 0]
[0, n, n, n-n]
[0, n, n, n-n]
[0, -n+n, -n+n, -n+n + n-n]
*/
//* 풀이방법(순서도, 절차적프로그래밍)
// 1.
// 2.
// 3.
//* 시간복잡도
// O(N)

//* 복습필요여부
// yes

function solution(board, skill) {
  const MAX_ROW_INDEX = board.length - 1;
  const MAX_COL_INDEX = board[0].length - 1;

  const makeBoard = () => {
    return Array.from({ length: MAX_ROW_INDEX + 1 }, () =>
      new Array(MAX_COL_INDEX + 1).fill(0)
    );
  };

  const calcBoard = makeBoard();
  // 1. skill 순회하며, 누적합의 시작,끝 값 입력하기
  skill.forEach((s) => {
    const [type, r1, c1, r2, c2, degree] = s;
    const degree_by_type = type === 1 ? -degree : degree;
    calcBoard[r1][c1] += degree_by_type;
    if (c2 + 1 <= MAX_COL_INDEX) {
      calcBoard[r1][c2 + 1] -= degree_by_type;
    }
    if (r2 + 1 <= MAX_ROW_INDEX && c2 + 1 <= MAX_COL_INDEX) {
      calcBoard[r2 + 1][c2 + 1] += degree_by_type;
    }
    if (r2 + 1 <= MAX_ROW_INDEX) {
      calcBoard[r2 + 1][c1] -= degree_by_type;
    }
    // console.log(calcBoard);
  });

  // 2. 누적합 배열 왼쪽->오른쪽, 위->아래순으로 누적합 계산하기
  for (let row = 0; row <= MAX_ROW_INDEX; row++) {
    for (let col = 1; col <= MAX_COL_INDEX; col++) {
      calcBoard[row][col] += calcBoard[row][col - 1];
    }
  }

  for (let col = 0; col <= MAX_COL_INDEX; col++) {
    for (let row = 1; row <= MAX_ROW_INDEX; row++) {
      calcBoard[row][col] += calcBoard[row - 1][col];
    }
  }

  //3. 기존 board와 누적합board를 합하여 계산하기
  const finalBoard = makeBoard();

  for (let col = 0; col <= MAX_COL_INDEX; col++) {
    for (let row = 0; row <= MAX_ROW_INDEX; row++) {
      finalBoard[row][col] = board[row][col] + calcBoard[row][col];
    }
  }

  //4. 최종board에서 파괴되지 않은 건물 수 세기
  let cnt = 0;
  finalBoard.map((row) => {
    row.map((value) => {
      if (value > 0) cnt++;
    });
  });

  return cnt;
}

console.log(
  solution(
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
); //
// console.log(solution()); //
//[ -4, [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ] ]
