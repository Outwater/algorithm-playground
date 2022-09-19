/*
문제이해

홀수라고 무조건 마지막에 써야되는 것 아니다.
diff 랑 마지막 남은 애랑 비교해야한다.

// 짝수케이스
// 홀수 케이스 나눠서 계산하기

공통
 1) abilities 내림차순 정리

 // 짝수케이스
 현재숫자와 다음숫자 같다면 우선권 사용x
 다르면 우선권 사용
1. 
*/
function solution(abilities, k) {
  let myTeam = [];
  abilities.sort((a, b) => b - a);

  let curIdx = 0;
  if (abilities.length % 2 === 0) {
    for (let round = 1; round <= abilities.length / 2; round++) {
      if (k > 0 && abilities[curIdx] !== abilities[curIdx + 1]) {
        k -= 1;
        myTeam.push(abilities[curIdx]);
        curIdx += 2;
      } else {
        myTeam.push(abilities[curIdx + 1]);
        curIdx += 2;
      }
    }
    console.log(myTeam);
  } else {
    for (let round = 1; round <= abilities.length / 2; round++) {
      const diff = abilities[curIdx] - abilities[curIdx + 1];
      if (k > 0 && diff > abilities[abilities.length - 1]) {
        // 차이가 제일 마지막것보다 크다면, 우선권 먼저 사용
        k -= 1;
        myTeam.push(abilities[curIdx]);
        curIdx += 2;
      } else {
        myTeam.push(abilities[curIdx + 1]);
        curIdx += 2;
      }
    }
    if (k > 0) {
      myTeam.push(abilities[curIdx]);
    }
  }

  return myTeam.reduce((acc, cur) => acc + cur);
}

console.log(solution([2, 8, 3, 6, 1, 9, 1, 9], 2)); // 21
console.log(solution([7, 6, 8, 9, 10], 1)); //	22
console.log(solution([10, 9, 8, 3, 1], 1)); // 17
console.log(solution([10, 9, 8, 7, 5, 1], 2)); // 22
