//  레퍼런스 참고

// 접근
//  1) 종류별로 선택할 수 있는 가지수를 먼저 정렬한다.
//  {'headgear' : 2, 'eyewear': 1}

// 2) 해당 종류를 안입는 것도 선택가능한 방안이므로, 가지수 +1 을 진행한다.
// 각 종류의 선택가지수(clothes[i] + 1 을 모두 곱한 후  전부다 선택 안하는 경우의 수를 빼준다.)

function solution (clothes) {
  // 1) 입력배열을 계산에 편리하도록 변환하기
  // 1-1) 의상종류만 뽑아내기  ['headgear', 'eyewear', 'headgear']
  const types = clothes.map((el) => el[1]);

  // 1-2) 종류의 개수를 세기 {"headgear":2,"eyewear":1}
  const cntObj = types.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  // 1-3) 의상 obj의 값들만 뽑아내기
  const cntArr = Object.values(cntObj); // [2, 1]

  // 2) 해당 값들로 계산하여 마무리
  return (
    cntArr.reduce((acc, cur) => {
      return acc * (cur + 1);
    }, 1) - 1
  ); // (2+1) * (1+1) - 1
}

solution([
  ['yellowhat', 'headgear'],
  ['bluesunglasses', 'eyewear'],
  ['green_turban', 'headgear']
]);
