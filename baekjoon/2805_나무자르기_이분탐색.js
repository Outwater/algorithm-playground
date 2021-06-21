function solution(input) {
  // let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  input = input.toString().split("\n");
  let input1 = input.shift().split(" ");
  let [N, M] = input1.map((el) => Number(el));
  let trees = input
    .shift()
    .split(" ")
    .map((el) => Number(el));

  //시간복잡도 (백만이기때문에 matrix 아니고 배열로 풀어야함)
  //2^30  = 10억이므로 바이너리 30번만 하면 커버가능,
  // 나무의 수가(N) 백만이므로 최대 계산횟수는 30* 백만으로 충분히 계산가능하다.

  // 접근 이분탐색으로 진행
  // N => tree의 수
  // M => 목표 tree합 의 수
  // 1) left < right 까지 반복
  // 2) accTree ()
  let left = 0;
  let right = Math.max(...trees);
  let ans = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // 자른 나무 합 구하기(accTree)
    let accTree = trees.reduce((acc, cur) => {
      if (cur > mid) {
        acc = acc + (cur - mid);
      }
      return acc;
    }, 0);

    // 자른나무와 목표나무와 비교 (accTree, M)
    if (accTree < M) {
      right = mid - 1;
    } else {
      left = mid + 1;
      ans = mid;
    }
  }
  console.log(ans);
}
// solution(`4 7
// 20 15 10 17`);
// console.log(accTree);
// console.log([left, right, mid, accTree]);
solution(`5 20
4 42 40 26 46`);
