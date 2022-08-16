function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridgeQ = new Array(bridge_length);
    bridgeQ.fill(0);
    let bridgeWeightSum = 0;

    //다리 위에 요소가 있는 동안 실행
    while (bridgeQ.length > 0) {
        answer++;  //반복문이 다시 실행된다는 건 해당 검사가 한번 끝난 것 === 카운트++
        //삭제==이동 : 다리 위의 요소 이동
        bridgeWeightSum -= bridgeQ.shift();
        //삽입
        if(truck_weights.length > 0) {
          //대기열에 트럭이 있는 경우
            if (bridgeWeightSum  + truck_weights[0] <= weight) {
            //이전값 + 새로운 트럭무게의 값이 다리 하중이 견디는 경우
                let truckOnBridge = truck_weights.shift(); //대기열에서 제거
                bridgeWeightSum  += truckOnBridge;
                bridgeQ.push(truckOnBridge);

            } else {
                bridgeQ.push(0); //못 견디는 경우 0 채운다. 
            }    
        }   
    }
    return answer;
}