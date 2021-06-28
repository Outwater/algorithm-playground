function solution(begin, target, words) {
  // bfs 방식으로 모든 경우의 수를 탐색한다.
  // 0) 변수선언
  // cnt - 단어변환 횟수
  // queue - bfs를 위한 큐
  // visited - 사용했던 words 모음

  // 1) findWords
  // word를 받아, 1글자만 바꾸어 변환 가능한 단어배열을 반환

  // 2) bfs탐색
  // target과 일치하는 단어가 있을 때 까지 탐색하여 cnt반환, 앖디먄 0 리턴

  let queue = [[begin, 0]];
  let visited = [];

  function findWords(word) {
    let possibleWords = [];
    for (let i = 0; i < words.length; i++) {
      let diffCnt = 0;

      for (let j = 0; j < words[i].length; j++) {
        if (word[j] !== words[i][j]) diffCnt++;
        if (diffCnt > 2) break;
      }

      if (diffCnt === 1) {
        possibleWords.push(words[i]);
      }
    }
    return possibleWords;
  }

  while (queue.length !== 0) {
    let [value, cnt] = queue.shift();
    if (value === target) {
      return cnt; // [hot -> dot -> lot -> log -> cog ] // return 하면 Math.min 의미 없는데 최소값 어떻게 보장하지?의문 => bfs이기 때문에 cnt가 작은 순서대로 모든 경우의 수 찾으므로 최소cnt보장
    }
    visited.push(value);
    // findWords 중에서 방문한적 없는 (!visited[]) 단어만 추출
    let pWords = findWords(value).filter((el) => {
      return !visited.includes(el);
    });
    pWords.map((el) => queue.push([el, cnt + 1]));
  }

  return 0;
}
