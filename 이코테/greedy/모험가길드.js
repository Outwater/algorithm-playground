//* 문제이해
// 각각의 공포도 조건을 만족하는, 최대의 그룹수를 리턴
//* 아이디어
// 오름차순 정렬하고, 차례대로 묶는 것을 진행한다. 1,2,2,2,3 -> 1, (2,2), (2,3)x-> 2
//* 풀이방법(순서도, 절차적프로그래밍)
// 0. 변수 (남은 사람 r, 현재사람공포수, cnt)
// 1. 내림차순 정렬
// 2. 현재 그룹 마지막 사람공포수 > r 중단
// 3. ..
//* 시간복잡도
// O()
//* 난이도 및 풀이 시간
// start: 12:10 end: 12:55
// 실제 난이도:하   체감 난이도: 중
//* 복습필요여부
// O

function solution(ads) {
  ads.sort((a, b) => a - b);
  let groupCnt = 0;
  let cnt = 0;

  for (let i = 0; i < ads.length; i++) {
    cnt++;
    if (cnt >= ads[i]) {
      groupCnt++;
      cnt = 0;
    }
  }
  return groupCnt;
}

console.log(solution([2, 3, 1, 2, 2])); // 2
console.log(solution([3, 1, 2, 2])); // 2
console.log(solution([2, 2, 1])); // 2
console.log(solution([1, 1, 1, 1, 1])); //5
