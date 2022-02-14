/*

...날라감


차량별 총시간 알면 계산가능
{
    1111: [05:34, 07:59,22:59, 23:00],
    1111: [05:34, 07:59,22:59],
}

[
[차량번호, 총 시간],

]

1) 마지막 시간 추가
2) 차량번호 오름차순으로 정렬
*/
function solution(fees, records) {
  const park_records_by_car = {};
  const result = [];

  const convertTimeToMin = (strTime) => {
    const [hour, min] = strTime.split(":").map((e) => Number(e));
    return hour * 60 + min;
  };

  const getTotalTime = (records) => {
    let time = 0;
    if (records.length % 2 !== 0) {
      records.push(convertTimeToMin("23:59"));
    }
    for (let i = 0; i < records.length; i = i + 2) {
      time += records[i + 1] - records[i];
    }

    return time;
  };
  const getTotalCost = (time) => {
    const [basic_time, basic_cost, unit_time, unit_cost] = fees;
    if (time <= basic_time) return basic_cost;

    const totalCost =
      basic_cost + Math.ceil((time - basic_time) / unit_time) * unit_cost;
    return totalCost;
  };

  records.forEach((record) => {
    const [time, carNumber, inOrOut] = record.split(" ");
    if (!park_records_by_car[carNumber]) {
      park_records_by_car[carNumber] = [];
    }
    park_records_by_car[carNumber].push(convertTimeToMin(time));
  });

  Object.entries(park_records_by_car).forEach(([carNumber, parkRecords]) => {
    const totalTime = getTotalTime(parkRecords);
    const totalCost = getTotalCost(totalTime);

    result.push([carNumber, totalCost]);
  });

  return result.sort((a, b) => a[0] - b[0]).map((el) => el[1]);
}
