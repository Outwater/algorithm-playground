// 나의풀이: by 아스키코드
function solution(s, n) {
  let secret = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      secret += " ";
      continue;
    }
    let oriNum = s[i].charCodeAt(0);
    let newNum = 0;
    if (oriNum <= 90) {
      if (oriNum + n > 90) {
        newNum = 65 + oriNum + n - 90 - 1;
      } else {
        newNum = oriNum + n;
      }
    } else {
      if (oriNum + n > 122) {
        newNum = 97 + oriNum + n - 122 - 1;
      } else {
        newNum = oriNum + n;
      }
    }
    secret += String.fromCharCode(newNum);
  }
  return secret;
}

/*
 아스키코드 쓰지 않고, 처리
 textArr를 includes 여부를 통해 upper, lower 중 택1 하는 부분과
 index가 textArr.length를 초과하였을 때, index - textArr.length 해주는 부분 인상적
*/
function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}
console.log(
  's는 "a B z y x W V", n은 4인 경우: ' + solution("a B z y x W V", 4)
);

console.log('s는 "e G z", n은 26인 경우: ' + solution("e G z", 26));
