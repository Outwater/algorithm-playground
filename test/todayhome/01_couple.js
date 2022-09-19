/* 
* 문제 타입

* 난이도 및 풀이 시간
start: 14:00
end: 15:07
실제 난이도: lv2  체감 난이도:
all solved
* 문제이해
- a,b,c,d의 상대가 담겨있는 rounds 가 주어질 때, 참가자들이 규칙을 총 몇번 어겼는지 리턴

커플규칙
1. "서로가 서로를 지목"할 경우 커플
2. 두명 중 한 명이라도 "규칙을 어겼을 경우"에 커플이 될 수 없음 (해당 라운드에만)

어기는 조건
1. 직전 라운드에서 자신과 커플되었던 사람 지목
2. 자기 자신 지목시


* 아이디어
-  규칙어긴사람 먼저 > 커플만들기

- 커플리스트 = ["b" , "a", null, null] 관리 (이전판의 커플 된 것)

* 풀이방법(순서도, 절차적프로그래밍)
1.
2.
3.
* 시간복잡도
O()

* 복습필요여부

*/
function getIdx(name) {
  return ["a", "b", "c", "d"].indexOf(name);
}
const reset_couple = () => new Array(4);

function solution(rounds) {
  const people = ["a", "b", "c", "d"];
  let count = 0;
  let couple = reset_couple(); // [b,a,null,null]

  rounds.forEach((round) => {
    const breaker = []; // a
    round.forEach((target, idx) => {
      // people[idx]: 이번라운드에 찍은 사람
      // target: 이번라운드에 찍음 당한 사람
      // couple[idx]: 이전라운드에 현재 사람과 커플 된 사람

      // 1.직전커플 지목 체크 or 자기자신 지목 체크
      if (target === couple[idx] || target === people[idx]) {
        count += 1;
        breaker.push(people[idx]);
      }
    });
    couple = reset_couple();

    // 2. 커플형성하기 (breaker 없을경우만)
    round.forEach((target, idx, round) => {
      // round[getIdx(target)] : 내가 찍은 사람이 찍은 사람
      let target_pick = round[getIdx(target)];

      // 내가찍은사람의 픽 === 나 (커플)
      if (target_pick === people[idx]) {
        // 단 내가 룰브레이커가 아니여야함
        if (!breaker.includes(people[idx])) {
          couple[idx] = target;
          couple[getIdx(target)] = people[idx];
        }
      }
    });
  });
  return count;
}

console.log(
  solution([
    ["b", "a", "a", "d"],
    ["b", "c", "a", "c"],
    ["b", "a", "d", "c"],
  ])
); //2
console.log(
  solution([
    ["b", "a", "d", "c"],
    ["b", "a", "c", "d"],
  ])
); // 4

console.log(
  solution([
    ["b", "a", "d", "c"],
    ["d", "c", "b", "a"],
    ["b", "a", "d", "c"],
  ])
); // 0

console.log(
  solution([
    ["d", "a", "a", "a"],
    ["c", "a", "a", "a"],
    ["b", "a", "a", "a"],
  ])
); // 2
