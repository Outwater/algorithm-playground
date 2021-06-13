function solution(input) {
  //   const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
  input = input.toString().split("\n");
  let [N, M] = input
    .shift()
    .split(" ")
    .map((el) => Number(el));
  let arr = input[0].split(" ").map((el) => Number(el));
  //시간복잡도
  // N 최대 100 이므로 N^3 = 1000000 백만이므로 충분
  // M을 넘지 않으면서 가장가까운 카드 합 3장

  // 1) 오름차순 정렬 ( 앞에 3개 더해서 최소값 k 출발)
  arr.sort((a, b) => a - b);
  // 2) max의 초기값으로 최소값주기
  let max = arr[0] + arr[1] + arr[2];

  // 3) 3중for문 돌면서 모든 경우 계산하기, 단 i == j == k 일때 제외 같은 수 사용x
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) {
        if (i === j || i === k || j === k) {
          continue;
        }
        let val = arr[i] + arr[j] + arr[k];
        if (val > max && val <= M) {
          max = val;
        }
      }
    }
  }
  console.log(max);
}
solution(`10 500
93 181 245 214 315 36 185 138 216 295`);
