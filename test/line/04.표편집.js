/*
11:30 ~

문제이해
 : 목표 셀의 길이를 맞추기 위해 최소 이동횟수를 리턴
조건
 1) 지우거나 생성 불가
 2) 1이 최소 길이

 아이디어
  1) 앞에서 부터 길이를 맞추어 준다.
  2) 앞의요소의 변화만큼 뒷요소 (변화*-1) 해준다
*/
function solution(arr, brr) {
  let count = 0;
  arr.forEach((el, idx) => {
    const target = brr[idx];
    if (el !== target) {
      count += 1;
      let diff = target - el;
      arr[idx] += diff;
      arr[idx + 1] -= diff;
    }
  });
  return count;
}
/*
입출력 예
arr	brr	result
[3, 7, 2, 4]	[4, 5, 5, 2]	3
[6, 2, 2, 6]	[4, 4, 4, 4]	2
*/
