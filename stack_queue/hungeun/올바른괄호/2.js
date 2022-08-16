function solution(s) {
  var answer = true;

  let deadline = 0;

  for (let element of s) {
    // const 는 왜 시간 초과?
    if (element === "(") {
      deadline++;
    } else if (element === ")") {
      deadline--;
    }
    if (deadline < 0) {
      answer = false;
      return answer;
    }
  }

  if (deadline !== 0) {
    answer = false;
  }
  return answer;
}
