/*
start 16:00
end: 16:40

조건1. 각 유저 1번에 1명 유저 신고
 1_ 1명의 유저당 신고횟수는 제한x (a,b) (a,c) (a,d) 가능
 2_ 한 유저 여러번 신고가능 but 1회 처리 (a,b),(a,b) 가능 -> (a,b) 1회 처리
 
조건2. k번 이상 신고되면 정지, 정지된 유저를 신고한 유저에게 메일 발송
    k:2, (a, c) (b, c) ->c는 정지, 메일발송(a), 메일발송(b)
    

아이디어
: 신고유저리스트와 메일발송횟수 객체를 만든다.
: 유저리스트를 순회하며, 신고자리스트의 수가 k이상일 경우, 해당 신고자리스트를 순회하며 메일발송 작업을 한다.
: 메일발송 작업은 해당하는 유저의 메일발송횟수를 높이는 것

 1_ 신고유저리스트 ( { key: Set() } )
    { 사용자A: [신고한사람A, C, ...],
    사용자B: [신고한사람A, B, ...],
    ... }
  
  2_ 메일발송횟수 객체 : {
    사용자A: 2
    사용자B: 3
    }
 
*/

function solution(id_list, report, k) {
  const user_report = {};
  const report_cnt_list = {};
  // 0. make메일발송 횟수 객체
  id_list.forEach((id) => {
    report_cnt_list[id] = 0;
  });

  // 1. make 신고유저리스트
  report.forEach((r) => {
    let [reporter, reportee] = r.split(" ");
    if (!user_report[reportee]) {
      user_report[reportee] = new Set().add(reporter);
    } else {
      user_report[reportee].add(reporter);
    }
  });

  // 2. 신고 및 메일발송 처리
  Object.entries(user_report).forEach(([reportee, list]) => {
    if (list.size >= k) {
      [...list].forEach((reporter) => (report_cnt_list[reporter] += 1));
    }
  });
  return Object.values(report_cnt_list);
}
