function solution(input) {
  //   let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
  input = input.toString().split("\n");

  let N = input.shift();
  // 0) 옷 담기
  let clothes = [];
  for (let i = 0; i < input.length; i++) {
    if (!isNaN(Number(input[i]))) {
      let cloth = input.slice(i + 1, i + Number(input[i]) + 1);
      clothes.push(cloth);
    }
  }

  clothes = clothes.map((el) => el.map((el2) => el2.split(" ")));
  console.log(clothes);

  for (let i = 0; i < N; i++) {
    console.log(solveCnt(clothes[i]));
  }

  function solveCnt(clothes) {
    // 못풀겠어서 레퍼런스 참고..

    let types = clothes.map((el) => el[1]);
    // 	[ 'headgear', 'eyewear', 'headgear' ]
    const cntObj = types.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
    // {"headgear":2,"eyewear":1}

    let cntArr = Object.values(cntObj); // [2, 1]   => 순회하면서 1가지 합친다.
    let answer = cntArr.reduce((acc, cur) => {
      // acc = 1 ,  1 * (2+1)   => acc = 3 * (1+1)
      return acc * (cur + 1);
    }, 1);
    return answer - 1;
  }
}

solution(`2
3
hat headgear
sunglasses eyewear
turban headgear
3
mask face
sunglasses face
makeup face`);
