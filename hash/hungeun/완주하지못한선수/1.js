function solution(participant, completion) {
  var answer = "";
  participant.sort();
  completion.sort();
  let i = 0;
  while (true) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
    i++;
  }
  return answer;
}
