function solution(sizes) {
  var answer = 0;

  let row = 0;
  let col = 0;

  sizes.forEach((data) => {
    const sortedData = data.sort((a, b) => a - b);
    if (sortedData[0] > row) row = sortedData[0];
    if (sortedData[1] > col) col = sortedData[1];
  });

  answer = row * col;

  return answer;
}
