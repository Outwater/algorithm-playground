/* n === 4
l i n e
"line in line"
 "in    n          in"

 대문자: shift + 소문자
 문자열의 길이가 점수
 대문자 있을 경우 +1 점
 완성하지 못하면 점수 x

 문제: sentences와 사용가능문자개수 n이 주어질 때 얻을 수 있는 최대 점수 return

아이디어:
1. 공백을 제거하고, 공백만큼 점수 올려준다.
2. 대문자의 개수를 세고, 대문자가 있다면 n-1 하고, 대문자의 개수만큼 점수올려주고, 전부 소문자로 바꾼 후 check진행
3. check
 - map.get('l') 이 true라면, continue
 - map.get('l')이 없다면 set('l', true), nCnt += 1

4. if(nCnt > n) return 0
*/
function solution(sentences, n) {
  let score = 0;

  sentences.forEach((s) => {
    const s_score = get_s_score(s);
    score = Math.max(s_score, score);
  });

  function get_s_score(sentence) {
    let n_cnt = 0;
    let score = 0;
    let wordMap = new Map();
    const whitespace = sentence.match(/\s/g);
    if (whitespace) {
      score += whitespace.length;
      sentence = sentence.replace(/\s/g, "");
    }
    // console.log([sentence, score])
    //2. 대문자의 개수를 세고, 대문자가 있다면 n-1 하고, 대문자의 개수만큼 점수올려주고, 전부 소문자로 바꾼 후 check진행
    const upperCase_cnt = sentence.match(/[A-Z]/g);
    if (upperCase_cnt) {
      n_cnt += 1;
      score += upperCase_cnt.length;
      sentence = sentence.toLowerCase();
    }
    // console.log([sentence,score, n_cnt])

    // 3. check
    //  - map.get('l') 이 true라면, continue
    //  - map.get('l')이 없다면 set('l', true), nCnt += 1
    for (let i = 0; i < sentence.length; i++) {
      let w = sentence[i];
      if (wordMap.get(w)) {
        score += 1;
        continue;
      } else {
        n_cnt += 1;
        score += 1;
        wordMap.set(w, w);
      }
    }
    console.log([sentence, score, n_cnt, wordMap.values()]);
    if (n_cnt > n) return 0;
    return score;
  }

  return score;
}
