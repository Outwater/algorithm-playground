//* 난이도 및 풀이 시간
// start: 7:30
// end: 8:15
// 실제 난이도: medium  체감 난이도: medium
//* 문제이해
// 주어진 노드의 각 자리수를 더하고, 10이 넘어갈 경우 다음 노드로 올림값을 넘겨준다.
// l1 = [2,4,3] l2 = [5,6,4] 342 + 465 = 807 => [7,0,8]

//* 아이디어
// 넘어온 올림값 + l1[i] + l2[i] 를 10으로 나눈 나머지를 현재값으로하고, 몫을 올림값을로 넘겨준다.
//* 풀이방법(순서도, 절차적프로그래밍)
// 1. 결과값 배열 선언(result), 올림값(prev)
// 2. 가장 긴 노드만큼 순회
// 3. 몫과 나머지 계산
// 4. 마지막 값을 마지막 올림값으로 넣고, 비어있다면 이전까지 잘라서 리턴
//* 시간복잡도
// O(N)

//* 복습필요여부
// No

function solution(l1, l2) {
  let max = Math.max(l1.length, l2.length);
  const result = new Array(max + 1).fill(0);

  let prev = 0;
  for (let i = 0; i < max; i++) {
    let n1 = l1[i] || 0;
    let n2 = l2[i] || 0;

    let sum = prev + n1 + n2;
    let r = sum % 10;
    result[i] = r;
    prev = Math.floor(sum / 10);
  }
  result[result.length - 1] = prev;
  if (!result[result.length - 1]) {
    return result.slice(0, result.length - 1);
  }
  return result;
}

console.log(solution([2, 4, 3], [5, 6, 4])); // [7,0,8]
console.log(solution([0], [0])); // [0]
console.log(solution([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])); // [8,9,9,9,0,0,0,1]
