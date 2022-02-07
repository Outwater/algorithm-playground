//* 난이도 및 풀이 시간
// start: 18:00
// end: 19:00
// 실제 난이도: lv2  체감 난이도: lv2
//* 문제이해
// (https://programmers.co.kr/learn/courses/30/lessons/92341)
// 요금표와, 입출차 기록이 주어졌을 때, 차량별 주차요금을 리턴

// 요금표 (기본시간, 기본요금, 단위시간, 단위요금)
// 기본시간까지는 기본요금지불, 추가 단위시간 당 단위요금 지불
// 총요금 = 기본요금 + (단위시간*단위요금)

// 요금조건
// 1) 1대의 자동차가 여러번 입출차가능
// 2) 출차내역이 없다면, 23:59분에 출차한 것으로 간주
// 3) 시간이 딱 떨어지지 않는다면 시간을 올림하여 요금계산

//* 아이디어
// utils
// timeToMin(05:34) => 334

// 1. 차량별 입출차 시간리스트 구하기
// { 0000: [05:34, 07:59, 22:59, ] }
// 홀수라면, 23:59 추가해주기

// 2. 차량별 총 시간(분) 구하기
// { 0000: 334, 0148: 670, 5961: 146}

// 3. 요금계산

//* 시간복잡도
// O(N)

//* 복습필요여부
// No

function solution(fees, records) {
  const car_inAndOut_records = {};
  const car_total_time_records = [];

  records.forEach((r) => {
    const [time, carNumber] = r.split(" ");
    if (!car_inAndOut_records[carNumber]) {
      car_inAndOut_records[carNumber] = [];
    }
    car_inAndOut_records[carNumber].push(time);
  });

  // 2. 차량별 총 시간 구하기
  // console.log(car_inAndOut_records);
  Object.entries(car_inAndOut_records).forEach(([carNumber, timeList]) => {
    car_total_time_records.push([carNumber, getTotalTime(timeList)]);
  });

  // console.log(car_total_time_records);

  // 3. 요금계산하기
  car_total_time_records.sort((a, b) => Number(a[0]) - Number(b[0]));
  return car_total_time_records.map((time) => getTotalFee(time[1], fees));

  // utils
  function timeToMin(strTime) {
    const [hour, min] = strTime.split(":").map((el) => Number(el));
    return hour * 60 + min;
  }

  function getTotalTime(timeList) {
    let totalTime = 0;
    if (timeList.length % 2 === 1) {
      timeList.push("23:59");
    }

    for (let i = 0; i < timeList.length; i += 2) {
      let parkTime = timeToMin(timeList[i + 1]) - timeToMin(timeList[i]);
      totalTime += parkTime;
    }

    return totalTime;
  }

  function getTotalFee(totalTime, fees) {
    const [basicTime, basicFee, unitTime, unitFee] = fees;
    if (totalTime <= basicTime) return basicFee;
    return basicFee + Math.ceil((totalTime - basicTime) / unitTime) * unitFee;
  }
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
); //[14600, 34400, 5000]

console.log(
  solution(
    [120, 0, 60, 591],
    [
      "16:00 3961 IN",
      "16:00 0202 IN",
      "18:00 3961 OUT",
      "18:00 0202 OUT",
      "23:58 3961 IN",
    ]
  )
); //[0, 591]

console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"])); //[14841]
