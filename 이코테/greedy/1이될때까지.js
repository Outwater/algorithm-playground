//* 문제이해
// N이 2가지 방법을 통해 1이 될 떄까지의 연산횟수를 리턴
//* 아이디어
// 매 순간 나눠지면 나누고, 아니면 1을 빼는 것을 반복
// + 1을 매번 빼는 것보다, 한 번에 차이나는 만큼(나머지) 빼주고 횟수도 더해준다
//* 풀이방법(순서도, 절차적프로그래밍)
// 1. cnt변수, N이 1인지 판단
// 2. if(yes) -> cnt 리턴
// 3. if(no) -> K로 나누어지는가 확인
//      3.1 (yes) N = N / K, cnt++
//      3.2 (no) N = N - 나머지, cnt = cnt + 나머지
//* 시간복잡도
// O(N)
//* 난이도 및 풀이 시간
// start: 11:50 end: 12:05
// 실제 난이도:   체감 난이도:
//* 복습필요여부
// X

function solution(N, K) {
  let cnt = 0;
  while (N > 1) {
    let r = N % K;
    if (r === 0) {
      N = N / K;
      cnt += 1;
    } else {
      N = N - r;
      cnt += r;
    }
  }
  return cnt;
}

console.log(solution(25, 5)); // 2
console.log(solution(17, 4)); // 3
