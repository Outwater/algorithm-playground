// arr 입력받는다고 가정

const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    // 초기값은 빈배열
    return insert(heap, item);
  }, []);
};

// insert가 하는 일은 기존에 만들어진 heap과 item을 받아서 새로 만드는 것
// 항상 포화트리를 유지하도록 제일 마지막에 넣음 (트리에서 가장 마지막줄 왼쪽에 들어감)
function insert(heap, item) {
  heap.push(item);
  let curIdx = heap.length - 1;
  let parentIdx = getParentIdx(curIdx);

  //아직 끝까지 확인하지 않거나, 부모보다 작으면 실행
  while (parentIdx >= 0 && heap[curIdx] < heap[parentIdx]) {
    swap(curIdx, pIdx, heap); // 확인하고 바꿔준다.
    curIdx = parentIdx;
    parentIdx = getParentIdx(curIdx);
  }
}

function getParentIdx(idx) {
  return Math.floor((idx - 1) / 2);
}

function swap() {
  let temp;
}

// [0 , 1, 2, 3, 4, 5, 6, 7, 8]
// 3의 자식노드는 idx * 2 + 1, idx *2 + 2 === 7&8
// (7-1)/2 = 3  (8-1)/2 = 3.xx => 3  parentIdx = (curIdx-1)/2 의 버림

// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  // 두 변수를 바꾸는 방법

  // 1) 임시 변수를 활용한 방법
  // let temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp;

  // 2) Destructuring assignment를 활용한 방법
  // arr이 reference type이라 가능
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  // 3) XOR 연산을 활용한 방법
  // arr이 reference type이라 가능
  // arr[idx1] ^= arr[idx2];
  // arr[idx2] ^= arr[idx1];
  // arr[idx1] ^= arr[idx2];
}

function getParentIdx(idx) {
  // TODO: 여기에 코드를 작성합니다.
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  // TODO: 여기에 코드를 작성합니다.
  heap.push(item);
  let curIdx = heap.length - 1;
  let pIdx = getParentIdx(curIdx);
  while (pIdx >= 0 && heap[curIdx] > heap[pIdx]) {
    swap(curIdx, pIdx, heap);
    curIdx = pIdx;
    pIdx = getParentIdx(curIdx);
  }
  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};
