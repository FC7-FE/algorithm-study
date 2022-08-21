function solution(clothes) {
  var answer = 0;

  let closet = new Map();

  clothes.forEach((clothes) => {
    if (closet.has(clothes[1])) {
      closet.set(clothes[1], closet.get(clothes[1]) + 1);
    } else {
      closet.set(clothes[1], 1);
    }
  });
  const values = closet.values();

  // if (closet.size === 1){
  //     answer = values.next().value
  // } else {
  let sum = 1;
  for (value of values) {
    sum *= value + 1;
  }
  answer = sum - 1;
  // }
  return answer;
}
