//* 난이도 및 풀이 시간
// start: 9:15
// end: 9:45
// 실제 난이도: Medium  체감 난이도: easy < < Medium
//* 문제이해
// 2d배열 주어짐. x시작- x끝은 주어지지만, y값은 알 수 없다,
// x값 범위안에만 맞추면, 연결된 풍선은 하 번에 터진다.

//* 아이디어
// O(N), NLog(N) 가능
// start의 오름차순으로 정렬 한다
// prev의 end값이 next의 start값 보다크다면 다음풍선 터트릴 수 있다. 단 prevEnd값은 현재end값과 터진end값 중 작은 값이 된다. (그래야 동시에 터트리기 가능)
// 작다면 현재 한 발 다시 쏘고(shoot++) prevEnd값을 현재 end값으로 바꾸어준다

//* 풀이방법(순서도, 절차적프로그래밍)
// 1.
// 2.
// 3.
//* 시간복잡도
// O(NlogN)
// 정렬 NlogN, 풍선터트리기 O(N)

//* 복습필요여부
// No

function solution(points) {
  points.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
  // console.log(points);
  let shoot = 1;
  let prevEnd = points[0][1];

  for (let i = 1; i < points.length; i++) {
    let [currStart, currEnd] = points[i];

    if (prevEnd >= currStart) {
      prevEnd = Math.min(prevEnd, currEnd);
      continue;
    } else {
      prevEnd = currEnd;
      shoot++;
    }
  }
  return shoot;
}

console.log(
  solution([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ])
); // 2
console.log(
  solution([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ])
); // 4
console.log(
  solution([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ])
); //2

console.log(
  solution([
    [9, 12],
    [1, 10],
    [4, 11],
    [8, 12],
    [3, 9],
    [6, 9],
    [6, 7],
  ])
); // 2
