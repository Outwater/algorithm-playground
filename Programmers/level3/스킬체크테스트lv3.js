//* 2. 탑승 가능한 가장 마지막 시간 구하기
//* 문제
// 카카오 셔틀버스 문제
//* 아이디어
// 원소개수 오름차순으로 정렬하고, 추가되는 원소가 튜플의 다음 원소가 된다.

//* 풀이방법(순서도, 절차적프로그래밍)
// 1. timetable가공하기 -> 시간은 전부 분을 기준으로 하는 숫자타입으로 변경
// 2. 9:00(540분)을 기준으로 현재 시간을 관리하고, 현재 시간에 출발 할 수 있는 사람을 관리하여 계산
// 3. 막차가 출발 할 때까지, 반복문을 통해 시간을 조절한다.
// 4. 막차가 아닐 떄
// 현재 시간 기준으로 탈 수 있는 사람들을 태워 보낸다(timetable에서 제거)
//  단. 최대 m명 까지 가능
//  현재시간 보다 작으면서, goPeople.length > m ? m : goPeople.length만큼 timetable에서 제거
// 버스출발 후 다음차 도착(시간에 t만큼 더해준다.)
// 5. 막차일 때
//   *도착시간을 정하는 경우의 수는 2가지
//  1) 막차의 자리가 남아, 막차를 타는 경우
//  2) 막차의 자리가 모잘라서, 마지막 사람보다 1분 빨리 타는 경우
//
//
//* 2트(코드정리)
//* 코드정리
// timeToMin, minToTime 보조계산 함수
function solution2(n, t, m, timetable) {
  function timeToMin(time) {
    let hour = Number(time.slice(0, 2) * 60);
    let min = Number(time.slice(3));
    return hour + min;
  }

  function minToTime(minTime) {
    let hour =
      parseInt(minTime / 60) < 10
        ? "0" + parseInt(minTime / 60)
        : `${parseInt(minTime / 60)}`;
    let min = minTime % 60 < 10 ? "0" + (minTime % 60) : `${minTime % 60}`;
    return `${hour}:${min}`;
  }

  let timetableMin = timetable
    .map((time) => timeToMin(time))
    .sort((a, b) => a - b);

  let start = 9 * 60;
  let time = start;

  for (let i = 1; i <= n; i++) {
    let goPeople = timetableMin.filter((el) => el <= time);

    if (i === n) {
      if (goPeople.length >= m) {
        time = goPeople[m - 1] - 1;
      }
    } else {
      let go = goPeople.length > m ? m : goPeople.length;
      timetableMin.splice(0, go);
      time += t;
    }
  }

  return minToTime(time);
}
//*1트
function solution1(n, t, m, timetable) {
  let timetableMin = timetable.map((time) => {
    return Number(time.slice(0, 2) * 60) + Number(time.slice(3));
  });
  timetableMin.sort((a, b) => a - b);

  let start = 9 * 60;
  let time = start;

  for (let i = 1; i <= n; i++) {
    let goPeople = timetableMin.filter((el) => el <= time);

    if (i === n) {
      if (goPeople.length >= m) {
        time = goPeople[m - 1] - 1;
      }
    } else {
      let go = goPeople.length > m ? m : goPeople.length;
      timetableMin.splice(0, go);
      time += t;
    }
  }

  let hour =
    parseInt(time / 60) < 10
      ? "0" + parseInt(time / 60)
      : `${parseInt(time / 60)}`;
  let min = time % 60 < 10 ? "0" + (time % 60) : `${time % 60}`;
  return hour + ":" + min;
}

console.log(solution1(1, 1, 5, ["08:00", "08:01", "08:02", "08:03"])); // "09:00"
console.log(solution1(1, 1, 1, ["23:59"], "09:00")); // 09:00
console.log(solution2(1, 1, 5, ["08:00", "08:01", "08:02", "08:03"])); // "09:00"
console.log(solution2(1, 1, 1, ["23:59"], "09:00")); // 09:00
