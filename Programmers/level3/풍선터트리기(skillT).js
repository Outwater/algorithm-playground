function solution(a) {
  // 번호가 더 작은 풍선을 터트리는 것은 최대 1번
  // 그 이후로는 큰 풍선만 터트린다.
  // 어떤풍선 최후가능 / 불가능
  // 최후가 가능한 풍선의 개수를 return

  /* point: 큰게 남기 힘들다
   자신 기준 왼쪽 오른쪽으로 가장 작은 값을 가져왔을 때, 한쪽이라도, 자신 보다 작은 값이 없다면(혹은 비었다면) 가능
  */

  //! O(N^2)으로 효율성 실패! -> O(N)으로 줄여야함
  let cnt = 0;

  for (let i = 0; i < a.length; i++) {
    let left = getLeft(a[i], i, a);
    let right = getLight(a[i], i, a);
    if (left || right) {
      cnt++;
    }
  }

  function getLeft(value, idx, arr) {
    let slice = arr.slice(0, idx);
    if (slice.length === 0) return true;
    let min = Math.min(...slice);
    if (value < min) return true;
    return false;
  }
  function getLight(value, idx, arr) {
    let slice = arr.slice(idx + 1);
    if (slice.length === 0) return true;
    let min = Math.min(...slice);
    if (value < min) return true;
    return false;
  }
  return cnt;
}
