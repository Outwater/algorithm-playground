/*
//* 아이디어
: 현재 노드에서 갈 수 있는 노드들의 집합을 구한다.

: 갈 수 있는 노드들을 전부 방문한다.
//* 문제풀이
0. max 변수로 최대 양의개수 관리
1. 연결리스트 만들기
[ [1,2], [3,4], [5,6], [7], [8], ...]

2. 0번 부터 dfs출발

3. dfs(현재노드, 양의개수, 늑대의개수, 갈 수 있는 노드집합)
   1. 탈출조건
    1) 양의개수 = 늑대의 개수
   2. todo
    1) 현재노드에 따라 양의개수, 늑대의 개수 추가
    2). 자식노드를 찾아서, 현재 갈 수 있는 노드집합에 추가
    3) 갈 수 있는 노드집합 순회하며 dfs()

*/

function solution(info, edges) {
  let max = 0;

  let linkedList = Array.from({ length: info.length }, () => []);
  edges.forEach((e) => {
    let [from, to] = e;
    linkedList[from].push(to);
  });

  function go(currentNode, sheep, wolf, possibleNodes) {
    info[currentNode] === 0 ? sheep++ : wolf++;
    if (sheep <= wolf) {
      max = Math.max(max, sheep);
      return;
    }
    max = Math.max(max, sheep);

    let new_possibleNodes = [...possibleNodes, ...linkedList[currentNode]];
    let index = new_possibleNodes.indexOf(currentNode);
    index !== -1 && new_possibleNodes.splice(index, 1);

    new_possibleNodes.forEach((node) => {
      go(node, sheep, wolf, new_possibleNodes);
    });
  }

  go(0, 0, 0, []);
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
