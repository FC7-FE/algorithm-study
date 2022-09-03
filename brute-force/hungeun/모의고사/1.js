function solution(answers) {
  var answer = [];

  const x = parseInt(answers.length / 8) + 1;

  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  first = [...Array(answers.length)].map((_, x) => first[x % 5]);
  second = [...Array(answers.length)].map((_, x) => second[x % 8]);
  third = [...Array(answers.length)].map((_, x) => third[x % 10]);

  let individual = [0, 0, 0];

  answers.forEach((data, i) => {
    if (data === first[i]) {
      individual[0]++;
    }
    if (data === second[i]) {
      individual[1]++;
    }
    if (data === third[i]) {
      individual[2]++;
    }
  });

  const MAX = Math.max(...individual);
  individual.forEach((data, i) => {
    if (data === MAX) {
      answer.push(i + 1);
    }
  });

  return answer;
}
