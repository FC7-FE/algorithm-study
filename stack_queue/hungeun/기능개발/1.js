function solution(progresses, speeds) {
  var answer = [];
  let count = 0;

  let reverse_progresses = progresses.map((x) => 100 - x);

  let arr = reverse_progresses.map((x, i) =>
    x % speeds[i] !== 0 ? parseInt(x / speeds[i]) + 1 : parseInt(x / speeds[i])
  );

  while (arr.length > 1) {
    count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) {
        arr.shift();
        count++;
        answer.push(count);
        break;
      }
      if (arr[i] < arr[i + 1]) {
        arr.splice(0, i + 1);
        count++;
        answer.push(count);
        break;
      } else {
        count++;
      }
    }
  }
  if (arr.length > 1) {
    answer.push(1);
  }
  return answer;
}

solution([93, 30, 55], [1, 30, 5]);
