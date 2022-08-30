function solution(operations) {
  var answer = [];
  let arr = [];

  operations.forEach((data) => {
    let command = data.split(" ")[0];
    let num = parseInt(data.split(" ")[1]);

    if (command === "I") {
      if (arr.length === 0) arr.push(parseInt(num));
      else {
        if (num < arr[0]) arr.unshift(num);
        else if (num > arr.slice(-1)[0]) arr.push(num);
        else {
          for (i = 0; i < arr.length - 1; i++) {
            if (arr[i] < num && num < arr[i + 1]) {
              arr.splice(i + 1, 0, num);
            }
          }
        }
      }
    } else {
      num === 1 ? arr.pop() : arr.shift();
    }
  });

  arr.length === 0 ? (answer = [0, 0]) : (answer = [arr.slice(-1)[0], arr[0]]);

  return answer;
}
