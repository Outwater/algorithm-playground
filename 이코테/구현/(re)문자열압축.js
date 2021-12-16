//* 난이도 및 풀이 시간
// start: 11:30
// end: 14:00
// 실제 난이도: 중하  체감 난이도: 중상
//* 문제이해
// 문자열 압축을 (1,2,...)단위로 진행할 때, 압축된 가장 짧은 문자열의 길이를 리턴
//* 아이디어
// 최소 문자열길이의 절반만큼은 완전탐색하며 압축된 문자열의 길이를 확인하여야한다.
// 1개 단위 압축은 가능
// 2개 단위일 때 압축 생각해보기 (ababgcdcdcd ->2abg3cd)

// 변수 압축단위수(n) 현재idx(cur), 비교문자열(compareS), 반복횟수(cnt), 결과값(answer)
// 1) 2개를 잘라서 비교문자열 저장. ab
// 2) 2칸뒤자리에서 2개를 잘랐을 때 일치하는 지 확인
// y) 압축cnt++, 2로 돌아가 반복
// n) 압축cnt+비교문자열을 압축s에 추가하고, 현재 i값 기준으로 2개를 잘라서 비교문자열 저장

//* 풀이방법(순서도, 절차적프로그래밍)
// 1. 문자열 절반까지 getPressLength(n) 구하고, 그 중 최소값 리턴하도록 설정
// <getPressLength>
// 2. 변수선언 -> 압축단위수(n) 현재idx(cur), 비교문자열(compareS), 반복횟수(cnt), 결과값(answer)
// 3. 현재idx가 문자열 끝까지 될 때까지 반복 (수정필요)
// 4. 현재idx에서 n개의 문자가, 비교문자와 일치하는지 확인
//   (yes) 일치한다면, cnt++, cur를 n만큼 증가시켜, 다시 반복문 실행
//   (no) 일치하지 않는다면, 비교문자 정답에 등록 (cnt>1이면 cnt+비교문자, 아니면 비교문자만) -> 비교문자를 현재idx 기준 +n개의 문자로 업데이트, cur를 n만큼 증가 후 반복문 실행

// 5. 반복문 실행 이후 비교문자 남아 있을 때, answer에 추가해주기
//* 시간복잡도
// O()
//* 복습필요여부
//

function solution(s) {
  let min = s.length;

  function getPressLength(n) {
    let cur = n;
    let cnt = 1;
    let compareS = s.slice(0, n);
    let answer = "";

    while (cur <= s.length) {
      if (s.slice(cur, cur + n) === compareS) {
        cnt += 1;
        cur += n;
        continue;
      }

      if (cnt > 1) {
        answer += cnt + compareS;
        cnt = 1;
      } else {
        answer += compareS;
      }
      compareS = s.slice(cur, cur + n);
      cur += n;
    }

    if (compareS) {
      answer += compareS;
    }
    return answer.length;
  }

  for (let i = 1; i <= s.length / 2; i++) {
    min = Math.min(min, getPressLength(i));
  }
  return min;
}

console.log(solution("aabbaccc")); // 7
console.log(solution("ababcdcdababcdcd")); // 9
console.log(solution("abcabcdede")); // 8
console.log(solution("abcabcabcabcdedededede")); // 14
console.log(solution("xababcdcdababcdcd")); // 17
