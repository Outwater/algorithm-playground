//* 난이도 및 풀이 시간
// 실제 난이도: lv3 체감 난이도: lv3
//* 문제이해
//
//* 아이디어
//  a만큼의 배열을 새로 만든다.
// 해당 idx를 기준으로 왼쪽의 가장 작은 값을 모아두는 minL과 ... minR 만들기
//* 풀이방법(순서도, 절차적프로그래밍)
// 1. idx기준으로, 왼쪽,오른쪽으로 가장 작은 값들을 저장하는 leftMin, rightMin 배열만들기
// 2. a를 순회하며, a[i] 가 leftMin[i], rightMin[i] 보다 하나라도 작은 값이 존재하면 cnt++
// 3. cnt 리턴
//* 시간복잡도
// O(N)

//* 복습필요여부
// No

function solution(a) {
  // a를 순회하며, minL과 minR 보다 작은 값이라면 cnt++
  let cnt = 0;
  let minL = a[0];
  let minR = a[a.length - 1];
  let leftMin = a.map((el) => {
    if (el < minL) minL = el;
    return minL;
  });
  let rightMin = a
    .map((el, idx) => {
      if (a[a.length - 1 - idx] < minR) {
        minR = a[a.length - 1 - idx];
      }
      return minR;
    })
    .reverse();

  for (let i = 0; i < a.length; i++) {
    if (a[i] <= leftMin[i] || a[i] <= rightMin[i]) {
      // console.log(leftMin[i],a[i],rightMin[i])
      cnt++;
    }
  }

  return cnt;
}
console.log(solution([-16, 27, 65, -2, 58, -92, -71, -68, -61, -33])); //6
