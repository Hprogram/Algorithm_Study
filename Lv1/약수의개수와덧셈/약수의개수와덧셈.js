function solution(left, right) {
  let str = []; // 약수를 저장할 공간
  let result = 0; // 최종

  for (let i = left; i <= right; i++) {
    // left부터 rigth까지 반복
    for (let j = 1; j <= i; j++) {
      // 1부터 자기 자신까지 반복해서 약수의 개수를 찾음
      if (i % j === 0) {
        // 약수일 때 str에 푸시
        str.push(j);
      }
    }
    if (str.length % 2 === 0) {
      // 약수의 개수가 짝수면 +
      result = result + i;
      str = [];
    } else {
      // 약수의 개수가 음수면 -
      result = result - i;
      str = [];
    }
  }

  return result; // 최종값 리턴
}
