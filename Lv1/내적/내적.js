function solution(a, b) {
    let result = 0
    // a,b의 길이가 같으니 a길이만큼만 반복
    for(let i=0; i<a.length; i++){
        // 각 배열의 인덱스에 있는 것을 곱한 값을 반복해서 더해줌
        result = result + (a[i] * b[i]);
    }
    
    // 최종 출력
    return result;
}