//* 난이도 및 풀이 시간
// start:
// end:
// 실제 난이도:  체감 난이도:
//* 문제이해
//
//* 아이디어
//
//* 풀이방법(순서도, 절차적프로그래밍)
// 1.
// 2.
// 3.
//* 시간복잡도
// O()

//* 복습필요여부
//

function solution(s) {
  const strToNum = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let answer = '';
  let curStr = '';
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      curStr += s[i];
      if (strToNum[curStr] || curStr === 'zero') {
        answer += strToNum[curStr];
        curStr = '';
      }
    } else {
      answer += s[i];
    }
  }
  return Number(answer);
}

function solution2(s) {
  const strToNum = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let answer = s;
  strToNum.forEach((el, idx) => {
    let temp = answer.split(el);
    answer = temp.join(idx);
  });
  return Number(answer);
}
console.log(solution('1zerotwozero3')); // 10203
console.log(solution2('1zerotwozero3')); // 10203
