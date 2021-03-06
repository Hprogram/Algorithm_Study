function solution(s) {
  let result = "";
  // 숫자 판별 문자열 생성
  let number = "0123456789";
  // string으로 구성된 숫자를 임시 저장할 공간 생성
  let word = "";
  // 숫자 테이블 생성
  let numbers = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  // s의 길이만큼 반복
  for (let i = 0; i < s.length; i++) {
    // 해당 인덱스가 숫자라면
    if (number.includes(s[i]) === true) {
      // 최종 출력할 문자열에 이어붙여준다.
      result = result + s[i];
    } else {
      // 아니라면 임시 저장 공간에 문자를 차례로 저장한다.
      word = word + s[i];
      // 혹시 문자가 숫자 테이블 객체에 저장되어 있다면
      // 최종 출력 문자열에 이어붙여 준뒤 임시 저장공간을 초기화한다.
      if (numbers[word] !== undefined) {
        result = result + numbers[word];
        word = "";
      }
    }
  }

  // 숫자로 바꾸어 최종 출력한다.
  return Number(result);
}
