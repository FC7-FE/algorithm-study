function solution(array, commands) {
  let newArr = [];

  for (let i = 0; i < commands.length; i++) {
    const valueArr = commands[i];

    const resultArr = array
      .slice(valueArr[0] - 1, valueArr[1])
      .sort((a, b) => a - b);

    newArr.push(resultArr[valueArr[2] - 1]);
  }

  return newArr;
}
