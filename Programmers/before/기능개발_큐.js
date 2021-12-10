function solution(progresses, speeds) {
  // 0) 배포소요일을 계산한다.
  const Ddays = progresses.map((el, idx) =>
    Math.ceil((100 - el) / speeds[idx])
  );
  // 변수설정- max(최대배포소요일) cnt(배포하는 작업의 수) current(현재배포소요일)
  const result = [];
  let max = 0;
  let cnt = 0;

  for (let i = 0; i < progresses.length; i++) {
    const current = Ddays[i];
    if (current > max) {
      // 현재배포소요일 > 최대 배포소요일이면 배포작업수++, 최대배포소요일 변경
      max && result.push(cnt); // max가 0이 아닐 때만 실행, 초기값이 푸시되지 않도록 설정
      cnt = 1;
      max = current;
    } else {
      cnt++; // 현재배포소요일 < 최대배포소요일 면 배포작업수만 증가++
    }
  }
  result.push(cnt); // 마지막 작업 배포
  return result;
}

solution([93, 30, 55], [1, 30, 5]); // [2,1]
