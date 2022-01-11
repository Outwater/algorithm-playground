//* 난이도 및 풀이 시간
// start: 10:10
// end:
// 실제 난이도: Medium  체감 난이도:
//* 문제이해
// 배열에서 3개의 숫자를 더해 0이 되는 숫자들을 리스트를 리턴
//* 아이디어
// 중복을 허락하지 않으므로, sort후 3중 for문 시도
//* 풀이방법(순서도, 절차적프로그래밍)
// 1.
// 2.
// 3.
//* 시간복잡도
// O()

//* 복습필요여부
//

function solution(nums) {
  if (nums.length <= 1) return [];
  let threeSumList = new Set();

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          // console.log(i, j, k);
          threeSumList.add(JSON.stringify([nums[i], nums[j], nums[k]]));
        }
      }
    }
  }

  return [...threeSumList].map((v) => JSON.parse(v));
}

console.log(solution([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(solution([])); // []
