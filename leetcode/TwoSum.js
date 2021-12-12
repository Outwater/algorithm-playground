// https://leetcode.com/problems/two-sum

function solution(nums, target) {
  // 완탐 -> 넘으면 패스
  // 1) 배열순회
  // 2) 내부에서 다음요소와 더하기 후 타겟과 비교
  // 2-1) 타겟과 같은 경우 (i,j)리턴

  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        answer = [i, j];
        return answer;
      }
    }
  }
  return answer;
}

console.log(solution([2, 7, 11, 15], 9)); // [0,1]
console.log(solution([3, 2, 4], 6)); // [1,2]
console.log(solution([3, 3], 6)); // [0,1]
