function solution(nums) {
    let len = (nums.length/2);
   
    
    let set = new Set(nums); // Set함수 사용
    
    let kip = [...set]; 
    
    if(kip.length<=len){    //길이에 따라 반환값을 달리한다.
        return kip.length;  // 들어온 배열의 길이보다 더 큰수가 나올 수 없음.
    }else{
        return len;
    }
}

//  nums의 개수를 length를 센다.
//  length의 절반인 숫자를 변수에 저장. length
//  배열에서 중복된 수를 삭제하고. 그 갯수를 또다른 변수에 저장한다.kip
