function solution(priorities, location) {
  // 한번은 무조껀 실행되기 때문에 count = 1
  let count = 1;
  // 사용자가 원하는 자료의 인덱스가 변하기 때문에 변수 지정
  let t_index = location;
  // 첫번째 값을 저장할 임시 저장 변수
  let first = 0;

  // priorities를 큐처럼 사용
  while (priorities.length > 0) {
    // 맨 앞에 있는 값을 추출
    first = priorities.shift();
    // 배열안에 중요도가 first보다 높은 문서가 하나라도 존재하면
    // some 메소드가 굉장히 편리함.(하나라도 참이면 true 아니라면 false반환)
    // 큐의 맨 뒤에 삽입
    if (priorities.some((value) => value > first)) {
      priorities.push(first);
    } else {
      // first가 가장 클때 원하는 문서의 인덱스가 0이라면
      // 바로 반환하기 위해 break
      if (t_index === 0) {
        break;
      } else {
        // 아니라면 인쇄 횟수 + 1
        count++;
      }
    }
    // 선택한 문서가 중요도가 제일 높지 않으면
    // 맨 뒤로 인덱스를 옮겨준다.
    if (t_index === 0) {
      t_index = priorities.length - 1;
    } else {
      // 그렇지 않다면 순차적으로 진행되므로 t_index - 1
      t_index--;
    }
  }

  return count;
}
