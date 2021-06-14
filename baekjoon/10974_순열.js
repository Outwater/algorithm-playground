function solution(input) {
  // const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  input = Number(input);
  //재귀로 풀어보기 (DFS, Backtracking)
  // 0) 1부터 n까지 배열에 담는다. [1,2,3]
  // result 배열 선언
  // 1) 재귀함수 permute(cur, depth )
  // 탈출조건
  // 1-1) depth == arr.length
  // result.push(cur);
  // 1-2) permute(arr.concat(next), depth+1);
  let result = [];
  let arr = [];
  for (let i = 1; i <= input; i++) {
    arr.push(i);
  }

  let n = arr.length;
  let memo = Array(n);
  let data = Array(n);
  function backtracking(pos) {
    if (pos === n) {
      result.push(data.slice()); // 그냥 data를 push 하면 data가 변경될 경우 다 바뀌게 된다. 따라서 얇은 복사본은 slice()를 넣는다.
      return;
    }
    for (let i = 0; i < n; i++) {
      if (!memo[i]) {
        memo[i] = true;
        data[pos] = arr[i]; // data의 0번째 자리는 arr[1], arr[2], arr[3] 될 수 있다. A , B, C
        backtracking(pos + 1);
        memo[i] = false; // i=0 일 때 모든 경우 돌아보고와서는 다시 false로 바꿔준다. A-- 다끝난것, B-- 탐색시작
      }
    }
  }
  backtracking(0);
  result.map((el) => el.join(" ")).map((el) => console.log(el));
}

solution(3);
