function solution (jobs) {
  // 현재 문제
  // 구하는 로직은 맞다고 판단,
  // But 우선순위 큐에서 빠져나갈 값은 구했는데, 큐에서 해당하는 요소를 빼는 방법을 못찾음
  // Q = [[1,9], [2, 6]] 있다면 [2,6]은 찾았는데, [2,6]을 해당 배열에서 찾아서 뽑는 것 어케..?

  // 접근
  // 우선순위 큐
  // 우선순위는 작업소요시간이 가장 작은 것으로
  // 현재 시점에서 가장 작업소요시간이 작은 것을 진행하도록 한다.

  // 0시점 -> [0, 3]  -> 3진행
  // 3시점 -> [[1,9] , [2,6]] 존재 -> 6진행
  // 9시점 -> [9] 존재 -> 9진행
  // 18 (완전종료)
  // 이 때 소요시간은 (끝나는 시간 - 해당작업 요청시점) 3-0 , 9-2 , 18-1

  // 3) solveMinQ 는 가능한 배열에서 우선순위가 가장 높은(작업소요시간이 적은) 값을 구하는 함수
  function solveMinQ (arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][1] < min[1]) {
        min = arr[i];
      }
    }
    return min;
  }

  // 0) 변수선언 Q(jobs), time(현재시점), accTime(누적시간)
  const Q = jobs;
  let time = 0;
  let accTime = 0;

  // 1) Q가 없어질 때 까지 진행
  while (Q.length > 0) {
    // let minQ = Q.우선순위 팝 //현재 시점 이하 중 가장 작업소요시간이 작은 것
    // 1-1) 현재 시점 이하 작업요소만을 고르기
    const possibleQ = Q.filter((el) => el[0] <= time);
    // 1-2) 가능한 작업 중 가장 작은 작업 요소 선택하기
    const minQ = solveMinQ(possibleQ);

    // 1-3) 작업이 진행되었으므로 시간을 올려주고 누적시간(작업종료시간-소요시간만큼) 올린다.
    time += minQ[1];
    accTime += time - minQ[0];
  }

  return Math.floor(accTime / jobs.length);
}
solution([
  [0, 3],
  [1, 9],
  [2, 6]
]);
