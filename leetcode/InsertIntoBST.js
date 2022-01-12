//* 난이도 및 풀이 시간
// start: 11:40
// end: 12:20
// 실제 난이도: Medium  체감 난이도: Medium
//* 문제이해
// BST와 새로운 값이 주어질 떄, 새로운 값이 추가 된 BST를 리턴
//* 아이디어
// root Node로 부터 크기 비교하며 좌우로 위치 주기(재귀)
//* 풀이방법(순서도, 절차적프로그래밍)
// 1. check 재귀함수 만들기
// 1-1) 탈출조건: 현재 idx가 undefined이라면 해당 위치에 val 자리
// 1-2) 노드가 존재하는데, insertValue가 해당 값보다 크다면 오른쪽 자리를 재귀탐색
// 1-3) insertValue가 해당 값보다 작다면, 왼쪽 자리 재귀탐색
//* 시간복잡도
// O()

//* 복습필요여부
// No
//* 배열 Tree 풀이
function solution(root, val) {
  check(0);

  function check(idx) {
    if (!root[idx]) {
      root[idx] = val;
      return;
    }

    if (val > root[idx]) {
      check(2 * idx + 2);
    } else {
      check(2 * idx + 1);
    }
  }
  return root;
}

//* TreeNode 타입 풀이
var insertIntoBST = function (root, val) {
  if (root == null) {
    return new TreeNode(val);
  }
  console.log("root", root.val);
  if (val > root.val) {
    root.right = insertIntoBST(root.right, val);
    console.log("right", root.right, root);
  } else {
    root.left = insertIntoBST(root.left, val);
    console.log("left", root.left, root);
  }

  return root;
};

console.log(solution([4, 2, 7, 1, 3], 5)); // [4, 2, 7, 1, 3, 5]
console.log(solution([40, 20, 60, 10, 30, 50, 70], 25)); // [40,20,60,10,30,50,70,null,null,25]
