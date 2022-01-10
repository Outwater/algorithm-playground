//* 난이도 및 풀이 시간
// start: 9:30
// end: 10:05
// 실제 난이도: Easy  체감 난이도: Easy but fail
//* 문제이해
// 2진수 숫자 2개를 받아 그 합을 2진수로 리턴하는 문제
//* 아이디어
// 10진수로 바꾸어 더한 값을 다시 2진수로 바꾸어 리턴
//* 풀이방법(순서도, 절차적프로그래밍)
// 1. 2진수-> 10진수 (parseInt(a,2)) : a라는 2진수값을 10진수로 바꿔주는 method
// 2. (a+b).toString(2) : a+b라는 10진수 값을 2진수로 바꾸어 주는 method

//*! 그러나 매우 큰 수가 들어올 때, parseInt를 통해 처리할 수 없는 문제 발생
// BigInt() 라는 최대치 이상의 값을 표현할 수 있는 내장 객체 method 사용
// '현재 진수를 알려주는 부분'과 '해당 진수의 값' 을 받아 10진수 값을 리턴한다.
// BigInt('0b' + '해당진법의 숫자')
//* 시간복잡도
// O()

//* 복습필요여부
//

function solution(a, b) {
  // a가 small 일때, let a_Ten = parseInt(a,2)
  let a_Ten = BigInt("0b" + a);
  let b_Ten = BigInt("0b" + b);
  return (a_Ten + b_Ten).toString(2);
}

console.log(solution("11", "1")); // '100'
console.log(solution("1010", "1011")); //'10101'
