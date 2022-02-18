/* 
* 문제 타입
 Hash, 객체
* 난이도 및 풀이 시간
start: 10:40
end: 11:00
실제 난이도: lv2  체감 난이도: lv1
* 문제이해
: 매일 다른 옷을 조합하여 입어햐 한다.
: 스파이가 가지고 있는 의상정보가 주어질 때, 서로 다른 옷의 조합의 수를 리턴하라
* 아이디어
: 옷을 선택하지 않는 경우의 수를 포함하여, (종류별 의상 수 +1)를 각가 곱해주고, 옷을 벗은 경우인 1가지 경우의 수를 뺴준다.

* 풀이방법(순서도, 절차적프로그래밍)
1. 옷의 종류별 의상리스트를 담은 객체를 만든다.
2. 옷의 종류별 의상의 수 + 1 을 각각 곱해주고 최종적으로 1을 빼준다.

* 복습필요여부
No
*/

function solution(clothes) {
  let clothes_by_type = {};

  clothes.forEach((c) => {
    let [name, type] = c;
    if (!clothes_by_type[type]) {
      clothes_by_type[type] = [name];
    } else {
      clothes_by_type[type].push(name);
    }
  });
  return (
    Object.values(clothes_by_type).reduce(
      (acc, cur) => acc * (cur.length + 1),
      1
    ) - 1
  );
}

console.log(solution()); //
console.log(solution()); //
