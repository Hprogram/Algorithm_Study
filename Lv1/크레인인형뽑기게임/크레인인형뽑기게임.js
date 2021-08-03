function solution(board, moves) {
  // 터트린 인형의 개수를 저장할 변수 생성
  let result = 0;
  // 바구니 역할을 할 스택 생성
  let stack = [];

  // 크레인의 움직임 만큼 반복
  for (let i = 0; i < moves.length; i++) {
    // 잡은 인형을 임시 저장할 변수 선언
    let doll = 0;
    // 크레인이 인형을 잡아하기 때문에 0이 아닌 경우에만 스택에 저장
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        doll = board[j][moves[i] - 1];
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
    // 인형을 잡지 못했다면 스택에 저장할 필요가 없기 때문에 조건 설정
    if (doll !== 0) {
      // 스택에 저장
      if (stack.length === 0) {
        stack.push(doll);
      } else {
        // 바구니의 마지막 인형과 현재 잡은 인형을 비교해서
        // 같다면 터트리면서 result +2하고
        // 다르다면 그대로 바구니에 담아줌
        if (stack[stack.length - 1] === doll) {
          stack.pop();
          result = result + 2;
        } else {
          stack.push(doll);
        }
      }
    }
  }

  // 최종 출력
  return result;
}

// 크레인을 끌어 올릴 때 0이라면 인형이 없는 것 이기 떄문에 무시하고 0이외의 숫자가 나올 때 까지
// 하강해야하는 부분을 구현해야함.
// 이를 반복문을 추가하는 형태로 구현함 (찾으면 break문으로 빠져나와 반복 횟수 최소화
// 반복하며 stack을 지속해서 확인.
// 이는 겹치는 인형이 없다면 굉장히 비효율적이겠지만 추후에 반복문을 한번 더 사용하는 것보다는 실행시간이 빠르다.
