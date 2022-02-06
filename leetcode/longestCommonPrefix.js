//* 난이도 및 풀이 시간
// 실제 난이도: easy 체감 난이도: easy
//* 문제이해
// 문자열 배열이 주어졌을 때, 가장 긴 prefix를 찾아내 리턴하는 문제
//* 아이디어
// strs의 길이로 오름차순 정렬을 한다.
// 가능한 가장 긴 prefix는 가장 길이가 짧은 str이 된다.(strs[0])
// strs를 순회하며, prefix의 값을 줄여간다.
// 1번이라도 prefix가 없다면 바로 return ''
//* 풀이방법(순서도, 절차적프로그래밍)
// 1. strs를 길이순으로 sort
// 2. strs를 순회하며, 현재값과 현재 prefix의 공통된 prefix를 찾는다.
// 2.1 없다면 바로 return '' 종료
// 3. 있다면 현재 prefix값을 바꾸고, continue
//* 시간복잡도
// sort: NlogN
// 최악 N^2

//* 복습필요여부
//

function longestCommonPrefix(strs) {
  strs.sort((a, b) => a.length - b.length);

  function findMatch(a, b) {
    let prefix = "";
    for (let i = 0; i < a.length; i++) {
      let matcher = a.slice(0, i + 1);
      if (b.indexOf(matcher) === 0) {
        prefix = matcher;
      } else {
        return prefix;
      }
    }
    return prefix;
  }

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let cur = strs[i];
    if (!findMatch(prefix, cur)) {
      return "";
    }
    prefix = findMatch(prefix, cur);
  }
  return prefix;
}
console.log(longestCommonPrefix(["reflower", "flow", "flight"])); // fl
console.log(longestCommonPrefix(["ab", "a"])); // a
