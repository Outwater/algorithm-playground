/*
 *핵심로직
 * 1) pattern을 배열에 담고,
 * 2) pattern 문자열 수 만큼 순회하여,
 *    pattern에 해당하는 문자열 발견 시, 지워준다.
 * 3) pattern의 길이가 0이라면 pattern에 해당하는 문자를 모두 가진 것이므로 악성코드 발견처리
 */
function solution(S, pattern) {
  let cnt = 0;
  let candidate = [];

  //* 1. 탐색 가능한 모든 문자열 차례대로 순회
  for (let i = 0; i <= S.length - pattern.length; i++) {
    let pList = pattern.split(""); // 1) 패턴 문자열로 담기
    candidate = S.slice(i, i + pattern.length).split("");

    // 2.1) 후보자 순회하며, pattern 문자열 지워나가기
    candidate.forEach((el) => {
      if (pList.includes(el)) {
        // 2.2) 발견된 문자, pattern에서 제거
        let index = pList.indexOf(el);
        pList.splice(index, 1);
      }
    });

    // 3) 악성코드 발견 처리
    if (pList.length === 0) {
      cnt += 1;
    }
  }

  return cnt;
}
