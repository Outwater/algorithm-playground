function solution(n, student, point) {
  let changeCnt = 0;
  let rank = Array.from({ length: n }, (_, i) => [0, i + 1]);

  for (let i = 0; i < student.length; i++) {
    let prevRank = rank;
    // 점수 주기
    rank = rank.map((el) => {
      let [currScore, studentNum] = el;
      if (student[i] === studentNum) {
        return [currScore + point[i], studentNum];
      }
      return el;
    });
    // 득점 순으로 순서 정하기
    rank.sort((a, b) => {
      if (b[0] === a[0]) {
        return a[1] - b[1];
      }
      return b[0] - a[0];
    });

    // 변경 여부 검사하기
    if (isNeedChange(prevRank, rank)) {
      changeCnt += 1;
    }
  }

  return changeCnt;
}

function isNeedChange(prev, curr) {
  let n = curr.length;
  let prevStudents = prev.slice(0, n / 2).map((el) => el[1]);
  let currStudents = curr.slice(0, n / 2).map((el) => el[1]);

  for (let i = 0; i < n / 2; i++) {
    let studentNum = prevStudents[i];
    if (!currStudents.includes(studentNum)) {
      return true;
    }
  }
  return false;
}
