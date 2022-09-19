/*
완전탐색으로 가능한 모든 방법의 수수료 구하기 => 최저 리턴

1) 요금 배열 만들기

2) 최단 경로 배열 만들기

*/
function solution(N, fees, dest) {
  //* 요금에 대한 가중치 그래프 그리기
  const feeMatrix = Array.from({ length: N }, () => Array(N).fill(99999));
  fees.forEach((fee) => {
    const [from, to, cost] = fee;
    feeMatrix[from - 1][to - 1] = cost;
    feeMatrix[to - 1][from - 1] = cost;
  });

  console.log(feeMatrix);
  //* 방문처리를 위한 배열 선언
  const isVisit = new Array(N).fill(false);

  //* 시작노드인 1번 방문하기
  visit(1);

  //* 현재 방문하지 않은 경로 중, 최소 비용의 노드에 해당하는 idx 구하기
  function getMin(vertex) {
    // vertex ===  현재 vertex에서 갈 수 있는 요금표
    let min = 99999;
    let idx = 0;
    for (let i = 0; i < vertex.length; i++) {
      if (min > vertex[i] && !isVisit[i]) {
        min = vertex[i];
        idx = i;
      }
    }
    // console.log(idx);
    return idx;
  }
  function visit(start) {
    let v = feeMatrix[start - 1]; // 현재 vertex에서 갈 수 있는 요금표
    let visitCnt = 0;
    let end = v.length;
    let min = 0;
    let startV = v;

    isVisit[start - 1] = true;

    while (visitCnt < end) {
      const idx = getMin(startV);
      min += startV[idx]; // 해당 idx로 이동하므로 요금 추가
      const next = feeMatrix[idx]; // 다음 vertex의 요금표 불러오기

      for (let i = 0; i < v.length; i++) {
        if (v[i] > next[i] + min && !isVisit[i]) {
          // 아직 방문하지 않은 vertex 중, 거쳐서 방문한 것이 더 싸다면 교체
          console.log("v[i]:", v[i], "next", next[i], min);
          v[i] = next[i] + min;
        }
      }
      startV = feeMatrix[idx];
      isVisit[idx] = true;
      visitCnt++;
    }
    console.log(v);
    return v[dest - 1];
  }
}

console.log(
  solution(
    5,
    [
      [1, 2, 1000],
      [1, 5, 2000],
      [2, 3, 3000],
      [2, 4, 1500],
      [3, 4, 1000],
      [4, 5, 2000],
    ],
    3
  )
);

// console.log(
//   solution(
//     6,
//     [
//       [1, 2, 1000],
//       [1, 5, 2000],
//       [2, 3, 3000],
//       [2, 4, 1500],
//       [3, 4, 1000],
//       [4, 5, 2000],
//       [3, 6, 500],
//       [4, 6, 1000],
//     ],
//     6
//   )
// );
