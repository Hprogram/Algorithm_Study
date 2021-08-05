function solution(land) {
  // 행의 개수 만큼 반복시킨다.
  // Dynamic Programming를 사용하여 푸는 문제인데 메모이제이션을 사용.
  // 첫행을 제외한 다음 행부터 반복을 시작하고
  // 이전 행에서 본인의 인덱스가 아닌 숫자중 가장 큰 숫자를 더한다.
  // 마지막 행까지 이를 반복한다.
  for (let i = 1; i < land.length; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }

  // 마지막 행에서의 가장 큰 수가 최고점이 된다.
  return Math.max(...land[land.length - 1]);
}
