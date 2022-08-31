function solution(numbers) {
  let temp = numbers.map((a) => String(a)).sort((a, b) => b + a - (a + b));

  if (temp.every((a) => a === "0")) {
    return "0";
  } else {
    return temp.join("");
  }
}
