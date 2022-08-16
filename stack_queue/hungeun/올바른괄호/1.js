function solution(s) {
  var answer = true;

  let temp = [];
  let deadline = 0;

  s.split("").forEach((element) => {
    if (element === "(") {
      temp.push(1);
      deadline += 1;
    } else if (element === ")") {
      temp.push(-1);
      deadline -= 1;
    }
    if (deadline < 0) {
      answer = false;
      return answer;
    }
  });

  if (sum(temp) === 0) {
    if (temp[0] !== 1 || temp.slice(-1)[0] !== -1) {
      answer = false;
    }
  } else {
    answer = false;
  }
  return answer;
}

function sum(data) {
  const initialValue = 0;
  const sumWithInitial = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return sumWithInitial;
}
