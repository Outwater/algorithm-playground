function solution (n, times) {
  // 현재상황
  // return 값이 정답에 근접하나, 세세한 조절의 차이가 있다..
  // 테케 절반정도만 통과함

  // 접근
  // 바이너리서치는 최소와 최대값을 정하고, 중간값을 탐색하여, 최소 최대를 줄이는 방식

  // 1) 변수선언
  // 1-1) left = times의 최소값
  // 시간의 최소는 n이 1일 때, 가장 빠른 times가 검사하는 방법이므로

  // 1-2) right = times의 최소값 * n
  // 시간의 최대는 1명의 검사관이 모든 n명의 사람을 담당할 때 이므로

  // 1-3) for문안 비교값(possibleCnt)
  // 현재 시간까지의 검사가능한 사람의 수는 현재시간/times[i] 들의 몫의 합이다.
  // ex) 28/7 = 4 , 28/10 = 2.xx => 4+2 = 6

  // 검사가능한 사람의 수 < n 면 현재시간을 늘려주고,
  // 검사가능한 사람의 수 > n 면 현재시간을 줄여주도록 한다.

  const minTime = Math.min(...times); // 7
  let time = minTime * n; // 시간은 최대로 하고 줄여나가는 식으로 한다.
  let left = minTime;
  let right = minTime * n;

  // left, right 교차하는 순간모든 검사완료
  while (left <= right) {
    console.log([left, right, time]);
    const mid = Math.floor((left + right) / 2); // 24,33, 28 , 28 ,27
    let possibleCnt = 0;
    for (let i = 0; i < times.length; i++) {
      possibleCnt += Math.floor(mid / times[i]); // 3,2

      if (possibleCnt >= n) {
        //  6 >= 6
        time = right;
        right = mid - 1; //  32 , 31 , 30
        break;
      }
    }
    if (possibleCnt < n) {
      // 1) 5 <= 6
      time = left;
      left = mid + 1; // 26
    }
  }

  return time;
}
solution(6, [7, 10]);
