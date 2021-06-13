function solution(input) {
  //접근 (시간초과로 더 효율적코드로 접근)
  // 가지고 있는 동전 중 가장 큰 수를 계속 빼면서 cnt를 올리는 방법으로 접근
  // 1) for문 순회하며 가장 큰 코인 찾기 (큰 수부터 내려오도록 한다.)
  // 1-1) 나눌 수 있는 가장 큰 코인보다 크다면(coins[i] > K) continue
  // 1-2) 현재 금액보다 큰 coins[i]에 도착하면 K/coins[i]의 몫을 구한다. ( 4290 / 1000 -> 4)
  // 1-3) 몫 만큼 cnt를 올려준다. (cnt -> 4)
  // 1-4) K는 몫으로 나눠준 나머지이다.  (k = 4290 -> 290)
  // 1-5) K === 0 일 때 코인순회를 멈추어준다.

  // 0)입출력
  // const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
  input = input.toString().split("\n");
  let [N, K] = input
    .shift()
    .split(" ")
    .map((el) => Number(el));
  let coins = input.map((el) => Number(el));

  let cnt = 0;

  for (let i = N - 1; i >= 0; i--) {
    let q = Math.floor(K / coins[i]); //몫
    //2-1) 코인(coins[i])가 K보다 클 때는 통과
    if (q === 0) {
      continue;
    }
    cnt += q;
    K %= coins[i];
    if (K === 0) {
      break;
    }
  }

  console.log(cnt);
}
solution(`10 4790
1
5
10
50
100
500
1000
5000
10000
50000`);

/* 1차풀이 시간초과
function solution(input) {
  //접근 
  // 가지고 있는 동전 중 가장 큰 수를 계속 빼면서 cnt를 올리는 방법으로 접근
  // 1) for문 순회하며 가장 큰 코인 찾기
  // 1-1) 현재 금액보다 큰 coins[i]에 도착한 후, coins[i-1] 번째를 빼주고 cnt를 올리도록 한다.
  
  // 2) while 반복 
  //  2-1) while문으로 남은 금액이 0이 될 때까지 1) 반복
 
  // 0)입출력
  // const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
  input = input.toString().split("\n");
  let [N, K] = input
    .shift()
    .split(" ")
    .map((el) => Number(el));
  let coins = input.map((el) => Number(el));

  let cnt = 0;

  while (K !== 0) { // 현재금액이 0 될때까지 반복
    for (let i = 0; i < N; i++) {
      if (K < coins[i]) { // 가장 큰 코인(coins[i-1]) 찾기
        K -= coins[i - 1]; // 가장 큰 코인 현재금액에서 빼고 cnt++
        cnt++;
        break;
      }
    }
  }

  console.log(cnt);
}
solution(`10 4790
1
5
10
50
100
500
1000
5000
10000
50000`);

*/
