//* 난이도 및 풀이 시간
// start: 07:00
// end: 07:20
// 실제 난이도: medium 체감 난이도: lv1~lv2
//* 문제이해
// [num,from,to]로 태울 수 있는 사람수,출발지,도착지의 리스트가 주어질 때, 주어진 모든 사람들을 태우고 내릴 수 있는 지 여부를 리턴
//* 아이디어
// 현재 탑승자 수를 나타내는 배열(curCapa)을 만들고, 각각의 from~to의 idx에 num을 추가하여준다.
// curCapa의 값이 > 수용량(capacipy)을 넘을 때 false를 리턴한다.
//* 풀이방법(순서도, 절차적프로그래밍)
// 1. 변수선언(curCapa, result)
// 2. trips를 출발지 기준으로 sort
// 3. trips 순회하며, 해당 행선지에 curCapa에 더하며 확인하기
//* 시간복잡도
// O(N^2) 1000 1000 = 1000,000

//* 주의할 점
// 앞사람의 to와 뒷사람의 from이 겹치는 경우, 내리고 태울 수 있다는 점 유의
// 즉 to일 때는 num을 더해주지 않고 그 전까지 더해줌으로 해결
//* 복습필요여부
// No

function solution(trips, capacity) {
  let curCapa = new Array(10000).fill(0);
  let result = true;
  trips.sort((a, b) => a[1] - b[1]);

  trips.forEach((v) => {
    let [num, from, to] = v;
    for (let i = from; i < to; i++) {
      curCapa[i] += num;
      if (curCapa[i] > capacity) {
        result = false;
        return;
      }
    }
  });
  return result;
}

console.log(
  solution(
    [
      [2, 1, 5],
      [3, 3, 7],
    ],
    4
  )
); // false
console.log(
  solution(
    [
      [2, 1, 5],
      [3, 3, 7],
    ],
    5
  )
); // true
