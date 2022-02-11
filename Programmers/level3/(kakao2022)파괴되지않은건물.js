//* 난이도 및 풀이 시간
// start:
// end: 13:00
// 실제 난이도: lv3  체감 난이도:
//* 문제이해
// skill과 board가 주어질 때,
// skill은 회복or공격 여부, 공격범위(r1,c1 ~ r2,c2), 공격력 이주어진다.
// 모든 skill이후에 파괴되지 않은 건물의 수를 리턴

//* 아이디어
// skill을 반복하며, board의 값을 갱신하고, 최종적으로 확인한다.
//* 풀이방법(순서도, 절차적프로그래밍)
// 1.
// 2.
// 3.
//* 시간복잡도
// O()

//* 복습필요여부
//

function solution(board, skill) {
  skill.forEach((s) => {
    const [type, r1, c1, r2, c2, degree] = s;
    console.log(s);
    for (let row = r1; row <= r2; row++) {
      for (let col = c1; col <= c2; col++) {
        if (type === 1) {
          board[row][col] -= degree;
        } else {
          board[row][col] += degree;
        }
      }
    }
    console.log(board);
  });

  let cnt = 0;
  board.map((row) => {
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
