function solution(num) {
  // 결과 반복 횟수 저장 변수
  let result = 0;
  // 최대 500회만 반복해 주기 위한 변수
  let count = 0;

  // 최대 500번 실행
  while (count < 500) {
    // num이 1이라면 break
    if (num === 1) {
      break;
    }

    // num이 짝수라면 / 2
    // 홀수라면 * 3 + 1
    // 반복횟수 + 1
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    result++;
    count++;
  }

  // 500회를 반복했음에도 1이 아니라면 -1 반환
  if (num !== 1) {
    return -1;
  }

  // 결과 반환
  return result;
}
