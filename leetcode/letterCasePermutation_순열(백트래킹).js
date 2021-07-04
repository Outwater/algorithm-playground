var letterCasePermutation = function (s) {
  // 알파벳을 만나면 lowercase로 1번 upperCase로 한 번 추가해준다.
  let result = [];
  let answer = "";

  function rec(word, idx) {
    if (idx === s.length) {
      result.push(word);
      return;
    }

    let c = s[idx];
    if (isNaN(c)) {
      rec(word + c.toLowerCase(), idx + 1);
      rec(word + c.toUpperCase(), idx + 1);
    } else {
      rec(word + c, idx + 1);
    }
  }
  rec(answer, 0);
  return result;
};
