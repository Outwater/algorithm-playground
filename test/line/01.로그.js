/*
2. 길이가 100자가 넘어가면
4. 특수문자 있으면 수집x

 0. t, a , e m 이 올바르게 다들어있어야함
 1. 공백 들어갈 경우 수집x
 3. 4개 중 1개라도 누락 
 5. 가장 앞부분 공백있으면 수집x
 6. t, a, e, m 다음에 하나의 공백만 가능
*/
function solution(logs) {
  let count = 0;
  logs.forEach((log) => {
    checkLog(log);
  });

  function checkLog(log) {
    if (log.length > 100) {
      console.log("문자길이100자", log);
      return count++;
    }
    if (/[`~!@#$%^&*|\\\'\";\/?]/gi.test(log)) {
      console.log("특수문자", log);
      return count++;
    }

    if (
      !/^team_name : [a-zA-Z]+ application_name : [a-zA-Z]+ error_level : [a-zA-Z]+ message : [a-zA-Z]+$/.test(
        log
      )
    ) {
      console.log("형식", log);
      return count++;
    }
  }
  return count;
}

// console.log(
//   solution([
//     "team_name : db application_name : dbtest error_level : info message : test",
//     "team_name : test application_name : I DONT CARE error_level : error message : x",
//     "team_name : ThisIsJustForTest application_name : TestAndTestAndTestAndTest error_level : test message : IAlwaysTestingAndIWillTestForever",
//     "team_name : oberervability application_name : LogViewer error_level : error",
//   ])
// ); // 3
console.log(
  solution([
    "team_name : MyTeam application_name : YourApp error_level : info messag : IndexOutOfRange",
    "no such file or directory",
    "team_name : recommend application_name : recommend error_level : info message : RecommendSucces11",
    "team_name : recommend application_name : recommend error_level : info message : Success!",
    "   team_name : db application_name : dbtest error_level : info message : test",
    "team_name     : db application_name : dbtest error_level : info message : test",
    "team_name : TeamTest application_name : TestApplication error_level : info message : ThereIsNoError",
  ])
); //6
