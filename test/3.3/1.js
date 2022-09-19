/* 
* `문제` 
  ‘출석, 지각, 결석’ 현황 리스트를 받아 출석점수의 오름차순으로 반환하는 문제
* `key`
  데이터 구조 변경 및 파싱 문제
* `소요시간` 
  30분
* `어려웠던 점`
  큰 어려움 없이 해결
  - 단, 2중 for문, 변수명이 직관적으로 떠오르지 않아 시간을 다소 소비함
* `수도코드`
1) 순회
2) 검사

2. 검사
2.1) A의 개수, L의 개수, P의 개수 세기
    2.1.1) 개수 세기 로직
2.2) Fail 검사
    1) P의 개수 >= 3개 이상 인지 검사
    2) P의 개수  + (L의 개수 /2)의 버림  >= 3 
2.3) 점수 검사
    10 + A의 개수 - ( P의 개수 + (L의개수/2)의 버림 )
*/
function solution(students) {
  const countList = students.map((s) => {
    let aCnt = 0;
    let pCnt = 0;
    let lCnt = 0;

    for (let i = 0; i <= s.length - 1; i++) {
      if (s[i] === "A") {
        aCnt += 1;
      } else if (s[i] === "P") {
        pCnt += 1;
      } else if (s[i] === "L") {
        lCnt += 1;
      }
    }

    return [aCnt, pCnt, lCnt];
  });

  const scoreList = countList.map((el, idx) => {
    const [aCnt, pCnt, lCnt] = el;
    if (pCnt >= 3) return [idx + 1, 0];
    if (pCnt + Math.floor(lCnt / 2) >= 3) return [idx + 1, 0];

    return [idx + 1, 10 + aCnt - (pCnt + Math.floor(lCnt / 2))];
  });

  return scoreList.sort((a, b) => b[1] - a[1]).map((el) => el[0]);
}

console.log(solution()); //
console.log(solution()); //
