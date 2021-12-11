function solution(arr) {
  let answer = [];
  let memo = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === memo) continue;
    answer.push(memo);
    memo = arr[i];
  }
  answer.push(arr[arr.length - 1]);
  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); // [4,3]
