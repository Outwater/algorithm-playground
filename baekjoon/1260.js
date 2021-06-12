function solution (input) {
  // const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
  input = input.toString().split('\n');
  const input2 = input.map((el) => el.split(' ').map((el2) => Number(el2)));
  const [constants, ...edges] = input2;
  const [N, K, start] = constants;

  // [0] 그래프 만들기  [[],[2,3,4] [4] ,[4]]
  const graph = new Array(N + 1);

  for (let i = 0; i < K; i++) {
    const [node, val] = edges[i];
    if (!graph[node]) {
      graph[node] = [];
    }
    if (!graph[val]) {
      graph[val] = [];
    }
    graph[node].push(val);
    graph[val].push(node);
  }
  graph.map((el) => el.sort());
  // [1] dfs by 재귀
  //   console.log(graph);
  const visited = [];
  function dfs (v) {
    visited.push(v);
    for (let i = 0; i < graph[v].length; i++) {
      if (!visited.includes(graph[v][i])) {
        dfs(graph[v][i]);
      }
    }
  }
  dfs(start);
  console.log(visited.join(' '));

  // [2] bfs by queue
  const visitedQ = [];
  function bfs (start) {
    const Q = [start];
    while (Q.length > 0) {
      const visit = Q.shift();
      if (visitedQ.includes(visit)) {
        continue;
      }
      visitedQ.push(visit);
      for (let i = 0; i < graph[visit].length; i++) {
        if (!visitedQ.includes(graph[visit][i])) {
          Q.push(graph[visit][i]);
        }
      }
    }
  }
  bfs(start);
  console.log(visitedQ.join(' '));
}

solution('4 5 1\n1 2\n1 3\n1 4\n2 4\n3 4');
solution('5 5 3\n5 4\n5 2\n1 2\n3 4\n3 1');
solution('1000 1 1000\n999 1000');
