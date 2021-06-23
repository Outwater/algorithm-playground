function solution (arr) {
  // 1차 풀이결과
  // 보여지는 테스트케이스 2개는 만족하나 [14, 2, 7]과 같이 배열안에서 두수의 공배수가 존재할 경우? 안됨

  // 접근
  // 0) 여러가지수의 최대공약수를 먼저 구한다.
  // 1) 각 배열을 순회하며 gcd로 나눈값을 차례대로 곱해준다.

  // ex) [2, 6, 8, 14] 의 최대 공약수는 2
  // 2로 나눈 값은 [1, 3, 4, 7]
  // 최대공약수와 각각의 수를 곱하여준다. 2 *( 1* 3* 4* 7) === 168

  // 1차
  //   function gcd(a, b) {
  //     if (b === 0) {
  //       return a;
  //     }
  //     return gcd(b, a % b);
  //   }

  //   function gcdN(arr) {
  //     let result = gcd(arr[0], arr[1]);

  //     for (let i = 1; i < arr.length; i++) {
  //       let max = Math.max(result, arr[i]);
  //       let min = Math.min(result, arr[i]);

  //       result = gcd(max, min);
  //     }
  //     return result;
  //   }
  //   let gcdValue = gcdN(arr);

  //   let lcd = arr.reduce((acc, cur) => {
  //     return acc * (cur / gcdValue);
  //   }, gcdValue);

  //   return lcd;

  // 2차 (성공)
  // 접근 위의 방법대로 하되
  // i번째 까지의 최소공배수 = i-1번째 까지의 최소공배수와 i번째의 값의 최소 공배수이다.

  // 0) 최대공약수 구하기
  function gcd (a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }
  // 1) 두수의 최소공배수 구하기 (최소공배수는 두수의 곱을 최대공약수로 나눠주는 것)
  function lcm (a, b) {
    const gcdValue = gcd(a, b);
    return (a / gcdValue) * b;
  }

  // 2) N개의 수의 최소공배수 구하기
  // 2-1) 초기값은 arr[0], arr[1]의 최소공배수
  // 2-2) i번째 최소공배수 = 이전까지 최소공배수와 현재값의 최소공배수
  function lcmN (arr) {
    let result = lcm(arr[0], arr[1]);
    for (let i = 1; i < arr.length; i++) {
      const prev = result;
      result = lcm(prev, arr[i]);
    }
    return result;
  }

  lcmN(arr);
}

solution([2, 6, 8, 14]);
solution([1, 2, 3]);
solution([14, 2, 7]);
solution([2, 3, 4]);
