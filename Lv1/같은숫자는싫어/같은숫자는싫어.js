function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    // 현재 인덱스와 다음 인덱스를 비교해 같으면 무시하고 진행
    if (arr[i] === arr[i + 1]) {
      continue;
    } else {
      // 다르다면 배열에 푸시
      answer.push(arr[i]);
    }
  }

  return answer;
}
