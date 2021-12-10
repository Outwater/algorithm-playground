//풀이방법
// 1) 문자열 s를 우선 계산이 편하도록 배열로 전환
// '{{1, 2, 3}, {2, 1}, {2}}' => [ [1, 2, 3], [2, 1], [2]]

// 2) 배열로 된 입력 값을 길이의 오름차순으로 정렬
// [[2], [2, 1], [1, 2, 3]] => [[2], [2,1], [1,2,3]]

// 3) 처음 값을 result의 첫 값으로 하고, 이후 부터는 이전요소에 포함되지 않은 새로운 값을 추가한다..
// [2] => [2]
// [2,1] => 이전요소 [2]의 중복을 빼고 난 [1] push
// [1,2,3] => 이전요소 [2,1]의 중복을 빼고 난 [3] push
// 정답 : [2, 1, 3]
function solution(s) {
  let answer = [];

  // 1) 문자열 s를 배열로 전환
  let sArr = sArr.slice(0, s.length - 2); // 뒷 부분의 '}}' 제거
  sArr = s.replace(/{/g, "").split("},"); // '{' 전부 제거한 후 '}'기준으로 배열 만들기 [ '2', '2,1', '2,1,3', '2,1,3,4' ]
  sArr = sArr.map((el) => el.split(",").map((el) => Number(el))); // [ [ 2 ], [ 2, 1 ], [ 2, 1, 3 ], [ 2, 1, 3, 4 ] ]

  // 2) 길이의 오름차순으로 배열 정렬
  sArr.sort((a, b) => a.length - b.length);

  // 3) 튜플값 찾아 answer에 push
  // uniq는 현재 튜플에서 이전 튜플요소를 제외한 값을 의미한다.
  let prev = sArr[0];
  answer.push(...prev);
  for (let i = 1; i < sArr.length; i++) {
    let uniq = sArr[i].filter((el) => {
      return !prev.includes(el);
    });
    answer.push(...uniq);
    prev = sArr[i];
    // console.log(...uniq)
  }

  return answer;
}
