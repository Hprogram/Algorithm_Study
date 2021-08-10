function solution(n, arr1, arr2) {
  let result = [];
  // n * n 크기의 이차원배열을 생성하고 공백으로 채워준다.
  const secret_map = Array.from(Array(n), () => Array(n).fill(" "));
  let map1 = [];
  let map2 = [];

  for (let i = 0; i < n; i++) {
    // 10진수를 2진수로 바꾸어 준다.
    let split = arr1[i].toString(2).split("");
    // 길이를 맞춰주기 위해서 0을 앞에 추가
    while (split.length < n) {
      split.unshift("0");
    }
    let split2 = arr2[i].toString(2).split("");
    while (split2.length < n) {
      split2.unshift("0");
    }
    // map1에 푸시
    map1.push(split);
    map2.push(split2);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // mpa1에서 1이거나 map2에서 1이라면 벽이므로 #을 삽입해준다.
      if (map1[i][j] === "1" || map2[i][j] === "1") {
        secret_map[i][j] = "#";
      }
    }
    // 배열을 이어준다.
    // ex: ["#"," ","#","#","#"] => '# ###'
    result.push(secret_map[i].join(""));
  }
  //최종 출력
  return result;
}
