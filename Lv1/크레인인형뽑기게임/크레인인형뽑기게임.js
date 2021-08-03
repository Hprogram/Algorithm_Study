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
