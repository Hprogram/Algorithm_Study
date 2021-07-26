function solution(numbers) {
    let answer = [];
    
    // [1,2,3,4]  =  [1,2],[1,3], [1,4] 
    //               [2,3],[3,4]
    //               [3,4]
    
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            let sum = numbers[i]+numbers[j];
            // i번째와 i+1번째의 수를 더한것을 배열에 푸시한다
            // 대신 이미 그 숫자가 있다면 푸시하지 않는다.
            if(answer.includes(sum)===false){
                answer.push(sum);                    
            }                     
        }
    }
    
    // 배열 오름차순으로 정렬
    answer.sort(function(a, b) { 
        return a - b;
    });
    
    return answer;
}

// 아래는 예시를 수도코드로 작성함.

// [1,2,3,4]
// [1,2], [1,3], [1,4]
// [2,3], [2,4]
// [3,4]

// 1,2
// 1,3
// 1,4

// 2,1
// 2,3
// 2,4

// 3,1
// 3,2
// 3,4

// 4,1
// 4,2
// 4,3

// 3,4,5
// 5,6
// 7