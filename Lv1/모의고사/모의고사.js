function solution(answers) {
  // 각 학생의 문제 맞춘 개수를 저장할 배열
  var answer = [];

  // 각 학생이 정답을 적는 방식을 테이블 형테로 작성
  let people = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  // 학생의 수만큼 반복
  for (let el of people) {
    // 해당 학생이 문제를 맞췄다면 누적값 ++
    let score = answers.reduce((acc, curr, index) => {
      curr === el[index % el.length] ? acc++ : acc;
      return acc;
    }, 0);
    // 해당 학생의 점수를 저장
    answer.push(score);
  }

  // 학생들중에 가장 많은 개수를 맞춘 학생을 검색 및 배열에 저장
  let result = answer.reduce((acc, curr, idx) => {
    curr === Math.max(...answer) ? acc.push(idx + 1) : acc;
    return acc;
  }, []);

  // 학생이 여러명일 수 있기 떄문에 오름차순으로 정렬해야한다.
  // 하지만 작성된 코드대로라면 앞에 인덱스부터 순차적으로 진행하기 때문에
  // 오름차순으로 따로 정렬되어 있음.
  return result;
}
