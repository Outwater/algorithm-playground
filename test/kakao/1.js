/* 
* 문제 타입

* 난이도 및 풀이 시간
start:
end:
실제 난이도:  체감 난이도:
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
function solution(today, terms, privacies) {
  const termObj = terms
    .map((el) => el.split(" "))
    .reduce((acc, cur) => {
      const [key, term] = cur;
      acc[key] = Number(term);
      return acc;
    }, {});
  const result = privacies
    .map((data) => data.split(" "))
    .map(([strTime, termKey]) => {
      let [year, month, day] = strToArrTime(strTime);
      console.log("변경전", year, month, day);
      day = day - 1;

      if (day === 0) {
        month = month - 1;
        day = 28;
      }
      if (month === 0) {
        year = year - 1;
        month = 12;
      }

      const activeMonth = termObj[termKey];
      month = month + activeMonth; //  5월 12 = 17
      if (month > 12) {
        const addYear = Math.floor(activeMonth / 12);
        year = year + addYear;
        month = month - addYear * 12;
      }
      return getTime(year, month, day);
    });

  const todayTime = getTime(
    strToArrTime(today)[0],
    strToArrTime(today)[1],
    strToArrTime(today)[2]
  );

  const removeData = [];
  result.forEach((time, idx) => {
    console.log(todayTime, time);
    if (todayTime - time > 0) {
      removeData.push(idx + 1);
    }
  });

  function getTime(y, m, d) {
    return new Date(y, m, d).getTime();
  }
  function strToArrTime(strTime) {
    return strTime.split(".").map((el) => Number(el));
  }

  return removeData;
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    [
      "2021.05.02 A",
      "2021.07.01 B",
      "2022.02.19 C",
      "2022.02.20 C",
      "2022.01.01 B",
    ]
  )
);
// console.log(solution()); //
