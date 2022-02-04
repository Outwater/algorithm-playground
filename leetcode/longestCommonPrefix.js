//* 난이도 및 풀이 시간
// start:
// end:
// 실제 난이도:  체감 난이도:
//* 문제이해
//
//* 아이디어
//
//* 풀이방법(순서도, 절차적프로그래밍)
// 1.
// 2.
// 3.
//* 시간복잡도
// O()

//* 복습필요여부
//

function longestCommonPrefix(strs) {
  strs.sort((a, b) => a.length - b.length);

  function findMatch(a, b) {
    let prefix = "";
    for (let i = 0; i < a.length; i++) {
      let matcher = a.slice(0, i + 1);
      if (b.indexOf(matcher) > -1) {
        console.log("inside", prefix, matcher);
        prefix = matcher;
      } else {
        return prefix;
      }
    }
    console.log("here", prefix);
    return prefix;
  }

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let cur = strs[i];
    console.log(findMatch(prefix, cur), i);
    console.log(prefix, cur);
    if (!findMatch(prefix, cur)) {
      return "";
    }
    prefix = findMatch(prefix, cur);
  }
  return prefix;
}
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // fl
console.log(longestCommonPrefix(["ab", "a"])); // a
