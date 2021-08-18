function solution(bridge_length, weight, truck_weights) {
  // 스택 공간 생성
  let stack = Array(bridge_length).fill(0);
  // 다리를 지난 트럭을 넣어줄 finish 배열 (이번 문제에서는 없어도 문제없다)
  let finish = [];
  // 시간을 계산해줄 count 변수
  let count = 0;

  // truck_weights의 길이가 0일때 까지 반복
  while (truck_weights.length !== 0) {
    let pop = stack.pop();

    // 매번 스택의 총 합을 더하여 계산 (다리에 올라간 차량의 총 무게)
    let stack_w = stack.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    // 다리의 올라간 차량의 총 무게에 지금 현재 차량의 무게를 올렸을 때 weight를 넘지 않으면
    // stack을 에 truck_weights[0]번을 추가해준다. 이때 truck_weights의 길이를
    // 줄여야 함으로 shift를 사용한다.
    // 현재 차량을 올리지 못할경우 stack에 0을 푸시해 시간이 지나감을 표시한다.
    // count는 매 순간마다 1씩 증가
    if (stack_w + truck_weights[0] <= weight) {
      stack.unshift(truck_weights.shift());
      count++;
      if (pop !== 0) {
        finish.push(pop);
      }
    } else {
      stack.unshift(0);
      count++;
      if (pop !== 0) {
        finish.push(pop);
      }
    }
  }

  // 마지막 차량이 들어간 시점에서 다리의 길이만큼 시간이 더 걸릴것이므로 stack의 length만큼 더하여준다.
  count = count + stack.length;

  return count;
}
