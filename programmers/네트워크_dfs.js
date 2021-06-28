function solution(n, computers) {
  // 접근
  // : 인접행렬이 주어졌으므로, 그래프 탐색하며 dfs로 풀이
  // 풀이방법
  // : 몇 덩이로 이루어졌나 알아야하므로, 0번 노드부터 dfs탐색을 진행하되, 방문한 노드는 조사히지 않는다.
  // 0) 변수선언
  // cnt (총 네트워크의 수)
  // visited (방문한 노드 체크)  ex) [F,F,F]

  // 2) 외부?코드 (전역실행함수)
  // : computer의 노드들을 순회하며, 방문하지 않은 노드들에 대하여 dfs체크를 진행하고,
  //   dfs체크 완료 후 cnt를 증가시킨다.

  // 1) dfs함수
  // : 연결된 노드 끝까지 탐색하며 visited 여부 갱신한다

  // 0) 변수선언
  let cnt = 0;
  let visited = new Array(computers.length).fill(false);

  // 1) dfs 체크 함수
  function dfs(idx) {
    visited[idx] = true;
    console.log(visited);
    for (let i = 0; i < computers[idx].length; i++) {
      if (computers[idx][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }

  // 2) 전역실행함수

  for (let i = 0; i < computers.length; i++) {
    if (!visited[i]) {
      dfs(i);
      console.log("cnt증가합니다" + cnt + "->" + (cnt + 1));
      cnt++;
    }
  }
  return cnt;
}
