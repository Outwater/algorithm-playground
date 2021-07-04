// 1. A를 sort한다.
// 2. A마지막 값이 1보다 작으면, 1리턴
// 3. A를 set 객체로 만들어 중복을 없애준다.
// 4. set를 순회한다.
//  4.1 'i' 를 가지고 있지 않을 경우, i 리턴
//  4.2 모든 i 를 가지고 있을 경우, set의 size + 1 리턴 [1,2,3] => 4리턴

function solution(A) {
  A.sort((a, b) => a - b);
  if (A[A.length - 1] < 1) return 1;

  const set = new Set(A);

  for (let i = 1; i < set.size + 1; i++) {
    if (!set.has(i)) return i;
  }

  return set.size + 1;
}
