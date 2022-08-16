function solution(priorities, location) {
    var answer = 0;
    let locateList= priorities.map((item,idx) => [item, idx]);
    //console.log(locateList);
    let printList = [];
    let sortedList = priorities.sort().reverse();
    
    while (locateList.length>0) {
        if(locateList[0][0] === sortedList[0]) {
            printList.push(locateList.shift()[1]);
            priorities.shift();
        } else {
            locateList.push(locateList.shift());
        }
    }
    return printList.indexOf(location) + 1;
}