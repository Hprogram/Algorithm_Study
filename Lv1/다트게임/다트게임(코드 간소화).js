function solution(dartResult) {
  dartResult = dartResult + "0"; // 점수 분리를 위한 의미없는 값 추가.
  let result = [];
  let nums = "0123456789";
  let dart_split = [];
  let m = String(dartResult[0]); // 임시 저장공간

  // 문자열을 조건에 맞춰 잘라준다. ex) "1D2S3T*" => [ '1D', '2S', '3T*' ]
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

  // 나눠진 문자열의 수만큼 반복
  for (let i = 0; i < dart_split.length; i++) {
    let num = "";
    let str = "";

    // 숫자와 문자를 분리해서 저장한다.
    // ex) '3T*' => num = "3", str = "T*"
    for (let j = 0; j < dart_split[i].length; j++) {
      if (nums.includes(dart_split[i][j])) {
        num = num + dart_split[i][j];
      } else {
        str = str + dart_split[i][j];
      }
    }

    // 조건에 맞추어 S는 1제곱, D는 2제곱, T는 3제곱 하여 result 배열에 푸시한다.
    if (str[0] === "S") {
      result.push(Number(num));
    } else if (str[0] === "D") {
      result.push(Math.pow(num, 2));
    } else if (str[0] === "T") {
      result.push(Math.pow(num, 3));
    }

    // * 이라면 이전 숫자와 현재 숫자를 * 2 하여준다.
    // # 이라면 음수로 바꾸어준다.
    if (str[1] === "*") {
      result[i - 1] = result[i - 1] * 2;
      result[i] = result[i] * 2;
    } else if (str[1] === "#") {
      result[i] = -result[i];
    }
  }

  // 배열을 모두 더하여 최종값 출력.
  return result.reduce((arr, cur) => {
    return (arr = arr + cur);
  }, 0);
}
