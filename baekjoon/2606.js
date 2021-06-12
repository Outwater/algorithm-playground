function solution (input) {
  // 0) 입출력 받아오기
  // N(노드의 개수) K(간선의 개수) edges(간선연결을 [from, to]로 만들어 놓은 배열)
  //   const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
  input = input.toString().split('\n');
  const N = Number(input[0]);
  const K = Number(input[1]);
  const edges = input.slice(2).map((el) => el.split(' ').map((e) => Number(e)));

  // 1) 그래프 만들기 (new Array(N+1) 사용시 데이터 공유현상으로 데이터 추가시 모든 내부배열에 추가되는 오류 발생, 그냥 for문으로 만든다)
  // 1-1) 비어있는 그래프 생성 ( [ [],[],[], ..., [] ])
  const graph = [];
  for (let i = 0; i < N + 1; i++) {
    graph.push([]);
  }
  // 1-2) 배열의 idx를 노드로하고, value가 연결된 node들을 의미하도록 함.
  // [ [], [ 2, 5 ], [ 1, 3, 5 ], [ 2 ], [ 7 ], [ 1, 2, 6 ], [ 5 ], [7] ]
  for (let i = 0; i < K; i++) {
    const [from, to] = edges[i];
    graph[from].push(to);
    graph[to].push(from);
  }
  console.log(graph);

  // 2) dfs
  // 2-0) 방문을 표시할 배열 생성, 바이러스 수 cnt 체크
  const visited = [];
  let cnt = 0;
  function dfs (node) {
    // 2-1) 방문표시
    visited[node] = true;
    // 2-1) 해당 노드와 연결된 모든 간선들을 순회한다. 1번 노드 - [2, 5]
    for (let i = 0; i < graph[node].length; i++) {
      // 2-2) 만약에 방문한 적이 없는 노드이면 dfs 실시
      // next 는 다음 방문할 노드
      const next = graph[node][i];
      if (!visited[next]) {
        // 2-3 다음방문할 때 cnt++
        cnt++;
        dfs(next);
      }
    }
  }
  dfs(1);
  console.log(cnt);

  // 3) bfs
  function bfs (node) {
    // 3-0) bfs는 queue를 통해 진행한다.
    const queue = [node];
    const visitedQ = [];
    let Qcnt = 0;
    // 3-1) visitedQ 에 방문체크
    visitedQ[node] = true;

    while (queue.length > 0) {
      // 3-2) 현재 큐에서 하나를 뺀다.
      const current = queue.shift();
      // 3-3) 해당 큐에 연결된 노드들을 순회하며 방문하지 않았다면 큐에 넣는다.
      for (let i = 0; i < graph[current].length; i++) {
        const next = graph[current][i];
        if (!visitedQ[next]) {
          Qcnt++;
          queue.push(next);
          visitedQ[next] = true; // 3-4) next 방문처리 해주어야한다.
        }
      }
    }
    console.log(Qcnt);
  }
  bfs(1);
}

solution('7\n6\n1 2\n2 3\n1 5\n5 2\n5 6\n4 7');
