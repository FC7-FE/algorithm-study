function getPermutation(arr, num) {
  const res = [];
  if (num === 1) return arr.map((data) => [data]);
  arr.forEach((data, i, arr) => {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const permutations = getPermutation(rest, num - 1);
    const attach = permutations.map((permutation) => [data, ...permutation]);
    res.push(...attach);
  });
  return res;
}

function solution(numbers) {
  var answer = 0;
  let sure = [];
  let arr = numbers.split("");

  // 조합
  let permutations_arr = [];
  for (i = 1; i < arr.length + 1; i++) {
    getPermutation(arr, i).forEach((data) => {
      permutations_arr.push(parseInt(data.join("")));
    });
  }

  //중복 제거
  permutations_arr = [...new Set(permutations_arr)];

  //소수 거르기
  permutations_arr.forEach((num) => {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    sure.push(num);
  });

  return (answer = sure.length);
}
