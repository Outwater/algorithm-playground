/* 
* `문제요약`
    **input : 1)** 원형 스택의 수와 **2)** 원형 스택 연산 리스트
    **output :**  주어진 연산을 모두 수행했을 때의 **1)** pop된 값 리스트
* `key`  가운데 공통 부분의 pop연산을 올바르게 구현하기
* `소요시간` 1시간 20분
* `어려웠던 점`  
    구현 완료 후, 예제 케이스에 대해 통과하였지만, 통과 못하는 이유 및 상황 분석하기
    pop 구현에서 조건문이 많아지면서, 검증하지 못한 케이스들이 있을 것으로 판단
    `try` 최대한 심플한 로직을 구상하기 (주먹구구식 끼워서 코드짜기 no!)

*/

function solution(n, queries) {
  let center = null;
  let stackList = Array.from({ length: n + 1 }, () => []);
  let popList = [];

  queries.forEach((query) => {
    const [a, b] = query;
    if (b < 0) {
      // pop연산
      let popResult = pop(a, n, stackList, center);
      stackList = popResult[0];
      center = popResult[2] || center;
      popList.push(popResult[1]);
    } else {
      // push연산
      let pushResult = push(a, b, stackList, center);
      stackList = pushResult[0];
      center = pushResult[1];
    }
    console.log("query", stackList, center);
  });

  return popList;

  function pop(id, maxLength, currentStackList, centerValue) {
    const stack = [...currentStackList];
    // console.log('pop',stack, id, 'CenterV', centerValue, maxLength);

    // console.log(stack[id].length)
    if (centerValue === null) {
      return [stack, -1];
    }

    if (stack[id].length <= 1) {
      // 다음 센터 정하고
      let nextId;
      for (let i = 1; i < maxLength; i++) {
        let next = id + i;
        console.log(id, next);
        if (next > maxLength) {
          // console.log('id',id, 'nextId', next, maxLength);
          next = next - maxLength;
        }
        console.log("after", id, next);
        if (stack[next].length > 1) {
          nextId = next;
          stack[nextId].shift();
          break;
        }
        // console.log('here', nextId)
      }
      if (!nextId) {
        // console.log('!nextId', [stack.map(el => []) , centerValue])
        return [stack.map((el) => []), centerValue];
      }

      // 순회하며, center값 change
      const poppedStack = stack.map((el) => {
        // console.log('stack[nextId]', nextId, stack[nextId]);
        el[0] = stack[nextId][0];
        return el;
      });
      // console.log('return ', [poppedStack, centerValue, stack[nextId][0]])
      return [poppedStack, centerValue, stack[nextId][0]];
    }
    let popValue = stack[id].pop();
    return [stack, popValue];
  }
  function push(id, value, currentStackList, centerValue) {
    const stack = [...currentStackList];
    if (centerValue === null) {
      const addedStack = stack.map((el) => {
        return [value, ...el];
      });
      return [addedStack, value];
    }
    stack[id].push(value);
    return [stack, centerValue];
  }
}
// console.log(solution(3, [[1,4],[2,2],[1,3],[1,6],[3,-1],[2,-1]])); //
console.log(
  solution(4, [
    [1, 3],
    [1, 2],
    [3, 6],
    [3, -1],
    [4, 5],
    [2, -1],
    [3, -1],
    [1, -1],
  ])
);
// console.log(solution(5, [[1,-1],[2,-1],[3,-1],[4,-1],[5,-1]]))
