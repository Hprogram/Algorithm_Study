function solution(s) {
  // 스택을 이용
  let result = [];

  // 차례대로 문자열을 진행하며 스택의 마지막 인덱스와 다르면 푸시
  // 같다면 pop해주면서 이어 붙여진 경우 스택에서 비워준다.
  for (let i = 0; i < s.length; i++) {
    if (result[result.length - 1] !== s[i]) {
      result.push(s[i]);
    } else {
      result.pop();
    }
  }

  // 스택이 비워져있다면 모두 성공적으로 수행한것이고
  // 스택에 하나라도 존재한다면 이어붙여진 문자가 없다는 것
  if (result.length > 0) {
    return 0;
  } else {
    return 1;
  }
}
