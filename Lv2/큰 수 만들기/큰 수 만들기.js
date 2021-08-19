function solution(number, k) {
  let result = "";
  // 첫번째에는 0번부터 실행해주기 위함이고 이후 부터는
  // 가장 큰 수 다음부터 진행하기 위해서 인덱스 설정
  let index = -1;

  // 원하는 길이만큼 제거하고 반복
  for (let i = number.length - k; i > 0; i--) {
    // 가장 큰 수를 임시 저장할 변수
    let max = 0;
    // index는 처음 이후부터 가장 큰 수의 위치를 지정하기 때문에
    // 그 다음 인덱스 부터 필요 길이만큼만 반복(단계별로 맨 뒤까지 검사한다)
    for (let j = index + 1; j <= number.length - i; j++) {
      // 숫자중에서 9가 가장 크기 때문에 9라면 반복하지않고 저장후 break
      if (number[j] == "9") {
        max = 9;
        index = j;
        break;
        // max가 number[j]보다 작다면 더 큰 값을 저장해야하므로
        // max에 number[j] 저장하고 인덱스를 j로 바꾸어준다.
      } else if (max < number[j]) {
        max = number[j];
        index = j;
      }
    }
    // 최종 출력에 max를 이어 붙여준다
    result = result + String(max);
  }

  // 최종 출력
  return result;
}
