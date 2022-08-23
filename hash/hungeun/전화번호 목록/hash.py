def solution(phone_book):
    answer = True
    table = {}
    
    for number in phone_book:
        table[number] = 1

    for number in phone_book:
        for i in range(len(number)):
            if number[0:i] in table:
                answer = False
                break
            
    return answer