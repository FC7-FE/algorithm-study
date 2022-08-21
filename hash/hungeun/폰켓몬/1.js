function solution(nums) {
  var answer = 0;

  let set = new Set(nums);
  const MAX = nums.length / 2;

  answer = Math.min(MAX, set.size);
  return answer;
}
