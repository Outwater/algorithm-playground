// 1210 - 13:12  -> 13:38(sol) -> 13:55(improve)
function solution(lottos, win_nums) {
  lottos.sort((a, b) => a - b);
  win_nums.sort((a, b) => a - b);

  let zeroCnt = 0;
  let interCnt = 0;

  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i])) interCnt++;
    if (lottos[i] === 0) zeroCnt++;
  }

  const calRank = (cnt) => {
    if (cnt <= 1) return 6;
    return 7 - cnt;
  };

  let answer = [calRank(interCnt + zeroCnt), calRank(interCnt)];
  return answer;
}
// (소요시간,시간복잡도, 체감난이도) = (26분, O(K) ,하)

// 0) lottos의 0 인 부분을 핸들링하여, 최대 일치 개수와 최소 일치 개수를 찾아 결과값을 리턴하는 문제
// 1) sort후, lottos의 zero의 개수와  win_nums와의 일치하는 개수를 찾는다.  [2,2]
//   1-1) zeroCnt, interCnt
//   1-3)  (interCnt + zeroCnt, interCnt)의 수로 최고,최저순위를 만든다. (4,2)
//   1-4) 각각의 경우를 순위값으로 매핑하여 출력한다.
//        (6->1, 5->2, 4->3, 3->4, 2->5, 1,0 -> 6)
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3,5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1,6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1,1]

//! 개선 포인트
//! 두 배열의 공통개수 및 특정 값을 찾는 방법(by arr.filter())
/*
lottos.filter((lotto) => win_nums.includes(lotto)).length;
lottos.filter((lotto) => lotto === 0).length;
*/

function improvedSolution(lottos, win_nums) {
  lottos.sort((a, b) => a - b);
  win_nums.sort((a, b) => a - b);

  let zeroCnt = lottos.filter((lotto) => lotto === 0).length;
  let interCnt = lottos.filter((lotto) => win_nums.includes(lotto)).length;

  const calRank = (cnt) => {
    if (cnt <= 1) return 6;
    return 7 - cnt;
  };

  let answer = [calRank(interCnt + zeroCnt), calRank(interCnt)];
  return answer;
}

console.log(improvedSolution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3,5]
console.log(improvedSolution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1,6]
console.log(improvedSolution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1,1]
