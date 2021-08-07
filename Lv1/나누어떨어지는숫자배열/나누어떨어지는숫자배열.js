function solution(arr, divisor) {
  let answer = [];
  // 각 인덱스마다 반복하면서 divisor로 완전히 나누어 떨어지면 배열에 푸시
  arr.map((el) => {
    if (el % divisor === 0) {
      answer.push(el);
    }
  });
  // 최종 출력 배열이 비어있다면 아무것도 나누어 떨어지지 않은것이므로 -1을 배열에 담아 출력
  if (answer.length === 0) {
    answer.push(-1);
    return answer;
  } else {
    // 아니라면 배열을 오름차순으로 정렬한 뒤 출력
    answer.sort((a, b) => a - b);
    return answer;
  }
}
