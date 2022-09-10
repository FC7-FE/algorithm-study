function solution(people, limit) {
  var answer = 0;

  people = people.sort((a, b) => a - b);
  let i = 0;
  while (i < people.length) {
    if (people[i] + people.pop() <= limit) i++;
    answer++;
  }
  return answer;
}
