function solution(scores) {
  let result = [];
  let my = [];
  // 평균값을 구해줄 때 나누어줄 변수 설정
  let count = new Array(scores.length).fill(scores[0].length);

  // 각 학생의 가장 높은 점수와 가장 낮은 점수 저장
  for (let i = 0; i < scores.length; i++) {
    let max = 0;
    let min = 101;
    for (let j = 0; j < scores.length; j++) {
      if (max < scores[j][i]) {
        max = scores[j][i];
      }
      if (min > scores[j][i]) {
        min = scores[j][i];
      }
    }
    my.push([max, min]);
  }

  // 최대값이 자신이 적은 값과 같다면 본인이 받은 점수중 중복되는게 있는지 체크 있으면 해당 점수를 0으로 만들고
  // 평균값 계산에서 제외하여 준다. (count - 1만큼 해서 평균값 계산 제외)
  for (let i = 0; i < scores.length; i++) {
    let k = 0;
    if (scores[i][i] === my[i][0]) {
      for (let j = 0; j < scores.length; j++) {
        if (scores[j][i] === my[i][0]) {
          k++;
        }
      }
    } else if (scores[i][i] === my[i][1]) {
      for (let j = 0; j < scores.length; j++) {
        if (scores[j][i] === my[i][1]) {
          k++;
        }
      }
    }
    if (k === 1) {
      scores[i][i] = 0;
      count[i] = count[i] - 1;
    }
  }

  // 각 학생의 평균값을 구하고 점수에 맞게 등급 부여
  for (let i = 0; i < scores.length; i++) {
    let sum = 0;

    for (let j = 0; j < scores.length; j++) {
      sum = sum + scores[j][i];
    }
    sum = sum / count[i];
    sum = sum.toFixed(2);
    if (sum >= 90) {
      result.push("A");
    } else if (sum >= 80 && sum < 90) {
      result.push("B");
    } else if (sum >= 70 && sum < 80) {
      result.push("C");
    } else if (sum >= 50 && sum < 70) {
      result.push("D");
    } else {
      result.push("F");
    }
  }

  // 학생들의 등급을 문자열로 합쳐서 출력
  return result.join("");
}
