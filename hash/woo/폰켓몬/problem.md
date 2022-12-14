## ✨ 해시
[Level1 **폰켓몬** 문제](https://school.programmers.co.kr/learn/courses/30/lessons/1845) 

### 📘 문제 설명
당신은 폰켓몬을 잡기 위한 오랜 여행 끝에, 홍 박사님의 연구실에 도착했습니다. 홍 박사님은 당신에게 자신의 연구실에 있는 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다.

홍 박사님 연구실의 폰켓몬은 종류에 따라 번호를 붙여 구분합니다. 따라서 같은 종류의 폰켓몬은 같은 번호를 가지고 있습니다. 예를 들어 연구실에 총 4마리의 폰켓몬이 있고, 각 폰켓몬의 종류 번호가 [3번, 1번, 2번, 3번]이라면 이는 3번 폰켓몬 두 마리, 1번 폰켓몬 한 마리, 2번 폰켓몬 한 마리가 있음을 나타냅니다. 이때, 4마리의 폰켓몬 중 2마리를 고르는 방법은 다음과 같이 6가지가 있습니다.

1. 첫 번째(3번), 두 번째(1번) 폰켓몬을 선택
2. 첫 번째(3번), 세 번째(2번) 폰켓몬을 선택
3. 첫 번째(3번), 네 번째(3번) 폰켓몬을 선택
4. 두 번째(1번), 세 번째(2번) 폰켓몬을 선택
5. 두 번째(1번), 네 번째(3번) 폰켓몬을 선택
6. 세 번째(2번), 네 번째(3번) 폰켓몬을 선택

이때, 첫 번째(3번) 폰켓몬과 네 번째(3번) 폰켓몬을 선택하는 방법은 한 종류(3번 폰켓몬 두 마리)의 폰켓몬만 가질 수 있지만, 다른 방법들은 모두 두 종류의 폰켓몬을 가질 수 있습니다. 따라서 위 예시에서 가질 수 있는 폰켓몬 종류 수의 최댓값은 2가 됩니다.

당신은 최대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에, 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다. N마리 폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수로 주어질 때, N/2마리의 폰켓몬을 선택하는 방법 중, 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.

### 📕 제한사항
- nums는 폰켓몬의 종류 번호가 담긴 1차원 배열입니다.
- nums의 길이(N)는 1 이상 10,000 이하의 자연수이며, 항상 짝수로 주어집니다.
- 폰켓몬의 종류 번호는 1 이상 200,000 이하의 자연수로 나타냅니다.
- 가장 많은 종류의 폰켓몬을 선택하는 방법이 여러 가지인 경우에도, 선택할 수 있는 폰켓몬 종류 - 개수의 최댓값 하나만 return 하면 됩니다.

### 📙 입출력 예
|nums|result|
|:---|:---|
|[3,1,2,3]|2|
|[3,3,3,2,2,4]|3|
|[3,3,3,2,2,2]|2|

### 📒 입출력 예 설명
입출력 예 #1   
문제의 예시와 같습니다.

입출력 예 #2   
6마리의 폰켓몬이 있으므로, 3마리의 폰켓몬을 골라야 합니다.
가장 많은 종류의 폰켓몬을 고르기 위해서는 3번 폰켓몬 한 마리, 2번 폰켓몬 한 마리, 4번 폰켓몬 한 마리를 고르면 되며, 따라서 3을 return 합니다.

입출력 예 #3   
6마리의 폰켓몬이 있으므로, 3마리의 폰켓몬을 골라야 합니다.
가장 많은 종류의 폰켓몬을 고르기 위해서는 3번 폰켓몬 한 마리와 2번 폰켓몬 두 마리를 고르거나, 혹은 3번 폰켓몬 두 마리와 2번 폰켓몬 한 마리를 고르면 됩니다. 따라서 최대 고를 수 있는 폰켓몬 종류의 수는 2입니다.

### 📗 개인적인 문제 해설
> 총 N 마리의 폰켓몬 중에서 N/2마리를 가져가도 좋다고 했습니다.

폰켓몬을 최대로 가져갈 수 있는 단서가 된다.

> 홍 박사님 연구실의 폰켓몬은 종류에 따라 번호를 붙여 구분합니다.

번호를 기준으로 폰켓몬의 종류를 구분할 수 있다.    
즉 특정 key값을 이용하여 value를 정리할 수 있다. 이는 hash의 성질을 가지고 있음을 알 수 있다.

> 당신은 최대한 다양한 종류의 폰켓몬을 가지길 원하기 때문에, 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려 합니다. 

최대한 다양한 종류의 폰켓몬을 데려가기 위해서는 번호를 통해 종류를 분류해야함을 알 수 있다.
위에서도 말했지만 hash의 성질을 가지므로, key를 통해 카테고리를 분리하면 된다.

번호를 통해 종류를 구분하면, 종류의 최댓값을 알 수 있다. N/2보다 종류의 최댓값이 작으면, 종류의 최댓값을 반환하면 되고, 아니라면 N/2의 정수값을 반환하면 된다.


> 제한사항: nums의 길이(N)는 1 이상 10,000 이하의 자연수이며, 항상 짝수로 주어집니다.

길이는 항상 짝수로 주어지기 때문에 N/2마리 연산을 진행할 때 소수점을 고려할 필요가 없어진다.
Math의 ceil(올림), floor(내림), round(반올림)을 고려하지 않아도 된다.

### 📔 알고리즘 순서


### ✅ 해답코드
```javascript
function solution(nums) {
    let answer = 0;
    const max = nums.length / 2;
    const map = new Map();
    
    nums.forEach(num => {
        if(map.has(num)) {
            map.set(num, map.get(num)+1);
        }else {
            map.set(num, 1);
        }
    })

    return answer = map.size > max ? max : map.size;
}
```