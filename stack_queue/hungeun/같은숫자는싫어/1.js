function solution(arr) {
  var answer = [];
  let std = arr[0];
  answer.push(arr[0]);

  arr.forEach((element) => {
    if (element !== std) {
      answer.push(element);

      std = element;
    }
  });

  return answer;
}
