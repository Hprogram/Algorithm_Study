function solution(price, money, count) {
  let result = -1;
  // 이용료를 임시 저장할 변수
  let sum = 0;

  // count 만큼 반복
  for (let i = 1; i <= count; i++) {
    // sum 에 price를 n번째 이용할 떄마다 이용료를 올려서 받음.
    sum = sum + price * i;
  }

  // sum이 money보다 크면 모자라는 금액만큼 리턴
  // 그렇지 않다면 0을 리턴
  if (sum > money) {
    result = sum - money;
  } else {
    result = 0;
  }

  // 결과 출력
  return result;
}
