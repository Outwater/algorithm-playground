/*
문제이해:
점수 룰
  1.각 점수를 더 많이 맞춘 사람이 해당 점수를 가져간다.
  2. 동점의 경우: Appeach
  3. 둘 다 못맞춘 경우: 그 누구도 x

최종점수가 높은 사람이 우승자
  - 단 점수가 같으면 어피치의 승리

쏘아야하는 화살 수와, 어피치가 각 점수에 쏜 화살의 개수가 담긴 info가 주어질 때,
라이언이 가장 큰 점수차로 이기기 위해 어떤 점수를 쏘아야하는지 화살개수리스트를 리턴하라
 - 단, 무조건 비거나 지는 경우는 [-1] 리턴

 //* 아이디어
 어피치의 점수는 알 수 가 있다.
 각 점수에서 라이언이 쏠 수 있는 경우의 수
 1.어피치의 화살보다 1개 더 쏜다.
 2.아예 쏘지 않는다.
 - 화살이 남았다면 0점에 다 쏜다.

 by DFS
 라이언점수, 어피치점수, 어피치 정보

 dfs(현재idx, 현재까지 쏜 화살 수, 현재 라이언화살정보, 라이언점수,)

 탈출조건
  1. 점수 판 끝까지 도달했을 때 (idx === 11)
  2. 라이언이 화살을 다 쏘았을 때 (현재 쏜 화살 수 > n)
*/

const utils = {
  getLionAndAppeachScore: (lion, appeach) => {
    let lion_score = 0;
    let appeach_score = 0;
    for (let i = 0; i <= 10; i++) {
      let score = 10 - i;
      if (lion[i] === 0 && appeach[i] === 0) continue;

      if (lion[i] > appeach[i]) {
        lion_score += score;
      } else {
        appeach_score += score;
      }
    }

    return [lion_score, appeach_score];
  },
  getLowestShoots: (cur, res) => {
    for (let i = 0; i < 11; i++) {
      let curScore = cur[10 - i];
      let resultScore = res[10 - i];

      if (curScore === resultScore) continue;
      return curScore > resultScore ? cur : res;
    }

    return cur;
  },
};
function solution(n, info) {
  let maxDiff = 0;
  let result = Array.from({ length: 11 }, () => 0);

  function shoot(idx, arrow_cnt, lion_info) {
    if (arrow_cnt > n) return;

    let new_lion_info = [...lion_info];

    if (idx > 10) {
      new_lion_info[10] = n - arrow_cnt;

      let diff =
        utils.getLionAndAppeachScore(new_lion_info, info)[0] -
        utils.getLionAndAppeachScore(new_lion_info, info)[1];

      if (diff > maxDiff) {
        maxDiff = diff;
        result = new_lion_info;
      }
      if (diff === maxDiff) {
        result = utils.getLowestShoots(new_lion_info, result);
      }
      return;
    }
    new_lion_info[idx] = info[idx] + 1;
    shoot(idx + 1, arrow_cnt + info[idx] + 1, new_lion_info);
    shoot(idx + 1, arrow_cnt, lion_info);
  }

  shoot(0, 0, result);
  if (maxDiff <= 0) return [-1];
  return result;
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0])); // 	[0,2,2,0,1,0,0,0,0,0,0]
console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); // [-1]
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1])); //	[1,1,2,0,1,2,2,0,0,0,0]
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3])); //	[1,1,1,1,1,1,1,1,0,0,2]
