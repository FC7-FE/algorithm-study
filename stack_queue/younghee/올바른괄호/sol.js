function solution(s){
    var answer = true;
    let bracet = s[0];
    let stack = [];
    stack.push(bracet);

    if (s[0] !== ")") {
        for (let i = 1; i < s.length; i++) {
            if(s[i] === bracet) {
                stack.push(s[i]);        
            } else {
                stack.pop();
            }
        }
    }

    if(stack.length >0) {
        answer = false;
    } 
    return answer;
}