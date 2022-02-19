/* 
* 문제 타입

* 난이도 및 풀이 시간
start: 2: 32
end: 3:30

실제 난이도: lv2  체감 난이도: lv3

!! 개판으로 풀었다... 다시풀 것!
* 문제이해
최고의 이슈 검색어 조사

일자별 검색어 research와 연속된 일수 n, 최소검색량 k가 주어질 때
n일 연속으로 k번 이상 검색되고 && n일 동안의 검색어 합이 2*n*k를 넘으면 이슈검색어이다.

1. 검색어별 이슈검색어의 개수를 구한다.
{
  a : [5, 3, 7, 1]
  b : [1,0,1,0]
  f : [0,0,0,8]
  z : [0,0,0,1]
}

2. 각 검색어 리스트를 순회하며, 이슈검색어 개수를 추출한다.
[5, 3, 7, 1] => 2

util 이슈검색어 추출
let 이슈검색어cnt = 0;
for( i = 0;  i < list.length){

  for(let day = 1; day =< n){

  }
  if(검색어 합 >= 2*n*k ){
      이슈검색어 횟수++
  }
}
* 아이디어

* 풀이방법(순서도, 절차적프로그래밍)
1.
2.
3.
* 시간복잡도
O()

* 복습필요여부

*/
function solution(research, n, k) {
  let issue_keyword = "None";
  let records_by_keyword = {};
  // 1. 검색어별 이슈검색어 카운트 만들기
  for (let i = 0; i < research.length; i++) {
    for (let j = 0; j < research[i].length; j++) {
      let word = research[i][j];
      if (!records_by_keyword[word]) {
        records_by_keyword[word] = Array.from(
          { length: research.length },
          () => 0
        );
      }
      records_by_keyword[word][i] = records_by_keyword[word][i] + 1 || 1;
    }
  }
  // console.log(records_by_keyword);

  // 리스트를 순회하며, 해당 이슈검색어의 이슈검색 개수 체크하기

  // {
  //   a : [5, 3, 7, 1]  => a: 2
  //   b : [1,0,1,0]    => b: 0
  //   f : [0,0,0,8]   => c: 0
  //   z : [0,0,0,1]    => z: 0
  // }

  let result = {};
  Object.entries(records_by_keyword).forEach(([key, list]) => {
    for (let i = 0; i < list.length - 1; i++) {
      let sumOfkeyword = 0;
      // console.log(list);
      for (let cnt = 0; cnt < n; cnt++) {
        let day = i + cnt;

        if (list[day] < k) {
          sumOfkeyword = 0;
          break;
        }

        sumOfkeyword += list[day];
        // console.log(day, list[day], sumOfkeyword);
        if (cnt === n - 1 && sumOfkeyword >= 2 * n * k) {
          // console.log(day, list[day], sumOfkeyword);
          result[key] = result[key] + 1 || 1;
        }
      }
    }
  });

  let max = 0;
  Object.entries(result).forEach(([key, cnt]) => {
    if (cnt === max) {
      let temp = [issue_keyword, key];
      temp.sort();
      issue_keyword = temp[0];
    }
    if (cnt > max) {
      issue_keyword = key;
      max = Math.max(cnt);
    }
  });
  // console.log(result);
  return issue_keyword;
}

console.log(solution(["abaaaa", "aaa", "abaaaaaa", "fzfffffffa"], 2, 2)); // 'a'
console.log(solution(["yxxy", "xxyyy"], 2, 1)); // 1,1
console.log(solution(["yxxy", "xxyyy", "yz"], 2, 1)); // 1, 2
console.log(solution(["xy", "xy"], 1, 1)); // 0
