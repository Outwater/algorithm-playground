/* 
start: 16:40
end: 17:20

문제 이해
: 양의 정수 n을 k진수로 변환했을 때, 조건에 맞는 소수는 몇개?

소수조건
1) 0P0 2) P0 3) 0P 4) P

!) P는 0을 포함하지 않는다. 101자체는 소수가 아님(0이 중간에 있기 때문에)
!) 소수판별은 k진법이 아닌 10진법 기준으로 소수인 것임

아이디어
: 정수n을 k진수로 바꾼다. (n.toString(k))
: 0을 기준으로 split 해준다.  ( [211, 2, 1, ,1 , 11] )
: 배열을 순회하며 소수판별한다. (isPrime(n))


*/
function solution(n, k) {
  let prime_cnt = 0;
  const get_k_number = (number, k) => {
    let k_number = [];
    let rest = number;

    while (rest > 0) {
      if (rest < k) {
        k_number.push(rest);
        break;
      }
      let q = Math.floor(rest / k);
      let r = rest % k;
      k_number.push(r);
      rest = q;
    }
    return k_number.reverse().join("");
  };

  const isPrime = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };
  const prime_candidates = get_k_number(n, k).split("0");

  prime_candidates.forEach((c) => isPrime(c) && (prime_cnt += 1));

  return prime_cnt;
}
