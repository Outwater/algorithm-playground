//* 난이도 및 풀이 시간
// start: 11:00
// end:
// 실제 난이도:  체감 난이도:
//* 문제이해
//
//* 아이디어
//
//* 풀이방법(순서도, 절차적프로그래밍)
// 1.
// 2.
// 3.
//* 시간복잡도
// O()

//* 복습필요여부
//

//* painPoint
// 1. 각도에 따라서 4번 해주어야하고, 모든 이동을 반영하고, 결과가 옳은 지 검토하는 전체 프로세스는 잘 생각함.
// But 이동을 반영하는 부분을 생각하지 못했고, 기본적으로 2차원 배열 빠르게 만들고, copy_board만들어 활용하는 부분 미숙하였다.

// 2. 마지막에 N,M이 다를경우가 있는데, N으로만 전부 사용하여서 일부케이스 런타임 오류 발생함
// copy_board에 key값을 더해주는 부분은 N이 아니라 M만큼 반복해주어야함

// false일 때는 key와 lock의 요소를 더했을 때, lock의 범위가 모두 1일 때, 2가넘는 요소가 있을 때이다.
function solution(key, lock) {
  console.log(lock);
  let N = lock.length;
  let board = Array.from(Array(3 * N), () => Array(3 * N).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      board[N + i][N + j] = lock[i][j];
    }
  }
  // console.log(board);

  let isOpen = false;
  let rotateKey = key;
  for (let i = 0; i < 4; i++) {
    rotateKey = rotate(rotateKey);

    for (let r = 0; r <= 2 * N; r++) {
      for (let c = 0; c <= 2 * N; c++) {
        let copy_board = JSON.parse(JSON.stringify(board));
        for (let i = 0; i < N; i++) {
          for (let j = 0; j < N; j++) {
            copy_board[i + r][j + c] += rotateKey[i][j];
          }
        }
        let isAnswer = isCorrect(copy_board, N);
        if (isAnswer) return true;
      }
    }
  }
  function rotate(arr) {
    let n = arr.length;
    let newKey = Array.from(Array(n), () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        newKey[j][n - i - 1] = arr[i][j];
      }
    }
    return newKey;
  }

  function isCorrect(copyBoard, n) {
    let isKey = true;

    let sliceBoard = copyBoard.map((el) => el.slice(n, 2 * n)).slice(n, 2 * n);
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        if (sliceBoard[r][c] !== 1) {
          isKey = false;
        }
      }
    }
    console.log(isKey);
    return isKey;
  }

  return isOpen;
}
console.log(
  solution(
    [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ]
  )
); //
