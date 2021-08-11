function solution(new_id) {
  // 1단계: 대응되는 모든 대문자를 소문자로 치환
  let first = new_id.toLowerCase();

  // 2단계: 문제에서 제시한 문자를 제외한 숫자 모두 삭제
  let second = first.replace(/[^\w-._]+/g, "");

  let third = [];

  // 3단계: 마침표(.)가 두번 이상 연속되면 하나로 치환
  for (let i = 0; i < second.length; i++) {
    if (second[i] === "." && second[i + 1] === ".") {
      continue;
    } else {
      third.push(second[i]);
    }
  }

  // 4단계: 맨 첫째가 마침표(.)이거나 맨 마지막이 마침표(.)라면 삭제
  if (third[0] === ".") {
    third.splice(0, 1);
  }

  if (third[third.length - 1] === ".") {
    third.splice(third.length - 1, 1);
  }

  // 5단계: 빈 문자열일 경우 'a'를 추가
  if (third.length === 0) {
    third.push("a");
  }

  // 6단계: 길이를 최대 15로 지정하고 마지막 문자가 마침표(.)라면 삭제
  let six = third.slice(0, 15);
  if (six[six.length - 1] === ".") {
    six.splice(six.length - 1, 1);
  }

  //7단계: 문자열의 길이가 2이하라면 길이가 3이 될때까지 맨 마지막 문자 추가
  while (six.length <= 2) {
    six.push(six[six.length - 1]);
  }

  // 이어 붙여준뒤 출력
  return six.join("");
}
