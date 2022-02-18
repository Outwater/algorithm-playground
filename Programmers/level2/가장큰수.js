/*
* 난이도 및 풀이 시간
start: 11:10
end: 11:40
실제 난이도: lv2  체감 난이도: l2+
Type: 정렬
* 문제이해
0 또는 양의 정수가 담긴 배열이 주어졌을 때, 조합해서 만들 수 있는 가장 큰 수를 리턴하는 문제
* 아이디어
최대자리수의가 4자리 이기 때문에, 4자리까지 수를 만들어 비교하도록 한다.
ex) 3, 30, 34  -> 3333, 3030, 3434  -> 34 , 3, 30 순으로 정렬

//* 시간복잡도
O(NlogN)
//* 복습필요여부
NO

*/

function solution(numbers) {
  if (numbers.reduce((acc, cur) => acc + cur, 0) === 0) return "0";

  numbers = numbers.map((e) => String(e));

  numbers.sort((a, b) => b.repeat(4).slice(0, 4) - a.repeat(4).slice(0, 4));

  return numbers.join("");
}

console.log(solution([6, 10, 2])); //"6210"
console.log(solution([3, 30, 34, 5, 9])); // "9534330"
