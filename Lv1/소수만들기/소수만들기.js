function solution(nums) {
  let result = 0;
  let first = 0;
  let second = 0;
  let third = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    // 첫번째 숫자 선택
    first = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      // 두번째 숫자 선택
      second = nums[j];
      for (let z = j + 1; z < nums.length; z++) {
        // 세번째 숫자 선택
        third = nums[z];
        // 숫자를 모두 더해주고 소수 판별식을 적용시킨뒤 true라면 result를 한개 올려준다.
        sum = first + second + third;
        if (isPrime(sum) === true) {
          result++;
        }
      }
    }
  }

  return result;
}

function isPrime(num) {
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      // 한 번이라도 나누어 졌으니 소수가 아니므로 false
      return false;
    }
  }
  // 나눠진 수가 없다면 해당 수는 소수이므로 true
  return true;
}

// 숫자를 3개를 선택해야 하므로 3중 반복문을 사용하는 방법을 생각.
// 제곱근을 이용한 소수 판별식을 사용 (시간 복잡도가 가장 빠르다)
// 함수를 따로 만들어 사용하면 식을 훨씬 더 직관적으로 작성 할 수 있다.
