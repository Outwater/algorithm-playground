//* 난이도 및 풀이 시간
// start: 11:30
// end:
// 실제 난이도:  체감 난이도:
//* 문제이해
// 문자열 압축을 (1,2,...)단위로 진행할 때, 압축된 가장 짧은 문자열의 길이를 리턴
//* 아이디어
// 최소 문자열길이의 절반만큼은 완전탐색하며 압축된 문자열의 길이를 확인하여야한다.
// 1개 단위 압축은 가능
// 2개 단위일 때 압축 생각해보기 (ababgcdcdcd ->2abg3cd)

// 변수 비교문자열, 압축cnt, 압축s
// 1) 2개를 잘라서 비교문자열 저장. ab
// 2) 2칸뒤자리에서 2개를 잘랐을 때 일치하는 지 확인
// y) 압축cnt++, 2로 돌아가 반복
// n) 압축cnt+비교문자열을 압축s에 추가하고, 현재 i값 기준으로 2개를 잘라서 비교문자열 저장
//* 풀이방법(순서도, 절차적프로그래밍)
// 1.
// 2.
// 3.
//* 시간복잡도
// O()
//* 복습필요여부
//

function solution(s) {
  let min = s.length;

  function getPressLength(n) {
    let cur = 0;
    let cnt = 1;
    let compareS = s.slice(cur, cur + n); // a
    let answer = "";
    while (cur < s.length) {
      if (compareS === s.slice(cur + n, cur + 2 * n)) {
        // a === 2,3(b)
        cnt += 1; // 1 -> 2
        cur += n; // 0 -> 1
        compareS = s.slice(cur, cur + n); // (1,2):a
      } else {
        if (cnt > 1) {
          answer += cnt + compareS; // 2a
          cur += n; // 1-> 2
          cnt = 1; // 2-> 1
        } else {
          answer += s[cur];
          cur += 1;
        }
        compareS = s.slice(cur, cur + n);
      }
    }
    console.log(answer);
    return answer.length;
  }

  // getPressLength(1);
  for (let i = 1; i <= s.length / 2; i++) {
    min = Math.min(min, getPressLength(i));
  }
  return min;
}

console.log(solution("aabbaccc")); //
console.log(solution("ababcdcdababcdcd")); //
console.log(solution("abcabcdede")); //
console.log(solution("abcabcabcabcdedededede")); //
console.log(solution("xababcdcdababcdcd")); //

// console.log(solution()); //
