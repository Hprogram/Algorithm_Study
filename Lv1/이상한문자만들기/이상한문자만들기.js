function solution(s) {
  // 문자열을 배열로 하나씩 잘라줌
  let arr2 = s.split(" ");
  let arr3 = [];
  let newstr = "";

  for (let i = 0; i < arr2.length; i++) {
    // 공백이 아니면 푸시
    if (arr2[i].length === 0) {
      arr3.push(arr2[i]);
    } else {
      for (let j = 0; j < arr2[i].length; j++) {
        if (j % 2 === 0) {
          // 대문자로 변환해서 더해줌
          newstr = newstr + arr2[i][j].toUpperCase();
        } else {
          // 소문자로 변환해서 더해줌
          newstr = newstr + arr2[i][j].toLowerCase();
        }
      }
      arr3.push(newstr);
      newstr = "";
    }
  }
  //문자열을 이어줌
  let result = arr3.join(" ");

  //최종 출력
  return result;
}
