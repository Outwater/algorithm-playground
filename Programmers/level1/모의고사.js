

function solution(answers) {
  function getCorrectCnt(pattern, answers){
      let count = 0;
      
      for(let i = 0; i < answers.length; i++){
          let number = pattern[i % pattern.length]
          if(Number(number) === answers[i]){
              count = count + 1;
          }
      }
      
      return count;
  }

  const patterns = ['12345', '21232425', '3311224455']
  const correctCntList = patterns.map(p => getCorrectCnt(p, answers))
  const maxCnt = Math.max(...correctCntList)
  
  return correctCntList.reduce((acc, cur, idx)=>{
      if(cur === maxCnt){
          acc.push(idx+1)
      }
      return acc
  },[])
}