function solution(participant, completion) {  
    // 정렬을 시키면 알파뱃순으로 정렬됌 
    participant.sort()   
    completion.sort()  

    //순서대로 비교 했을 때 완주했다면 인덱스의 위치가 같음.
    for(let i=0; i<participant.length; i++){
        if(participant[i] != completion[i]) // 같지 않으면 완주자 명단에 없는것.
            return participant[i];  // 완주하지 못한사람.
    }

    return participant[participant.length-1] // 마지막 사람이 완주하지 못한 사람.
}