/* 
*`문제요약`
  - **input :** 각 사람의 선호투표리스트가 주어지고
  - **output :  1)** 조건에 따라 당선된 사람의 번호와 **2)** 당선까지의 투표횟수를 구하는 문제
* `key` 조건에 따른 구현 및 최대 최소의 sort
* `소요시간` 55분
* `어려웠던 점` 문제를 올바르게 이해하는 것에서 시간 소요 ( 처음 조건 파악을 잘못함)
  - 여러 반복문 사용에 대한 경계를 명확히 하는 것
    - 투표 행위에 대한 반복, 개인의 투표에 대한 반복, 결과 확인을 위한 반복
    - `try` 각 반복이나 행위에 대해서 함수화를 통해 구분지어주었으면 더 좋았을 것 같다.
* 수도코드
1. 최대 N번까지 가능 (for문 N )
    let voteCnt = i;
2. 투표 수 세기
2.1) orders 순회
    let cnt = Array(N).fill(0)
    1) i번째 값으로 투표 수 증가

2.2) 투표 완료 후, 결과 보기
    0) 탈락 번호에 있는 사람 값 0으로 초기화 

    1) 절반 이상 득표 확인 (for문 - j)
        1.1) 절반 이상인 사람 등록
             2명 확인
            => 출석번호 높은 사람, 당선 return [voteCnt, j]
    2) 절반 이하,
        1.1) 가장 적게 받은 사람 등록
            여러명일 경우, 출석번호 낮은 사람 탈락
            탈락 번호 등록
*/

function solution(orders) {
  let failList = [];

  for (let voteCnt = 1; voteCnt <= orders.length; voteCnt++) {
    let cntList = Array(orders.length).fill(0);
    let candidateLeader = [];
    let candidateFail = [];

    // 2.1) 투표하기
    orders.forEach((el) => {
      for (let c = 0; c <= el.length - 1; c++) {
        if (failList.includes(el[c])) continue;
        cntList[el[c]] += 1;
        break;
      }
    });
    // console.log('투표결과:' , cntList);

    // 2.2.0) 탈락한 후보자들에 대한 투표 무효처리
    cntList = cntList.map((el, idx) => {
      if (failList.includes(idx)) return 9999;
      return el;
    });

    // 2.2.1) 당선/탈락에 대한 후보자 뽑기
    let [half, min] = [Math.ceil(orders.length / 2), Math.min(...cntList)];

    cntList.forEach((el, idx) => {
      if (el >= half && el !== 9999) {
        candidateLeader.push(idx);
      }
      if (el === min) {
        candidateFail.push(idx);
      }
    });
    // 2.2.2) 후보자들 중 조건에 맞게 당선/탈락자 선정
    failList.push(Math.min(...candidateFail));
    // console.log('절반이하 투표자', candidateFail, '탈락자', Math.min(...candidateFail), '탈락자리스트', failList);
    if (candidateLeader.length > 0) {
      // console.log('절반이상 등장, 투표종료', [voteCnt, Math.max(...candidateLeader)]);
      return [voteCnt, Math.max(...candidateLeader)];
    }
  }
}
console.log(solution()); //
console.log(solution()); //
