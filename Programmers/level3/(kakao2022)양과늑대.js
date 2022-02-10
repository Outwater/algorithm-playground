//* 난이도 및 풀이 시간
// start:
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

function solution(info, edges) {
  let max = 0;
  const visited = Array.from({ length: info.length }, () => false);
  function go(prevIdx, currentIdx, sheep, wolf, visitedList) {
    visitedList.push(currentIdx);
    if (!visited[currentIdx]) {
      visited[currentIdx] = true;
      info[currentIdx] ? wolf++ : sheep++;
    }
    console.log(prevIdx, currentIdx, sheep, wolf, visited);

    if (wolf >= sheep) {
      max = Math.max(max, sheep);
      visitedList.forEach((e) => (visited[e] = false));
      console.log("die");
      return;
    }
    if (!info[currentIdx] && currentIdx !== 0) {
      const target = edges.find((e) => e[1] === currentIdx);
      if (!target) return;
      const parentIdx = target && target[0];
      go(currentIdx, parentIdx, sheep, wolf, visitedList);
    }
    const getUnVisitedNodes = (currentIdx) => {
      return edges.filter((e) => e[0] === currentIdx);
      // .filter((e) => !visited[e[1]]);
    };
    const unVisitedNodes = getUnVisitedNodes(currentIdx);
    console.log("unNodes", unVisitedNodes);

    unVisitedNodes.forEach((node) => {
      let nextIdx = node[1];
      if (info[nextIdx]) {
        return go(currentIdx, nextIdx, sheep, wolf, visitedList);
      } else {
        return go(currentIdx, nextIdx, sheep, wolf, visitedList);
      }
    });

    if (unVisitedNodes.length === 0) {
      const target = edges.find((e) => e[1] === currentIdx);
      if (!target) {
        max = Math.max(max, sheep);
        return;
      }
      const parentIdx = target && target[0];
      return go(currentIdx, parentIdx, sheep, wolf, visitedList);
    }
  }
  go(0, 0, 0, 0, []);
  return max;
}

console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ]
  )
); // 5
// console.log(
//   solution(
//     [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
//     [
//       [0, 1],
//       [0, 2],
//       [1, 3],
//       [1, 4],
//       [2, 5],
//       [2, 6],
//       [3, 7],
//       [4, 8],
//       [6, 9],
//       [9, 10],
//     ]
//   )
// ); //5
