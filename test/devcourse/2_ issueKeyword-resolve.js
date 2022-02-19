/* 
* 문제 타입

* 난이도 및 풀이 시간
start: 2: 32
end: 3:30

실제 난이도: lv2  체감 난이도: lv3

* 문제이해

* 아이디어

* 풀이방법(순서도, 절차적프로그래밍)
1.
2.
3.
* 시간복잡도
O()

* 복습필요여부

*/
function checkIssueKeyword(day, search_counts_by_day, n, k) {
  let search_counts_total = 0;

  for (let i = 0; i < n; i++) {
    let curDay = day + i;

    search_counts_total += search_counts_by_day[curDay];
    if (search_counts_by_day[curDay] < k) {
      return false;
    }
  }

  return search_counts_total >= 2 * n * k ? true : false;
}

function calcIssueCount(search_counts_by_day, n, k) {
  let issue_count = 0;

  search_counts_by_day.forEach((_, day, search_counts_by_day) => {
    if (checkIssueKeyword(day, search_counts_by_day, n, k)) issue_count++;
  });

  return issue_count;
}
function solution(research, n, k) {
  let search_counts_by_keyword = {};

  function countKeywords(day, words) {
    words.split("").forEach((word) => {
      if (!search_counts_by_keyword[word]) {
        search_counts_by_keyword[word] = Array.from(
          { length: research.length + 1 },
          () => 0
        );
      }
      search_counts_by_keyword[word][day] =
        search_counts_by_keyword[word][day] + 1 || 1;
    });
  }

  // 1. 일자별 총 검색어를 순회하며, 키워드별 search_counts 세기
  // {a: [ 0, 5, 3, 7, 1 ], b: [ 0, 1, 0, 1, 0 ], f: [ 0, 0, 0, 0, 8 ], z: [ 0, 0, 0, 0, 1 ] }
  for (let i = 0; i < research.length; i++) {
    countKeywords(i + 1, research[i]); // 해당 날짜의 words 세기
  }

  // 2. 키워드별로 issue_counts의 개수 세기
  // [ [a,2], [b,0], [c,0], [d,0] ]
  const issue_counts_by_keyword = Object.entries(search_counts_by_keyword).map(
    ([keyword, search_counts_by_day]) => {
      const issue_count = calcIssueCount(search_counts_by_day, n, k);
      return [keyword, issue_count];
    }
  );

  // 3. 최대 issue_count를 가진 키워드 리턴
  const maxValue = Math.max(...issue_counts_by_keyword.map((el) => el[1]));
  const keywords_in_max_issue_counts = issue_counts_by_keyword.filter(
    (el) => el[1] >= maxValue
  );
  keywords_in_max_issue_counts.sort();
  return maxValue === 0 ? "None" : keywords_in_max_issue_counts[0][0];
}

console.log(solution(["abaaaa", "aaa", "abaaaaaa", "fzfffffffa"], 2, 2)); // 'a'
console.log(solution(["yxxy", "xxyyy"], 2, 1)); // 1,1 'x'
console.log(solution(["yxxy", "xxyyy", "yz"], 2, 1)); // 1, 2 'y'
console.log(solution(["xy", "xy"], 1, 1)); // 0 'None'
