function solution(n, lost, reserve) {
    let answer = 0;
    
    let student =[];
    
    // 해당 크기에 맞게 배열에 1로 추가 (한개씩 가지고 있다고 가정하기 위함)
    for(let i=0; i<n; i++){
        student.push(1);
    }
    
    // n번만큼 반복
    for(let i=0; i<n; i++){
        // lost안에 해당 인덱스는 0번이지만 1번부터 시작이기 떄문에 아래와 같이 작성
        if(lost.includes(i+1)){
            student[i] = student[i] - 1;
        }
        // 위와 마찬가지로 reserve도 작성
        if(reserve.includes(i+1)){
            student[i] = student[i] + 1;      
        }    
    }
    
    for(let i=0; i<n; i++){
        // 혹시 학생이 체육복이 없다면
        if(student[i] === 0){
            // 해당 학생의 앞에 있는 학생이 두개 있다면
            if(student[i-1]===2){
                student[i] = student[i] + 1; 
                student[i-1] = student[i-1] - 1; 
            }
            // 해당 학생의 뒤에 있는 학생이 두개 있다면
            if(student[i+1]===2){
                student[i] = student[i] + 1; 
                student[i+1] = student[i+1] - 1; 
            }
        }
    }
    
    for(let i=0; i<n; i++){
        // 학생이 1개 이상 가지고 있다면 수업듣는 학생수를 + 1 하여준다.
        if(student[i]>=1){
            answer++;
            
        }
    }
    
    // 수업 수강 가능한 학생 리턴
    return answer;
}