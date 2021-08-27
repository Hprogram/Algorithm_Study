function solution(numbers) {
  // 각 숫자를 문자로 변환
  let nums = numbers.map((e) => e + "");
  console.log(nums);
  // 숫자를 이어붙인뒤 대소 비교해서 정렬
  // ex) [ '6', '10', '2' ]
  // 1번째 610 106. 610이 더크기 떄문에 ['6','10','2']
  // 2번째 102 210. 210이 더 크기 떄문에 [ '6', '2', '10' ]
  let result = nums.sort((a, b) => b + a - (a + b));

  // 맨 앞자리가 0이라면 0만 존재하는 것이므로 '0'반환
  // 아니라면 순서대로 이어붙여서 반환
  if (result[0] === "0") {
    return "0";
  } else {
    return result.join("");
  }
}
