/* 
* 문제 타입

* 난이도 및 풀이 시간
start-end: 30분소요
체감 난이도:lv1.5
* 문제이해
- beds, tables, costs가 주어질 때 최소 총예산 값을 리턴

* 아이디어
- 모든 경우의 예산을 구하고, 최소 예산 값을 리턴한다.
- bed와 table을 배치할 수 있는 최소면적을 구하는 것이 key point

- 배치가능한 면적은 다음 4가지 경우 중 1개
 - 이중 최소 값을 선택 (Math.min(...))
[x1,y1] [x2,y2]
[x1,x2 의 최대값] * [y1 + y2]

[x1,y1] [y2,x2]
[x1, y2의 최대값] * [y1 + x2]

[y1,x1] [x2,y2]
[y1,x2 의 최대값] * [x1 + y2]

[y1,x1] [y2, x2]
[y1,y2의 최대값] * [x1 +x2]

* 풀이방법(순서도, 절차적프로그래밍)
1. beds와 tables를 이중으로 순회하여 모든 케이스 탐색
2. 배치가능한 4가지 면적 중 최소 면적 구하기
3. total_cost 계산하고, min_cost와 비교하여 최소값 갱신

* 시간복잡도
O()

* 복습필요여부

*/
function solution(beds, tables, cost) {
  let min_cost = Number.MAX_SAFE_INTEGER;

  beds.forEach((bed) => {
    tables.forEach((table) => {
      const [bx, by, b_cost] = bed;
      const [tx, ty, t_cost] = table;

      const min_width = Math.min(
        Math.max(bx, tx) * (by + ty),
        Math.max(bx, ty) * (by + tx),
        Math.max(by, tx) * (bx + ty),
        Math.max(by, ty) * (bx + tx)
      );

      let total_cost = b_cost + t_cost + min_width * cost;
      min_cost = Math.min(min_cost, total_cost);
    });
  });
  return min_cost;
}

console.log(solution([[4, 1, 200000]], [[2, 3, 100000]], 10000)); //	420000
console.log(
  solution(
    [
      [2, 3, 40],
      [2, 5, 20],
    ],
    [[1, 1, 30]],
    10000
  )
); //80070
console.log(
  solution(
    [
      [2, 3, 40000],
      [2, 5, 20000],
    ],
    [[1, 1, 30000]],
    10
  )
); //	50120
