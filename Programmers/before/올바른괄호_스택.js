function solution (s) {
  const stack = [];
  const OPEN_BRACKET = '(';
  const CLOSE_BRACKET = ')';

  // 1) s를 순회
  for (let i = 0; i < s.length; i++) {
    // 1-1) ')'인데 스택이 비어있는 경우 false 리턴
    if (s[i] === CLOSE_BRACKET && stack.length === 0) {
      return false;
    }
    // 1-2) '(' 인 경우 stack 에 추가한다.
    if (s[i] === OPEN_BRACKET) {
      stack.push(s[i]);
    } else {
      // 1-3) ')'이고 stack이 비어있지 않은 경우 stack의 마지막 요소를 빼낸다.
      stack.pop();
    }
  }
  // 2) 순회이후 스택 길이가 0이 아니라면 괄호의 개수가 다른 것이므로 false
  return stack.length === 0;
}

solution('()()');
