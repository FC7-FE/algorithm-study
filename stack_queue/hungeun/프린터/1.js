function solution(priorities, location) {
  let answer = 0;

  let count = 0;
  let myDoc = location;

  while (priorities.length > 0) {
    let MAX = Math.max(...priorities);

    if (MAX > priorities[0]) {
      priorities.push(priorities.shift());
    } else {
      priorities.shift();
      count++;
      if (myDoc == 0) {
        return (answer = count);
      }
    }

    myDoc--;
    if (myDoc === -1) {
      myDoc = priorities.length - 1;
    }
  }
  return answer;
}
