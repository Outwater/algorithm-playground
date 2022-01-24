//* 난이도 및 풀이 시간
// 1시간
// 실제 난이도: medium  체감 난이도: hard
//* 문제이해
//  A는 최대 M이하의 원소들로 구성되어 있으며, K개의 블록으로 나누려고 한다.
// 이 때, 나눠진 K블록의 합 중에서 가장 큰 합의 값 리턴하라

//* 아이디어
// 이분탐색으로 접근 (solution참고)
// 나올 수 있는 가장 작은 값은 K = A.length 일 때, 각 block의 원소는 1개이므로, 가장 큰 값은 Max(A)이다.
// 가장 큰 값은 K가 1일 때, Sum(A) 이다.

// 이분탐색으로 값의 범위를 줄여가며, 가장 작은 sum을 찾아본다.
// mid값이 가능하도록 하는 blocks수를 리턴한다.

//* 풀이방법(순서도, 절차적프로그래밍)
// 1.
// 2.
// 3.
//* 시간복잡도
// O()

//* 복습필요여부
// yes

function solution(K, M, A) {
  // 이분탐색
  let min = Math.max(...A); // 5
  let max = A.reduce((acc, cur) => acc + cur); //15
  function getBlocks(A, mid) {
    let blocks = 1;
    let subSum = 0;
    A.forEach((el) => {
      if (subSum + el > mid) {
        blocks += 1;
        subSum = el;
      } else {
        subSum += el;
      }
    });
    return blocks;
  }
  while (min < max) {
    let mid = Math.floor((min + max) / 2); // 10
    let blocks = getBlocks(A, mid);
    console.log("mid: ", mid, "blocks: ", blocks, "min,max: ", min, max);
    if (blocks > K) {
      // 덜 쪼개야 함
      // 기준 합(mid) 높여야함
      min = mid + 1;
    } else {
      // 더 쪼개야함
      // 기준 합(mid) 낮춰야함
      max = mid;
    }
  }

  return min;
}

console.log(solution(3, 5, [2, 1, 5, 1, 2, 2, 2])); //6
console.log(solution(3, 6, [5, 2, 3, 4, 6])); // 7

// [5,2] , [3,4], [6]
// [5], [2,3],[4],[6]

// [2,1,5,1] [2,2,2]  blocks: 2
