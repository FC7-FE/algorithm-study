function solution(number, k) {
  let temp = [];
  for (let i = 0; i < number.length; i += 1) {
    while (k > 0 && temp.length > 0 && temp.slice(-1) < number[i]) {
      temp.pop();
      k -= 1;
    }
    temp.push(number[i]);
  }

  temp.length = number.length - k;

  return temp.join("");
}
