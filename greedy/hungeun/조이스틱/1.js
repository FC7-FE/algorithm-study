function solution(name) {
  let answer = 0;
  let minMoves = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    answer += 13 - Math.abs(78 - name.charCodeAt(i));

    let index = i + 1;
    while (index < name.length && name[index] == "A") index++;

    minMoves = Math.min(minMoves, i * 2 + name.length - index);
    minMoves = Math.min(minMoves, (name.length - index) * 2 + i);
  }

  return answer + minMoves;
}
