function solution(arr1, arr2) {
  let row = arr1.length;
  let col = arr1[0].length;
  let answer = Array.from(Array(row), () => Array(col).fill());

  arr1.forEach((row, rIdx) => {
    row.forEach((col, cIdx) => {
      answer[rIdx][cIdx] = arr1[rIdx][cIdx] + arr2[rIdx][cIdx];
    });
  });
  return answer;
}

//* map이 같은 형식의 배열을 리턴한다는 것을 이용하여 더 간결하게 사용하기
function sol(arr1, arr2) {
  return arr1.map((row, i) => row.map((col, j) => col + arr2[i][j]));
}

console.log(
  sol(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
); // [[4,6],[7,9]]
