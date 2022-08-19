function solution(progresses, speeds) {
  let answer = [];
  
  let finDays = progresses.map((progresses, idx) => Math.ceil((100 - progresses) / speeds[idx]))
  console.log("finDays",finDays);
  
  let maxDay = finDays[0];
  let deploy_cnt = 1;
  
  for(let i = 1; i < finDays.length; i++){
    if( finDays[i] <= maxDay ) {
        deploy_cnt++;
    } else {
        maxDay = finDays[i];
        answer.push(deploy_cnt);
        deploy_cnt=1;
    } 
  }
  answer.push(deploy_cnt);
  return answer;
}