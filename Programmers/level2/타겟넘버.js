//* 난이도 및 풀이 시간
// start:11:30
// end:12:00
// 실제 난이도: lv2 체감 난이도: lv2
//* 문제이해
// numbers 배열과 target숫자가 주어질 때, 각 수를 +,-만하여 target에 도달하는 경우의수
//* 아이디어
// 트리구조로 생각할 때, +=numbers[i]가 매 depth마다 존재하는 것으로 생각할 수 있다.
//* 풀이방법(순서도, 절차적프로그래밍)
// 1. dfs로 전체 트리를 순회하며, depth === numbers.length 일 때 sum이 target을 만족하는 경우의 수를 구한다.
// 2.
// 3.
//* 시간복잡도
// O()

//* 복습필요여부
// NO
function solution(numbers, target) {
  // 선택은 +1, -1 , 단계는 numbers.length 만큼 가야함, 완성된 결과 중 답이 3이면 cnt++

  let cnt = 0;
  let goal = numbers.length;

  function dfs(depth, sum) {
    if (depth === goal) {
      if (sum === target) {
        cnt++;
      }
      return;
    }
    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum - numbers[depth]);
  }

  dfs(0, 0);
  return cnt;
}
console.log(solution([1, 1, 1, 1, 1], 3)); // 5
