function solution(arr)
{
    var answer = [];
    let value = arr[0];
    answer.push(value);
    for (let i=1; i<arr.length; i++) {
        if(arr[i]!==value) {
            answer.push(arr[i]);
            value = arr[i]
        }
    }    
    return answer;
}
