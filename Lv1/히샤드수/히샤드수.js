function solution(x) {
  // 숫자를 분리한다.
  let nums = String(x).split("");
  // 자릿수 더한 값을 저장하는 변수
  let sum = 0;

  // 자릿수를 더해준다.
  for (let i = 0; i < nums.length; i++) {
    sum = sum + Number(nums[i]);
  }

  // 해당 수를 더해진 값으로 나누었을때 완전히 떨어지면 true
  // 아니라면 false
  return x % sum === 0 ? true : false;
}
