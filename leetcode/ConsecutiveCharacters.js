// [리트코드 Consecutive Characters](https://leetcode.com/problems/consecutive-characters/
// 10:30 -> 10:40(solve) -> 10:50(adv)
var maxPower = function (s) {
  // s.length <= 500 이기 때문에, 완전탐색진행가능, O(N)
  // 연속되는 가장 긴 문자열의 길이를 리턴하는 문제

  // 1) s순회, cnt, max 변수
  // 2-1) 현재요소와 이전요소 일치하면 cnt++, max값 update
  // 2-2) 불일치시 cnt 초기화

  let cnt = 1;
  let max = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      cnt++;
      max = Math.max(max, cnt);
    } else {
      cnt = 1;
    }
  }
  return max;
};
