function solution(dartResult) {
  dartResult = dartResult + "0"; // 점수 분리를 위한 의미없는 값 추가.

  let result = [];
  let nums = "0123456789";

  let dart_split = [];

  let m = String(dartResult[0]); // 임시 저장공간

  for (let i = 1; i < dartResult.length; i++) {
    if (nums.includes(dartResult[i])) {
      m = m + String(dartResult[i]);
    } else if (
      dartResult[i] === "S" ||
      dartResult[i] === "D" ||
      dartResult[i] === "T"
    ) {
      m = m + dartResult[i];
      if (dartResult[i + 1] === "*" || dartResult[i + 1] === "#") {
        m = m + dartResult[i + 1];
        dart_split.push(m);
        m = "";
      } else {
        dart_split.push(m);
        m = "";
      }
    }
  }

  for (let i = 0; i < dart_split.length; i++) {
    let score = dart_split[i].split("");

    if (score.length === 4) {
      if (score[2] === "S") {
        if (score[3] === "*") {
          if (result.length !== 0) {
            result[result.length - 1] = result[result.length - 1] * 2;
          }
          result.push(Number(10 * 2));
        } else if (score[3] === "#") {
          result.push(Number(-10));
        }
      }
      if (score[2] === "D") {
        if (score[3] === "*") {
          if (result.length !== 0) {
            result[result.length - 1] = result[result.length - 1] * 2;
          }
          result.push(Math.pow(10, 2) * 2);
        } else if (score[3] === "#") {
          result.push(-Math.pow(10, 2));
        }
      }
      if (score[2] === "T") {
        if (score[3] === "*") {
          if (result.length !== 0) {
            result[result.length - 1] = result[result.length - 1] * 2;
          }
          result.push(Math.pow(10, 3) * 2);
        } else if (score[3] === "#") {
          result.push(-Math.pow(10, 3));
        }
      }
    } else if (score.length === 3) {
      if (score[0] === "1" && score[1] === "0") {
        if (score[2] === "S") {
          result.push(10);
        }
        if (score[2] === "D") {
          result.push(Math.pow(10, 2));
        }
        if (score[2] === "T") {
          result.push(Math.pow(10, 3));
        }
      } else {
        if (score[1] === "S") {
          if (score[2] === "*") {
            if (result.length !== 0) {
              result[result.length - 1] = result[result.length - 1] * 2;
            }
            result.push(Number(score[0] * 2));
          } else if (score[2] === "#") {
            result.push(Number(-score[0]));
          }
        }
        if (score[1] === "D") {
          if (score[2] === "*") {
            if (result.length !== 0) {
              result[result.length - 1] = result[result.length - 1] * 2;
            }
            result.push(Math.pow(score[0], 2) * 2);
          } else if (score[2] === "#") {
            result.push(-Math.pow(score[0], 2));
          }
        }
        if (score[1] === "T") {
          if (score[2] === "*") {
            if (result.length !== 0) {
              result[result.length - 1] = result[result.length - 1] * 2;
            }
            result.push(Math.pow(score[0], 3) * 2);
          } else if (score[2] === "#") {
            result.push(-Math.pow(score[0], 3));
          }
        }
      }
    } else if (score.length === 2) {
      if (score[1] === "S") {
        result.push(Number(score[0]));
      }
      if (score[1] === "D") {
        result.push(Math.pow(score[0], 2));
      }
      if (score[1] === "T") {
        result.push(Math.pow(score[0], 3));
      }
    }
  }

  return result.reduce((arr, cur, idx) => {
    return (arr = arr + cur);
  }, 0);
}

// 너무 복잡하다고 생각되서 다른 방법으로도 풀어봄.
// 3번 반복
// 문자열을 자를때 숫자를 기준으로 임시 저장공간에 차례로 담다가 새로운 숫자를 만나면 계산.
// 옵션이 일반적으로 숫자 1개 대문자 1개로 구성됌(예: 1S)
// 해당 문자열의 길이가 3일 경우 스타상, 아차상이 존재 할 수 있고 이에 대한 조건이 필요함.
