//* 난이도 및 풀이 시간
// start: 12:20
// end: 13:00 (fail)
// 실제 난이도: lv2  체감 난이도: lv3
//* 문제이해
// 'A','E','I','O','U'로만 구성된 최대 5글자의 모든 문자가 순서에 따라 정렬되어 있을 때, 특정 word의 순서를 리턴하는 문제
// 정렬규칙은 'A' -> 'AA' -> ... ->'AAAAA' -> 'AAAAE'
// 글자수 > 문자순서 로 정렬 우선순위를 가짐
//* 아이디어
//
//* 풀이방법(순서도, 절차적프로그래밍)
// 1.
// 2.
// 3.
//* 시간복잡도
// 수학적풀이 O(N), 재귀풀이(N^N)

//* 복습필요여부
// Yes

//* 수학적 풀이
// 간격을 구하고 간격만큼 곱한 후, A의 자리인 +1을 각각해주는 것
function solution(word) {
  let answer = 0;
  let diff = [781, 156, 31, 6, 1];
  let alpha = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };

  for (let i = 0; i < 5; i++) {
    if (!word[i]) continue;
    answer += diff[i] * alpha[word[i]] + 1;
  }

  return answer;
}

//* 완전탐색을 통한 풀이 (재귀)
// 사전을 모두 만든다.
function solution2(word) {
  const alpha = ["A", "E", "I", "O", "U"];
  let dir = [];

  const makeDir = (curWord, depth) => {
    if (depth === 6) return;
    dir.push(curWord);
    alpha.forEach((a) => {
      makeDir(curWord + a, depth + 1);
    });
  };
  alpha.forEach((a) => {
    makeDir(a, 1);
  });
  return dir.indexOf(word) + 1;
}

console.log(solution2("AAAAE")); //6
console.log(solution("AAAE")); // 10
console.log(solution("I")); // 1563
console.log(solution("EIO")); // 1189
