function solution(record) {
  // 접근
  // reord가 100,000 이기 때문에, 전체 순회하며 조건에 맞게 변경해주는 방식으로 접근

  //풀이방법
  // 1) record를 총 2번 순회하며 결과도출
  // 1-1) 첫번째 순회 시, 최종적으로 변경된 Id와 Nickname의 쌍을 구함
  // users = {uid1234: Prodo, uid4567: Ryan}

  // 1-2) 두번째 순회 시, 명령어객체와 users객체를 이용하여 알맞은 메세지를 출력하도록 함
  // ['Enter', 'uid1234'] => 'Prodo' + '님이 들어왔습니다.'

  // 0) 변수선언
  // 최종적으로 담기는 메세지 배열 (answer [])
  // 명령어를 메세지로 바꾸는 객체 (cmdToMsg {})
  // record 요소를 다루기 쉽게 배열로 바꿈 (recordArr [])
  // id를 key 최종 변경 닉네임을 value로 갖는 객체 (users {})

  let answer = [];
  let cmdToMsg = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };
  //0) 변수선언 및 입력변경
  // 명령어 / id / nickName 구분하기
  // [[Enter, uid1234, Muzi], [Enter, uid4567, Prodo], ...
  let recordArr = record.map((el) => el.split(" "));
  let users = {};

  // record 2번 순회

  // 1-1) users 만들기 { 최종 id: nickname }
  // 첫번째 record를 순회
  // 명령어(c)가 Enter || Change 경우 nickname 등록
  for (let i = 0; i < recordArr.length; i++) {
    let [c, id, nickname] = recordArr[i];
    if (c === "Enter" || c === "Change") {
      users[id] = nickname;
    }
  }

  //1-2) 메세지만들기
  // users = {uid1234: Prodo, uid4567: Ryan}
  // 두번째 record 순회
  // users에서 nickName을 가져오고, cmdToMsg에서 뒤의 메세지를 가져와 연결한다.
  for (let i = 0; i < recordArr.length; i++) {
    let [c, id] = recordArr[i];
    if (c === "Change") {
      continue;
    }
    answer.push(users[id] + cmdToMsg[c]);
  }
  return answer;
}
