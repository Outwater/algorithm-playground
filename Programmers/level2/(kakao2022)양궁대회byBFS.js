//* 난이도 및 풀이 시간
// start: 10:30
// end:
// 실제 난이도:  체감 난이도:
//* 문제이해
// 화살개수 n과 어피치가 쏜 점수배열 info 가 주어질 때, 라이언이 가장 큰 점수차로 이기기 위한 점수배열을 리턴(우승할 수 없는 경우 -1)

// 조건
// 1) 점수는 0 ~ 10점까지 존재
// 2) 점수계산
// 1. 어느누구도 못맞추면 k점 아무도 획득 x
// 2. k점을 같은 횟수로 맞추었다면 어피치가 +k점
// 3. 라이언이 어피치보다 더 많은 횟수를 맞추었다면 라이언 +k점
// 4. 최종점수로 우승자 선발, 단 최종점수 같다면 어피치가 우승자

// 3) 라이언이 가장 큰 점수 차이로 우승할 수 있는 방법이 여러 가지 일 경우,
// 가장 낮은 점수를 더 많이 맞힌 경우를 return 해주세요.
//  [2,3,1,0,0,0,0,1,3,0,0]과  선택 < [2,1,0,2,0,0,0,2,3,0,0] >
//* 1차시도 fail
// values를 기준으로 쏘기 시작할 경우 모든 케이스를 커버할 수 없다.
// ex) 10점의 value가 가장 높을 때, 10점을 쏘지 않는 케이스에서도 최적의 상황이 나올 수 있다.
//* 아이디어
// BFS를 통한 완전 탐색을 통해 해결시도
// 라이언이 쏠 수 있는 방법은, 어피치가 쏜 것보다 1발 많이 쏘거나, 어피치가 쏜 것은 아예 쏘지 않는 방법이다.

// dfs의 탈출조건
// 1) n보다 더 많은 화살을 쏘았을 때
// 2) 11개의 과녁판을 모두 체크하였을 때

// idx=0 부터 시작하여 idx=10일 때까지 진행하며, 각각의 경우에 따라 appeach와 lion의 점수를 올려준다.
// info[idx] > 0 는 lion(appeach보다 1발 더 쏘기) 혹은 appeach(쏘지않기)가 점수획득
// info[idx] = 0 이면, lion(1발쏘기) 혹은 아무도 점수획득하지 않는 경우(쏘지않기) 발생

// 모든과녀
//* 풀이방법(순서도, 절차적프로그래밍)

//* 시간복잡도
// O()

//* 복습필요여부
//

function solution(n, info) {
  let maxDiff = 0;
  let result = Array.from({ length: 11 }, () => 0);

  function getLowestShoots(cur, res) {
    for (let i = 0; i < 11; i++) {
      let curScore = cur[10 - i];
      let resultScore = res[10 - i];

      if (curScore === resultScore) continue;
      return curScore > resultScore ? cur : res;
    }

    return cur;
  }

  function dfs(
    sum_shoots_appeach,
    sum_shoots_lion,
    idx,
    shoot_cnt,
    rion_shoots
  ) {
    if (shoot_cnt > n) return;

    if (idx > 10) {
      rion_shoots[10] = n - shoot_cnt;

      let diff = sum_shoots_lion - sum_shoots_appeach;
      if (diff > maxDiff) {
        result = rion_shoots;
        maxDiff = diff;
      }
      if (diff === maxDiff) {
        result = getLowestShoots(rion_shoots, result);
      }
      return;
    }

    let rion_shoots_more_appeach = [...rion_shoots];
    rion_shoots_more_appeach[idx] = info[idx] + 1;
    let rion_shoots_no_shoot = [...rion_shoots];
    rion_shoots_no_shoot[idx] = 0;

    if (info[idx] > 0) {
      dfs(
        sum_shoots_appeach,
        sum_shoots_lion + 10 - idx,
        idx + 1,
        shoot_cnt + info[idx] + 1,
        rion_shoots_more_appeach
      );
      dfs(
        sum_shoots_appeach + 10 - idx,
        sum_shoots_lion,
        idx + 1,
        shoot_cnt,
        rion_shoots_no_shoot
      );
    }
    if (info[idx] === 0) {
      dfs(
        sum_shoots_appeach,
        sum_shoots_lion + 10 - idx,
        idx + 1,
        shoot_cnt + info[idx] + 1,
        rion_shoots_more_appeach
      );
      dfs(
        sum_shoots_appeach,
        sum_shoots_lion,
        idx + 1,
        shoot_cnt,
        rion_shoots_no_shoot
      );
    }
  }

  dfs(0, 0, 0, 0, result);
  if (maxDiff === 0) {
    return [-1];
  }
  return result;
}

// console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0])); // [0,2,2,0,1,0,0,0,0,0,0]
// console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); // [-1]
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1])); // [1,1,2,0,1,2,2,0,0,0,0]
// console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3])); //	[1,1,1,1,1,1,1,1,0,0,2]
