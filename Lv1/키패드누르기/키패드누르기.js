function solution(numbers, hand) {
    let answer = '';
    let buttons= [[3, 1], [0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]];
    // 각버튼의 번호 순서대로 정렬 (0,1,2,3,4,5,6,7,8,9) 
    let left = [3,0];   // *위치
    let right = [3,2];  // #위치
    
    let lcount =0 ;
    let rcount =0 ;
    
    
    for(let i=0; i<numbers.length; i++){ // 입력된 번호 배열만큼 반복
        // 왼쪽 엄지 사용
        if(numbers[i]===1 || numbers[i]===4 || numbers[i]===7 ){
            answer =  answer + 'L'; 
            left = buttons[numbers[i]];
        }
        // 오른쪽 엄지 사용
        if(numbers[i]===3 || numbers[i]===6 || numbers[i]===9 ){
            answer =  answer + 'R';
            right = buttons[numbers[i]];
        }// 중앙 키패드는 더 가까운 엄지를 사용
        if(numbers[i]===2 || numbers[i]===5 || numbers[i]===8 || numbers[i]===0){
            lcount = Math.abs( left[0] - buttons[numbers[i]][0] ) + Math.abs( left[1] - buttons[numbers[i]][1] );
            rcount = Math.abs( right[0] - buttons[numbers[i]][0]) + Math.abs( right[1] - buttons[numbers[i]][1] );
            // 더 가까운 위치의 엄지를 사용하는 조건문을 추가
            if(lcount > rcount){    // 오른쪽 엄지가 더 가까울 때
                answer =  answer + 'R';
                right = buttons[numbers[i]];
                
            }else if(rcount > lcount){  // 왼쪽 엄지가 더 가까울 떄
                answer =  answer + 'L';
                left = buttons[numbers[i]];
                
            }else if(rcount === lcount){ // 중앙 기준
                if(hand==='left'){
                    answer =  answer + 'L';
                    left = buttons[numbers[i]];
                }else if(hand==='right'){
                    answer =  answer + 'R';
                    right = buttons[numbers[i]];
                }
            }
            
        }
    }

    return answer;
}