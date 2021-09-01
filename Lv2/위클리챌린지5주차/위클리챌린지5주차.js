function solution(word) {
  // 몇번째 인지 저장하기 위한 변수
  let sum = 0;
  // word의 길이만큼 반복
  for (let i = 0; i < word.length; i++) {
    // 지수를 지정
    let exponent = 5 - i;
    // 반복적인 입력을 줄이기 위해서 지정
    let x = 5 ** exponent;
    // 각 알파뱃 조건에 따라서 조건문 작성
    // 변수 count의 값을 '반올림'하여 sum에 더해준다.
    // 'A'일 경우엔 해당 자리수의 처음에 있음
    if (word[i] === "A") {
      sum = sum + 1;
    } // 'E'일 경우엔 해당 자리수의 처음과 중앙 사이에 있음
    else if (word[i] === "E") {
      let count = (x / 2 + 1) / 2;
      sum = sum + Math.round(count);
    } // 'I'일 경우엔 해당 자리수의 중앙에 있음
    else if (word[i] === "I") {
      let count = x / 2;
      sum = sum + Math.round(count);
    } // 'O'일 경우엔 해당 자리수의 중앙과 끝 사이에 있음
    else if (word[i] === "O") {
      let count = (x / 2 + x) / 2;
      sum = sum + Math.round(count);
    } // 'U'일 경우엔 해당 자리수의 끝에 있음
    else if (word[i] === "U") {
      let count = x;
      sum = sum + Math.round(count);
    }
  }
  return sum;
}

// 해당 알파뱃이 지정되는 고유 숫자를 찾아야함.
// 자릿수에 따라 제곱을 표현할 수 있도록 해야함.
