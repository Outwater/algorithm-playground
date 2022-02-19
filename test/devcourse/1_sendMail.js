/* 
* 문제 타입

* 난이도 및 풀이 시간
start: 2:19
end: 2: 32
실제 난이도: lv1  체감 난이도: lv1
* 문제이해
보이스피싱 문자를 발송할 때,
같은 사람에서 k번 이상 송금하거나 송금액이 m원 이상일 때 문자를 발송한다.
송금받은 사람이름과 금액이 배열로 주어질 때,
보이스피싱 문자가 발송되는 횟수를 리턴
* 아이디어
prevName = '';
sameCnt = 1; 
mailCnt = 0;

* 풀이방법(순서도, 절차적프로그래밍)
1. 소문자변경
2. amounts 순회하면서, 
  1) prevName과 같다면 sameCnt ++ , 아니라면 sameCnt = 1; prevName = 현재이름 
  2) if(sameCnt >= k || 현재금액 >= m) mailCnt ++
3.
* 시간복잡도
O(N^2)까지 가능

* 복습필요여부

*/
function solution(k, m, names, amounts) {
  let prevName = null;
  let sameCnt = 1;
  let mailCnt = 0;

  names = names.map((name) => name.toLowerCase());

  for (let i = 0; i < names.length; i++) {
    let curName = names[i];
    let curAmount = amounts[i];

    if (prevName === curName) {
      sameCnt++;
    } else {
      sameCnt = 1;
      prevName = curName;
    }

    if (sameCnt >= k || curAmount >= m) {
      mailCnt++;
    }
  }
  return mailCnt;
}

console.log(
  solution(
    3,
    50000,
    [
      "msLEE",
      "jsKim",
      "jsKIM",
      "jskiM",
      "jskim",
      "John",
      "john",
      "John",
      "msLEE",
      "msLEE",
      "jsKIM",
      "roy",
    ],
    [950, 52524, 1400, 6055, 10000, 4512, 512, 52000, 9000, 49000, 1400, 50000]
  )
); //
console.log(
  solution(
    2,
    3451,
    ["abcd", "aBCd", "jsKIM", "rrr", "rrr"],
    [950, 1000, 1400, 4000, 10000]
  )
); //
