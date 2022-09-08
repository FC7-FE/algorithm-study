function solution(n, lost, reserve) {
  var answer = 0;

  let student = new Array(n).fill(1);

  lost.forEach((e) => (student[e - 1] -= 1));
  reserve.forEach((e) => (student[e - 1] += 1));

  for (let i = 0; i < n; i++) {
    if (
      (student[i] === 0 && student[i + 1] === 2) ||
      (student[i + 1] === 0 && student[i] === 2)
    ) {
      student[i] = 1;
      student[i + 1] = 1;
    }
  }
  answer = student.filter((e) => e > 0).length;
  return answer;
}
