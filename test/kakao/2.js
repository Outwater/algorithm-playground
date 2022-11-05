/* 
* 문제 타입

* 난이도 및 풀이 시간
start:
end:
실제 난이도:  체감 난이도:
* 문제이해

* 아이디어

* 풀이방법(순서도, 절차적프로그래밍)
1.
2.
3.
* 시간복잡도
O()

* 복습필요여부

*/
function solution(cap, n, deliveries, pickups) {
  let total = 0;
  let isClear = new Array(n - 1).fill(0);

  while (isClear.reduce((acc, cur) => acc * cur, 1) !== 1) {
    // while (
    //   deliveries.reduce((acc, cur) => acc + cur) +
    //     pickups.reduce((acc, cur) => acc + cur) !==
    //   0
    // ) {
    // while (cnt > 0) {
    let [delCnt, pickCnt] = [cap, cap];
    let dis = 0;

    for (let i = n - 1; i >= 0; i--) {
      //
      if (deliveries[i] === 0 && pickups[i] === 0) {
        continue;
      }

      if (delCnt - deliveries[i] >= 0) {
        let memoCnt = delCnt;
        delCnt -= deliveries[i];
        deliveries[i] = 0;
        if (memoCnt !== delCnt) {
          console.log("dis", dis, i + 1);
          dis = Math.max(dis, i + 1);
        }
      }
      if (pickCnt - pickups[i] >= 0) {
        let memoCnt = pickCnt;
        pickCnt -= pickups[i];
        pickups[i] = 0;
        if (pickCnt !== memoCnt) {
          console.log("dis", dis, i + 1);
          dis = Math.max(dis, i + 1);
        }
      }

      if (deliveries[i] === 0 && pickups[i] === 0) {
        isClear[i] = 1;
      }

      if (pickCnt === 0 && delCnt === 0) {
        console.log("-----------break", total, dis);
        break;
      }
      console.log("t", i, total, deliveries, pickups, isClear);
    }

    total += 2 * dis;
  }

  return total;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0])); //
console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]));
