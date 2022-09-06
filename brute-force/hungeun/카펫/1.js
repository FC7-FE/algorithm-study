function solution(brown, yellow) {
  var answer = [];
  const carpet_sum = brown + yellow;
  let possible = [];

  for (i = 1; i < parseInt(Math.sqrt(carpet_sum)) + 1; i++) {
    if (Number.isInteger(carpet_sum / i)) {
      possible.push([i, carpet_sum / i]);
    }
  }
  possible.forEach((data) => {
    if ((data[0] - 2) * (data[1] - 2) === yellow) answer = [data[1], data[0]];
  });
  return answer;
}
