function solution(number, k) {
  // 풀이결과(fail) -> 단순히 숫자중에 큰 숫자 (n-k)개를 골라 나열을 하도록 구현했다.
  // test1,2 는 통과하지만 test3을 포함한 나머지는 실패
  // test3에서 가장 높은 숫자 배열은 [4,7,7,5,8,4] 이지만 가장 높은 숫자는 7부터 시작 하는 '775841' 이기 때문에
  // (아직 수정 풀이는 제출 못함)

  // [ 1차 풀이 ] ex) '1231234' , k = 3
  // 1) 오름차순 정렬 후 k를 선택한다. minArr = [1, 1, 2]
  // 2) number를 순환하며 해당 수가 minArr 속해있다면 제거하고, 아니면 result에 추가
  // 1제거 -> minArr [1,2]
  // 2제거 -> minArr [1]
  // 3  -> result = '3'
  // 1제거 -> minArr[0]
  // ... -> result = '3234'

  // 0) 변수선언
  let result = "";
  // 1) minArr 구하기
  const minArr = number
    .split("")
    .sort((a, b) => a - b)
    .slice(0, k);
  console.log(minArr);
  // 2) numbers 순회하며 minArr 속하면 제거cnt++, 안속하면 result추가
  for (let i = 0; i < number.length; i++) {
    // console.log(number[i])
    if (minArr.includes(number[i])) {
      const removeIdx = minArr.indexOf(number[i]);
      minArr.splice(removeIdx, 1);
    } else {
      result += number[i];
    }
  }
  return result;
}
console.log(solution("1231234", 3)); // '3234'
