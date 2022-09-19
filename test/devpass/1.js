/*
1. 총합 구하기

2. bricks 순회
 i 번째 요소까지의 합으로 가능한지 계산

 i번째 요소의 합이 총합의 절반을 넘어가면 stop
*/
function solution(bricks) {
  let result = new Set();
  // 1) 총합 구하기 (1층 추가 이후, 절반 넘어가면 1층 이상 쌓을 수 없으니 stop!)
  result.add(1);
  let sum = bricks.reduce((acc, cur) => acc + cur);

  // 2) i번째 까지 너비 합으로 쌓는 것이 가능한지 순회하며 검증
  for (let i = 0; i < bricks.length; i++) {
    // 2.1) i번째 요소까지의 합 구하기
    let partSum = 0;
    for (let j = 0; j <= i; j++) {
      partSum += bricks[j];
    }

    //* 탐색 중단 조건
    if (partSum > sum / 2) {
      break;
    }

    // 2.2) i번째 너비 합이, 모든 블럭 사용 및 해당 너비 유지되어 쌓을 수 있는지 검증
    let currSum = 0;
    let currHeight = 0;

    for (let idx = 0; idx < bricks.length; idx++) {
      currSum += bricks[idx];

      if (currSum > partSum) {
        break; //* 쌓아놓은 너비를 초과할 경우, 불가능 판단
      } else if (currSum === partSum) {
        //* 너비가 같다면 쌓고 다음 층 올라가기
        currHeight += 1; //* 쌓기
        currSum = 0; //* 다음 층 올라가기
        if (idx === bricks.length - 1) {
          //* 모든 블럭을 다 사용했다면, 성공 판단
          result.add(currHeight);
        }
      }
    }
  }
  return [...result].sort((a, b) => a - b);
}
