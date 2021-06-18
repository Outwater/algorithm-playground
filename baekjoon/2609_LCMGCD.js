function solution(input) {
  // const input = require('fs').readFileSync('/dev/stdin/').toString().split(' ');
  input = input.split(" ").map((el) => Number(el));
  let [a, b] = input;
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  function gcdBasic(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let result = 0;
    for (let i = 1; i < min; i++) {
      if (max % i === 0 && min % i === 0) {
        result = i;
      }
    }
    console.log(result);
    return result;
  }

  // a,b 에 대하여 r = a % b 일 때  a와 b의 최대공약수는 b와 r (나눈수와 그 나머지)의 최대공약수와 같다.
  // b, r의 최대공약수는 다시  r` = b % r 로 나누어 생각하므로 (나눈수와 그 나머지) r, r` 의 최대공약수
  // 반복하여 나머지가 0이 되었을 때의 나누는 수가 a, b의 최대공약수이다.
  function gcdEuclidean(a, b) {
    // (나눈수, 나머지)

    if (b === 0) {
      // 나머지가 0이면
      return a;
    }
    return gcdEuclidean(b, a % b);
  }

  function lcmBasic(a, b) {
    let result = 1;

    while (true) {
      if (result % a === 0 && result % b === 0) {
        break;
      }
      result++;
    }
    console.log(result);
  }

  // a * b = LCM(a, b) * GCD(a, b)
  // LCM(a, b) = a * b / GCD(a, b)
  function lcmFomula(a, b) {
    let gcd = gcdEuclidean(a, b);
    // a*b / gcd 이지만 연산효율을 위해 먼저 큰 값을 나누고 한다.
    return (a / gcd) * b;
  }

  //   gcdBasic(a, b);
  //   lcmBasic(a, b);

  console.log(gcdEuclidean(max, min));
  console.log(lcmFomula(max, min));
}

solution(`24 18`);
