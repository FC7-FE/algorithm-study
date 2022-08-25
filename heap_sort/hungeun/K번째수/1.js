function solution(array, commands) {
  var answer = [];

  commands.forEach((data) => {
    const start = data[0] - 1;
    const end = data[1];
    const index = data[2] - 1;

    answer.push(array.slice(start, end).sort((a, b) => a - b)[index]);
  });
  return answer;
}
