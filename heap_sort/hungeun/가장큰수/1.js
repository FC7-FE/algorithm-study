function solution(numbers) {
  var answer = "";
  let temp = numbers
    .map((data) => data.toString())
    .sort((a, b) => b + a - (a + b));
  answer = temp.join("");
  if (answer[0] === "0") {
    answer = "0";
  }
  return answer;
}
