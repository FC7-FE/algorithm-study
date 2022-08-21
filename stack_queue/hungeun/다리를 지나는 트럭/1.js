function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let bridgeQ = new Array(bridge_length);
  bridgeQ.fill(0);

  let bridgeWeightSum = 0;

  while (bridgeQ.length > 0) {
    bridgeWeightSum -= bridgeQ.shift();

    if (truck_weights.length > 0) {
      if (bridgeWeightSum + truck_weights[0] <= weight) {
        let truckOnBridge = truck_weights.shift();
        bridgeWeightSum += truckOnBridge;
        bridgeQ.push(truckOnBridge);
      } else {
        bridgeQ.push(0);
      }
    }
    answer++;
  }
  return answer;
}
