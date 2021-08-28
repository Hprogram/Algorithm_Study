function solution(s) {
  // 개수를 비교할 때 대소문자 구분이 없기 때문에 소문자로 통일
  let splits = s.toLowerCase();
  // 각 알파벳 카운트를 저장할 변수 설정
  let p = 0;
  let y = 0;
  // 문자열을 검색하며 p와 y의 개수를 저장
  for (let i = 0; i < splits.length; i++) {
    if (splits[i] === "p") {
      p++;
    }
    if (splits[i] === "y") {
      y++;
    }
  }
  // 카운트가 서로 같으면 true 아니라면 false 출력
  if (p === y) {
    return true;
  } else {
    return false;
  }
}
// 스택을 통해서도 풀 수 있다.
// 문자열을 검색하며 해당 문자가 p이면 스택에 push() y라면 pop()을 한다.
// 문자열을 끝까지 검사한 뒤 스택이 비어있지 않다면 같지 않음으로 false, 비어있다면 true 출력
