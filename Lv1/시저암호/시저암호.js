function solution(s, n) {
  let answer = "";

  let smallAlpha = "abcdefghijklmnopqrstuvwxyz"; // 소문자 나열
  let bigAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자 나열

  for (let i = 0; i < s.length; i++) {
    // 공백은 그대로
    if (s[i] === " ") {
      answer = answer + " ";
      // 소문자일 경우
    } else if (smallAlpha.includes(s[i])) {
      // 소문자에 있는지 찾음
      let asis = smallAlpha.indexOf(s[i]); // 몇번 인덱스에 있는지 체크
      //소문자의 길이만큼으로 나눈 나머지는 결국 해당 알파벳의 인덱스가 됌.
      let tobe = (asis + n + smallAlpha.length) % smallAlpha.length;
      answer = answer + smallAlpha[tobe]; // 문자열에 해당 알파벳을 하나씩 추가
      // 대문자일 경우도 마찬가지로 진행한다
    } else {
      let asis1 = bigAlpha.indexOf(s[i]);
      let tobe1 = (asis1 + n + bigAlpha.length) % bigAlpha.length;
      answer = answer + bigAlpha[tobe1];
    }
  }

  return answer;
}
