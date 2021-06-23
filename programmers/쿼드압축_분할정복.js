function solution(arr) {
  //* *접근
  // 분할 정복(재귀)의 방식으로 푼다.
  // 배열의 모든 수가 0, 1이 될 때까지 자르기를 시도한다.
  // 입력배열의 모든 요소가 0, 1 이 될 때 각각 zeroCnt, oneCnt를 올리고 재귀함수 종료한다.

  // 1) 재귀함수는 이중2차원배열(arr)을 받아서 모든 arr의 값을 더하고(sumVal), ex[[1,1], [1,0]] 받는다면 sumVal = 3
  //  탈출조건
  //  2-1) sumVal 이 arr.length의 제곱이라면 모두 1이므로 oneCnt++ ex)[[1,1],[1,1]] 이라면 sumVal = 4, arr.length의 제곱은 = 2 * 2 = 4
  //  2-2) sumVal 이 0 이라면 모두 0 이므로 zeroCnt++    ex) [[0,0], [0,0]] 이라면 sumVal = 0

  //* * 그 외 재귀함수 실행
  //  3) 배열을 4등분 하여 각각 재귀함수를 실행하도록 한다. (배열모두가 1또는 0인 상태가 될 때 까지)
  // aux(A), aux(B), aux(C), aux(D)   A B C D 는 각각 좌상단, 우상단, 좌하단, 우하단 을 의미한다.

  // 4) 최종적으로 [zeroCnt, oneCnt] 를 리턴한다. **//

  let zeroCnt = 0;
  let oneCnt = 0;

  function aux(arr) {
    // 1) arr 모든 수 더하기
    const sumVal = arr
      .map((el) => el.reduce((acc, cur) => acc + cur))
      .reduce((acc, cur) => acc + cur);
    // console.log(sumVal)

    // 2-1) 모두 더했을 때 arr.length ^2 이라면 모두1이므로 oneCnt ++
    if (sumVal === arr.length ** 2) {
      oneCnt++;
      return;
    }
    // 2-2) 모두 더했을 때 0이라면 모두0이므로 zeroCnt++
    if (sumVal === 0) {
      zeroCnt++;
      return;
    }

    // 2-3)아니면 divided
    const n = arr.length;
    const AB = arr.slice(0, n / 2); // matrix(그림)에서 상단 의미
    const CD = arr.slice(n / 2); // matrix 하단 의미
    const A = AB.map((el) => el.slice(0, el.length / 2)); // 좌상단
    const B = AB.map((el) => el.slice(el.length / 2)); // 우상단
    const C = CD.map((el) => el.slice(0, el.length / 2)); // 좌하단
    const D = CD.map((el) => el.slice(el.length / 2)); // 우하단
    aux(A);
    aux(B);
    aux(C);
    aux(D);
  }

  aux(arr);
  return [zeroCnt, oneCnt];
}
console.log(
  solution([
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ])
); //[4,9]
