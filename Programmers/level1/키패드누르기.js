//* 난이도 및 풀이 시간
// start:
// end:
// 실제 난이도:  체감 난이도:
//* 문제이해
//
//* 아이디어
//
//* 풀이방법(순서도, 절차적프로그래밍)
// 1.
// 2.
// 3.
//* 시간복잡도
// O()

//* 복습필요여부
//
function solution(numbers, hand) {
  var result = '';
  let left = [3, 0];
  let right = [3, 2];
  // 123
  // 456
  // 789
  // *0#
  numbers.forEach((el) => {
    let DisL = getDis(el, left);
    let DisR = getDis(el, right);
    if (el % 3 === 1) {
      result += 'L';
      left = getLocation(el);
    } else if (el % 3 === 0 && el !== 0) {
      result += 'R';
      right = getLocation(el);
    } else {
      if (DisL === DisR) {
        if (hand === 'left') {
          result += 'L';
          left = getLocation(el);
        } else {
          result += 'R';
          right = getLocation(el);
        }
      } else if (DisL > DisR) {
        result += 'R';
        right = getLocation(el);
      } else {
        result += 'L';
        left = getLocation(el);
      }
    }
  });

  function getDis(number, dir) {
    let [curR, curC] = dir;
    let [numR, numC] = getLocation(number);

    return Math.abs(curR - numR) + Math.abs(curC - numC);
  }
  function getLocation(number) {
    let row = Math.floor(number / 3.01);
    let col = (number + 2) % 3;
    if (number === 0) {
      return [3, 1];
    }
    return [row, col];
  }
  return result;
}

console.log(
  solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right') //, 'LRLLLRLLRRL')
);
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')); // 'LRLLRRLLLRR'));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right')); // 'LLRLLRLLRL'));
