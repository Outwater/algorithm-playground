function solution(line) {
  let result = line[0];

  let again = false;

  for (let i = 1; i < line.length; i++) {
    let curr = line[i];
    let prev = line[i - 1];

    if (curr === prev && again === false) {
      again = true;
      result += "*";
    } else if (curr !== prev) {
      result += curr;
      again = false;
    }
  }
  return result;
}
