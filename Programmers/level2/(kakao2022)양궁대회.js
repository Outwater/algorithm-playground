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
//* 아이디어
//  1)점수큰것 먹기
//  2) 어피치것 뺏어 먹기
// 3) 화살개수 차이 적은 것 부터 먹기

// value와 cost 각각 구해서 value / cost가 높은 순으로 선택하기
// value = 과녁점수 + 어피치있을 경우 점수
// cost = 어피치가 맞힌 화살개수 + 1
// [
//   [20, 3],6.xx,
//   18,2 , 9
//   16,2 , 8
//   14,2 , 7
//   6,1 , 6
//   5,1 , 5
//   4,1 , 4
//   3,1 , 3
//   2,1 , 2
//   1,1 , 1
//   0,1 , 0
// ]
// [
//   10, 1 , 10
//   9, 1, 9
//   16, 2 , 8
//   14, 3, 4.xx,
//   6, 1 , 6
//   10, 2 , 5
//   8, 2 , 4
//   6, 2, 3
//   4, 2, 2
//   2, 2, 1
//   0, 2, 0
// ]

//* 풀이방법(순서도, 절차적프로그래밍)
// 1. infos를 받아 score_list = [ [과녁점수, 조정점수, 라이언 화살수(cost), value(adj_score/cost) ], []] 만든다.
// 2. value가 높고, 같다면 점수가 낮은 것을 우선순위로 sort한다.
// 3. score_list를 순회하며, 라이언의 화살 개수를 모두 소진할 때 까지 점수를 구한다.
// 라이언의 최종점수가 어피치 점수보다 같거나 낮다면 -1 리턴
// 아니라면 scores 배열은 점수의 내림차순으로 sort하고, [cost]를 뽑아 리턴한다.

//* 시간복잡도
// O()

//* 복습필요여부
//

//* 1차시도 fail
// values를 기준으로 쏘기 시작할 경우 모든 케이스를 커버할 수 없다.
// ex) 10점의 value가 가장 높을 때, 10점을 쏘지 않는 케이스에서도 최적의 상황이 나올 수 있다.

function solution(n, info) {
  // 1. score_list 만들기
  const score_list = info.map((v, i) => {
    let target_score = 10 - i;
    let adj_score = v ? 2 * target_score : target_score;
    let cost = v + 1;
    let value = adj_score / cost;

    return [target_score, cost, value];
  });

  // 2. value 내림차순, 같은 경우 target점수 낮은 것이 우선순위 더 높도록
  score_list.sort((a, b) => {
    if (a[2] === b[2]) {
      return a[0] - b[0];
    }
    return b[2] - a[2];
  });

  console.log(score_list);
  // 3. 최적의 경우일 때, 점수계산
  let total_score_appeach = 0;
  let total_score_lion = 0;

  let result = Array.from({ length: 11 }, () => 0);
  let rest_cost = n;

  for (let i = 0; i < score_list.length; i++) {
    let [target_score, cost] = score_list[i];
    if (rest_cost >= cost) {
      result[10 - target_score] = cost;
      total_score_lion += target_score;
      rest_cost -= cost;
    } else if (cost > 1) {
      total_score_appeach += target_score;
    }
  }
  console.log(total_score_appeach, total_score_lion);
  //4. 화살 남은 경우 0점으로 처리
  if (rest_cost) result[10] = rest_cost;
  return total_score_appeach - total_score_lion >= 0 ? [-1] : result;
}

// console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0])); // [0,2,2,0,1,0,0,0,0,0,0]
// console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); // [-1]
// console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1])); // [1,1,2,0,1,2,2,0,0,0,0]
// console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3])); //	[1,1,1,1,1,1,1,1,0,0,2]
