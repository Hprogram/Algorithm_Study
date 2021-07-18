function solution(absolutes, signs) {
  let sum = 0;
  // 배열의 길이만큼 반복
  for (let i = 0; i < absolutes.length; i++) {
    // signs[i]가 true면 양의 정수 false면 음의정수
    if (signs[i] === true) {
      // sum에 반복해서 더해줌
      sum = sum + absolutes[i]; // 양의 정수
    } else {
      sum = sum + -absolutes[i]; // 음의 정수
    }
  }
  return sum; // sum 반환
}
