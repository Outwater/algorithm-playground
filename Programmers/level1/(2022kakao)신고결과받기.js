//* 난이도 및 풀이 시간
// start 5:14 end: 5:44  : 30분
// 실제 난이도: lv1 체감 난이도: lv1
//* 문제이해
// 불량이용자 신고 및 처리 결과 발송
//  조건1) 1번에 1명의 유저 신고 가능
//  2) 신고횟수 제한 x, 서로 다른 유저 신고가능(여러명 신고가능, 단 여러번에 걸쳐)
//  3) 한 유저 여러번 신고가능but 동일한 유저에 대한 신고는 1회로 처리(?)

//  조건2) k번 이상 신고된 유저는 정지 & 정지된 유저를 신고한 유저는 처리 결과 메일 발송
//   - 신고 내용은 취합하여 마지막에 한 번에 유저를 정지 & 메일 발송

//  사용자는 1번에 1명씩 신고할 수 있다.
//  최종적으로 k번 이상 신고된 유저는 사용정지 처리
//  이 때 사용정지된 유저를 신고한 유저에게 처리결과를 발송해야한다.

// 처리결과 발송 횟수를 담은 배열을 만들어 return

//* 아이디어
// 1) 자신을 신고한 유저를 관리해야한다.
// muzi: [apeach]
// frodo: [muzi, apeach]
// apeach: []
// neo: [muzi, frodo]

// 2) 신고핫 유저 횟수가 k이상일 때, 해당 유저들의 메일 발송 횟수를 높여준다.
// {muzi: 2 , frodo: 1, apeach: 1, neo: 0 }

//* 풀이방법(순서도, 절차적프로그래밍)
// 1. 신고유저목록, mailCnt 기본값 세팅
// 2. 중복신고 제거하기
// 3. report 순회하며, 신고유저목록 만들기
// 4. 신고유저목록 순회하며, 신고횟수 k이상일 때, 신고자들의 mailCnt 올려주기
// 5. mailCnt의 횟수를 파싱하여 리턴
//* 시간복잡도
// O(N^2) 2000이므로 가능

//* 복습필요여부
// No
function solution(id_list, report, k) {
  const report_user_list = {};
  const mailCnt = {};

  // 1.기본값 세팅
  id_list.forEach((el) => {
    report_user_list[el] = [];
    mailCnt[el] = 0;
  });

  // 2. 중복 신고 제거
  report = [...new Set(report)];

  // 3. 신고유저목록 만들기
  report.forEach((r) => {
    let [repoter, reportee] = r.split(" ");
    report_user_list[reportee].push(repoter);
  });

  // 4. 정지유저를 찾고, 정지유저 신소한 유저들의 mail횟수 늘려주기
  Object.entries(report_user_list).forEach(([reportee, reporter_list]) => {
    if (reporter_list.length >= k) {
      reporter_list.forEach((reporter) => {
        mailCnt[reporter] += 1;
      });
    }
  });

  return Object.values(mailCnt);
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
); //	[2,1,1,0]

console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
); //	[0,0]
