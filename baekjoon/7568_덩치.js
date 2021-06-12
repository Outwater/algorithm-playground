function solution(input) {
  //0)입출력
  // const input = require('fs').readFileSync("/dev/stdin").toString().split("\n");
  const input = input.toString().trim().split("\n");
  let N = Number(input.shift());
  let arr = input.map((el) => el.split(" ").map((el2) => Number(el2)));
  //   console.log(arr); 콘ㄴ솔로그때문에 에러남

  let result = [];
  // 1) 큰 for문에서 people순회하기
  // 1-1) x, y 지정, k(덩치큰사람 수) 지정
  // 1-2) 작은 for문 끝나고 k+1을 result넣기
  // 2) 작은 for문에서 people순회하며 x,y와 arr[j][0], arr[j][1] 과비교
  //    2-1) x > x` && y > y` => k++

  for (let i = 0; i < N; i++) {
    let x = arr[i][0];
    let y = arr[i][1];
    let k = 0;

    for (let j = 0; j < N; j++) {
      let x2 = arr[j][0];
      let y2 = arr[j][1];

      if (i !== j && x2 > x && y2 > y) {
        k++;
      }
    }
    result.push(k + 1);
  }

  console.log(result.join(" ") === "2 2 1 2 5");
}

solution(`5
55 185
58 183
88 186
60 175
46 155`);
