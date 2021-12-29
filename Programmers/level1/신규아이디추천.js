// 정규식이용해서 풀기
function solution(new_id) {
  let regax_id = new_id
    .toLowerCase() // 소문자로
    .replace(/[^\w-.]/g, "") // []: or, ^:not, \w: 알파벳소문자,숫자,_ , -.:문자 , /g 전체검색
    .replace(/\.+/g, ".") // \. : .문자 , + : 1개 이상  => .문자가 1개 이상 있다면 .로 대체
    .replace(/^\.|\.$/g, "") // ^: 시작, $: 끝 => 시작과 끝에 .문자 있으면 삭제
    .replace(/^$/, "a") // 시작과끝이 '' => 빈문자열이면 "a"로 대체
    .slice(0, 15)
    .replace(/\.$/, ""); // .로 끝나면 => 해당 문자 삭제

  if (regax_id.length <= 2) {
    const lastS = regax_id[regax_id.length - 1];
    regax_id += lastS.repeat(3 - regax_id.length); //lastS와 regax_id 길이 합치면 3이 되도록
  }

  return regax_id;
}

function solution(new_id) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let number = "1234567890";
  let sign = "-_.";
  let filter_id = new_id
    .toLowerCase()
    .split("")
    .filter((s) => {
      if (
        alphabet.indexOf(s) > -1 ||
        number.indexOf(s) > -1 ||
        sign.indexOf(s) > -1
      ) {
        return s;
      }
    })
    .join("");
  while (filter_id.indexOf("..") > -1) {
    const index = filter_id.indexOf("..");
    filter_id = filter_id.slice(0, index) + filter_id.slice(index + 1);
  }
  if (
    filter_id.indexOf(".") === 0 ||
    filter_id.indexOf(".") === filter_id.length - 1
  ) {
    const index = filter_id.indexOf(".");
    filter_id = filter_id.slice(0, index) + filter_id.slice(index + 1);
  }
  if (filter_id === "") {
    filter_id = "a";
  }
  if (filter_id.length >= 16) {
    filter_id = filter_id.slice(0, 15);
  }

  if (filter_id.lastIndexOf(".") === filter_id.length - 1) {
    const index = filter_id.lastIndexOf(".");
    filter_id = filter_id.slice(0, index) + filter_id.slice(index + 1);
  }
  if (filter_id.length <= 2) {
    const lastS = filter_id[filter_id.length - 1];
    filter_id += lastS.repeat(3 - filter_id.length);
  }

  return filter_id;
}
