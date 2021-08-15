function solution(scores) {
  var answer = "";

  console.log(scores);
  for (let i = 0; i < scores.length; i++) {
    let max = scores[i].reduce(function (previous, current) {
      return previous > current ? previous : current;
    });
    let min = scores[i].reduce(function (previous, current) {
      return previous > current ? current : previous;
    });
    if (scores[i][i] === max || scores[i][i] === min) {
    }
  }

  return answer;
}
