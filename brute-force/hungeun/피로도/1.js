function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}

function solution(k, dungeons) {
  var answer = 0;
  const allCase = permutation(dungeons, dungeons.length);

  allCase.forEach((element) => {
    let tempK = k;
    let currentMax = 0;
    element.forEach((data) => {
      if (data[0] <= tempK) {
        tempK -= data[1];
        currentMax++;
      }
      if (currentMax > answer) answer = currentMax;
    });
  });
  return answer;
}
