//* 1. 자연수 N이 주어질 때 각자리 수의 합을 리턴
function solution(n) {
  let answer = 0;
  let strN = String(n);
  for (let i = 0; i < strN.length; i++) {
    answer += Number(strN[i]);
  }
  return answer;
}

//* 2. 자리수가 4or6이고, 숫자로 구성된 문자열 여부를 판단
function solution(s) {
  var answer = false;
  if (s.length === 4 || s.length === 6) {
    // for문없이 그냥 isNaN(Number(s))로 판단시 1개 케이스 실패
    for (let i = 0; i < s.length; i++) {
      if (isNaN(Number(s[i]))) {
        return false;
      }
    }
    return true;
  }
  return answer;
}
/*
function solution(s) {
    var answer = false;
    answer = s.length === 4 && !isNaN(Number(s))
    return answer;
}
*/

console.log(solution()); //
console.log(solution()); //
