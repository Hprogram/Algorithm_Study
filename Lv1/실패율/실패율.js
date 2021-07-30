function solution(N, stages) {
  let numbers = {};
  let result = [];
  let sort = [];
  // 스테이지와 해당 스테이지 통과를 저장할 배열을 그 수만큼 0으로 채워준다.
  let stage = new Array(N).fill(0);
  let fail = new Array(N).fill(0);

  // 스테이지 수만큼 반복
  for (let i = 0; i < stages.length; i++) {
    // 해당 사용자가 도전한 스테이지까지 각 스테이지 도전횟수를 합산해줌
    if (stages[i] > N) {
      for (let j = 0; j < stages[i] - 1; j++) {
        stage[j] = stage[j] + 1;
      }
    } else {
      for (let j = 0; j < stages[i]; j++) {
        stage[j] = stage[j] + 1;
      }
    }

    // 스테이지 실패횟수
    if (stages[i] <= N) {
      fail[stages[i] - 1] += 1;
    }
  }

  // 실패율 저장
  for (let i = 0; i < stage.length; i++) {
    numbers[i + 1] = fail[i] / stage[i];
  }

  // 객체를 정렬시키기 위해 새로운 배열에 저장
  for (let i in numbers) {
    sort.push([i, numbers[i]]);
  }

  // 객체 정렬
  sort.sort((a, b) => {
    return b[1] - a[1];
  });

  // 스테이지를 실패율에 맞게 출력.
  for (let i in sort) {
    result[i] = Number(sort[i][0]);
  }

  return result;
}

// 우선 몇명의 사용자가 몇번 스테이지 까지 클리어 했는지를 구별하여야함
// 생각나는 해결 방법은 이중 반복문을 사용하는것
// 예를 들면 5개의 스테이지가 있다면 5칸 짜리 배열을 생성하여 해당 자리에 몇명의 사용자가 도전했는지를 표시
