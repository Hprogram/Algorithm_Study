function solution(n) {
    let numbers =[];
    let result = [];
    for(let i=1; i<=n; i++){
        numbers.push(i);
    }
    
    // 10이면
    // 1,2,3,4,5,6,7,8,9,10
    
    for(let i=1; i*i<n; i++){
        // 해당 배열의 숫자가 0이 아니면
        if(numbers[i]!==0){
            let num = numbers[i];
            for(let j= num * num; j <= n; j += num){
                numbers[j-1] = 0;
            }   
        }
    }
    
    result = numbers.filter(number => number !==0);
    
    result.shift();
    
    
    return result.length;
}