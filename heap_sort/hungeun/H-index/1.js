function count(arr, num) {
  let cnt = 0;
  arr.forEach((data) => {
    if (data >= num) {
      cnt++;
    }
  });
  return cnt;
}

function solution(citations) {
  var answer = 0;
  citations.sort((a, b) => b - a);

  for (i = 0; i < citations.length; i++) {
    if (count(citations, citations[i]) <= citations[i]) {
      answer = i + 1;
    }
  }
  return answer;
}
