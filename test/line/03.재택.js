// 10:52 - 11:30

/*
'재택근무하게될 사원들'의 번호를 배열로 리턴
- 팀의개수( num_teams), 재택가능업무(remote_tasks), 출근해야하는업무(office_tasks),
사원정보(employees - idx+1이 사원번호) 입력으로 주어짐

1. 재택 가능한 업무만 -> 재택근무대상자
2. 팀마다 최소 1명은 출근
 1) 모두 재택근무라면, 사원번호 빠른 사람 1명 출근


// 1. 재택근무자 / 출근가능자 구분하기
 ["1 development hometask","1 recruitment marketing"]
 remote [ [1,1],[2,3][2,4][3,5][3,7] ]
 office [ [1,2],[3,6] ]  -> [1,3] 가능할지도

  1-2) 사원 오름차순 정리
  1-3) office 팀순 오름차순 정리
  2. office를 순회하며, 비어있는 팀 확인
    2번팀 비어있음
 3. remote 순회하며, 비어있는 팀 가장 작은 멤버 remote에서 제외하기
 4. remote.length 리턴
*/
function solution(num_teams, remote_tasks, office_tasks, employees) {
  let remote = []; // [team_num, empl_num]
  let office = [];

  employees.forEach((employee, idx) => {
    const [team_num, ...tasks] = employee.split(" ");
    const empl_num = idx + 1;
    for (let i = 0; i < tasks.length; i++) {
      if (office_tasks.includes(tasks[i])) {
        office.push(Number(team_num));
        // office.push([team_num, empl_num]);
        return;
      }
    }
    remote.push([Number(team_num), empl_num]);
  });
  remote.sort((a, b) => a[1] - b[1]);
  office.sort((a, b) => a - b);

  for (let i = 1; i <= num_teams; i++) {
    if (!office.includes(i)) {
      find_go_office(i);
    }
  }

  return remote.map((e) => e[1]);

  function find_go_office(teamNumber) {
    const go_office_empl = remote.indexOf(
      remote.find((v) => v[0] === teamNumber)
    );
    remote.splice(go_office_empl, 1);
  }
}
