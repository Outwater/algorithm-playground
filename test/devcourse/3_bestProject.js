/* 
* 문제 타입

* 난이도 및 풀이 시간
start: 3:31
end: 3:59
실제 난이도: lv2  체감 난이도: lv1
* 문제이해

* 아이디어

* 풀이방법(순서도, 절차적프로그래밍)
1. 연결리스트 만들기
  1: [2,3,4]
  3: [5,6]
  4: [7]
  linkedList = [x, [2,3,4], n, [5,6], [7], n, n, n ]

2. 재귀를 통해 구해볼 수 있을까?
재귀
  1)재귀 탈출조건
    1. 자식이 없으면 자신의 값 리턴
    2. 자식 있으면, 자신의 값 + rec(자식) 중 최대값 

    rec(1, 10) : (curNode, curVal)
    let childNodes = NodeList[curNode] // [2,3,4]
    if(!childNodes){
      return curVal
    }
    return curVal + Math.max( ...childNodes.map(childNode => rec(childNode, value[childNode-1])))

  2) 사례확인
  rec(3, 8)
  childNodes = NodeList[3] // [5,6];
  return 8 + Math.max(rec(5,9), rec(6,15))

3.
* 시간복잡도
O()

* 복습필요여부

*/
function solution(value, projects) {
  //1. make 연결리스트
  // [x, [2,3,4], n, [5,6], [7], n, n, n ]
  let linkedList = Array.from({ length: value.length + 1 });

  projects.forEach((p) => {
    let [from, to] = p;
    if (!linkedList[from]) {
      linkedList[from] = [];
    }
    linkedList[from].push(to);
  });

  // 2. 재귀함수 구현
  function rec(curNode, curVal) {
    let childNodes = linkedList[curNode];
    // 2.1) 자식노드 없을 때
    if (!childNodes) {
      return curVal;
    }
    // 2.2) 자식 노드 있을 떼
    return (
      curVal +
      Math.max(
        ...childNodes.map((childNode) => rec(childNode, value[childNode - 1]))
      )
    );
  }

  //3. 1번 프로젝트로 재귀시작
  return rec(1, value[0]);
}

console.log(
  solution(
    [10, 11, 8, 5, 9, 15, 17],
    [
      [1, 2],
      [1, 3],
      [1, 4],
      [3, 5],
      [3, 6],
      [4, 7],
    ]
  )
); // 33
