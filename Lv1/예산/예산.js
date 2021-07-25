function solution(d, budget) {
    let answer = 0;
    
    let result = 0;
    
    // 최대한 많은 부서에 지원해주기 위해서 금액을 오름차순으로 정렬한다
    let newd = d.sort((a,b)=>{
        return a - b;
    });
    
    // 몇번째 인덱스까지 포함될 수 있는지 체크
    // 예산을 초과하게 되면 반복문 정지.
    for(let i=0; i<newd.length; i++){   
        result = result + newd[i];
        if(result <= budget){
            answer++;
        }else{
            break;
        }
    }
    
    
    return answer;  // 결과 출력
}