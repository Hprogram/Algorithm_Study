function solution(people, limit) {
  let result = 0;
  // 한번에 탈 수 있는 사람 제한: 2명
  // 첫번째 인덱스를 지정
  let first = 0;
  // 마지막 인덱스 지정
  let final = people.length - 1;
  // 내림차순으로 정렬해서 첫번째 값이 가장 무거운 사람으로 지정
  people.sort((a, b) => b - a);

  // final이 first보다 커지면 모두 반복한것이므로 종료시점 설정
  while (first < final) {
    // 가장 무거운 사람과 가장 가벼운 사람의 합이 limit보다 크다면
    // 가장 무거운 사람만을 태워 보낸다.
    if (people[first] + people[final] > limit) {
      first++;
    } else {
      // 가장 무거운 사람과 가장 가벼운 사람의 합이 limit보다 작다면
      // 함께태울 수 있는것으로 first와 final모두 조절
      first++;
      final--;
    }
    // result(구출횟수)를 1늘려준다
    result++;
  }
  // 만약 반복을 모두 마치고도 사람이 남아있다면
  // result(구출횟수)를 1늘려준다
  if (first === final) {
    result++;
  }

  // 최종 출력
  return result;
}
