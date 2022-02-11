//* 정말 깔끔한 DFS [](https://eunchanee.tistory.com/628)

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
// Yes

function solution(info, edges) {
  let max = 0;
  const length = info.length;
  const graph = Array.from({ length }, () => []);
  edges.forEach((node) => {
    const [from, to] = node;
    graph[from].push(to);
  });

  go([0, 0, 0], [0]);
  function go(current, nextNodes) {
    let [currentNode, sheep, wolf] = current;
    const nextNewNodes = [...nextNodes]; // 방문할 수 있는 node들
    const index = nextNewNodes.indexOf(currentNode); // 방문했던 노드 제거 위해

    info[currentNode] ? wolf++ : sheep++;
    max = Math.max(max, sheep);

    if (wolf >= sheep) {
      console.log(currentNode, "die");
      return;
    }
    // 현재 노드의 자식들을 방문할노드에 추가
    if (graph[currentNode].length) {
      nextNewNodes.push(...graph[currentNode]);
    }

    // 현재노드는 방문할 노드에서 제거
    nextNewNodes.splice(index, 1);
    // console.log([currentNode, sheep, wolf], nextNewNodes);
    for (let i = 0; i < nextNewNodes.length; i++) {
      go([nextNewNodes[i], sheep, wolf], nextNewNodes);
    }
  }

  go([0, 0, 0], []);
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
console.log(
  solution(
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 7],
      [4, 8],
      [6, 9],
      [9, 10],
    ]
  )
); //5
