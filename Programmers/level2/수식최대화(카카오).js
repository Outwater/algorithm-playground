// 11:00 ~ 12:00(solve, 성공)
// 함수형으로 풀도록 노력

//* 문제파악: 연산자(+,-,*) 우선순위를 자유롭게 정의하여 가장 큰 숫자 제출
// 1) 같은 순위x
// 2) 최종값 음수라면 절대값 씌어 제출

// *연산자 위치가 체크가 되어야함
// 1) 숫자와 연산자를 배열로 구분함 ([100,200,300,500,20], [-, *, -, +])
// 2) 6번 반복 실행하여 최대값 찾기 (computeAll())
// 3) 연산자 순위가 주어졌을 때, 계산값 구하기 (computeWithRank)
// ranks 순회
// 3-1) opers의 해당 연산자 없을 때 까지 반복
// 3-2) 연산자idx 앞뒤값 compute후 nums업데이트 , 사용한 연산자 제거하여 opers 업데이트
// 3-3) 결과값의 절대값 리턴

function solution(expression) {
  const makeNumsAndOpers = (exp) => {
    let check = 0;
    let opers = [];
    let nums = [];
    for (let i = 0; i < exp.length; i++) {
      if (exp[i] === "+" || exp[i] === "-" || exp[i] === "*") {
        nums.push(Number(exp.slice(check, i)));
        opers.push(exp[i]);
        check = i + 1;
      }
    }
    nums.push(Number(exp.slice(check)));
    return [nums, opers];
  };

  const computeWithRank = (nums, opers, ranks) => {
    const compute = (fir, sec, r) => {
      if (r === "*") return fir * sec;
      if (r === "+") return fir + sec;
      if (r === "-") return fir - sec;
    };
    // ranks = ['*','+','-']
    for (let i = 0; i < ranks.length; i++) {
      let rank = ranks[i];
      while (opers.includes(ranks[i])) {
        let operIdx = opers.indexOf(rank); // 1
        nums = [
          ...nums.slice(0, operIdx),
          compute(nums[operIdx], nums[operIdx + 1], rank),
          ...nums.slice(operIdx + 2),
        ];
        opers = [...opers.slice(0, operIdx), ...opers.slice(operIdx + 1)];
      }
    }
    return Math.abs(nums[0]);
  };

  const [nums, opers] = makeNumsAndOpers(expression);
  const computeAll = () => {
    return Math.max(
      computeWithRank(nums, opers, ["*", "+", "-"]),
      computeWithRank(nums, opers, ["*", "-", "+"]),
      computeWithRank(nums, opers, ["+", "-", "*"]),
      computeWithRank(nums, opers, ["+", "*", "-"]),
      computeWithRank(nums, opers, ["-", "*", "+"]),
      computeWithRank(nums, opers, ["-", "+", "*"])
    );
  };
  return computeAll();
}

console.log(solution("100-200*300-500+20")); // 60420
console.log(solution("50*6-3*2")); // 300
