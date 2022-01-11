//* 난이도 및 풀이 시간
// start: 9:30
// end: 10:00
// 실제 난이도: Easy  체감 난이도: Easy
//* 문제이해
// 이진트리의 루트들을 차례대로 더할 때, 가능한 모든 값의 합을 리턴
//* 아이디어
// bfs 탐색
//* 풀이방법(순서도, 절차적프로그래밍)
// 1.
// 2.
// 3.
//* 시간복잡도
// O()

//* 복습필요여부
//

function solution(root) {
  let sum = 0;
  dfs(0);

  function dfs(curIdx, value = "") {
    if (!root[curIdx] && root[curIdx] !== 0) return;

    let leftIdx = 2 * curIdx + 1;
    let rightIdx = 2 * curIdx + 2;

    value += root[curIdx];
    if (root[leftIdx] !== 0 && !root[leftIdx]) {
      sum += parseInt(value, 2);
      return;
    }
    dfs(leftIdx, value);
    dfs(rightIdx, value);
  }

  return sum;
}

/* Node 데이터타입을 이용한 풀이
var sumRootToLeaf = function(root) {
    let sum = 0;
    bfs(root)
    
    function bfs(node, value=''){
        if(!node) return
        
        if(!node.left && !node.right){
            sum += parseInt(value + node.val, 2)
            return
        }
        bfs(node.left, value + node.val)
        bfs(node.right, value + node.val)
    }
   
    
    return sum
    
};
*/
console.log(solution([1, 0, 1, 0, 1, 0, 1])); //22
console.log(solution([0])); // 0
