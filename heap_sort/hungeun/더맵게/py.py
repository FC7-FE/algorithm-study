# 시간 초과
# def solution(scoville, K):
#     answer = 0
#     scoville.sort()

#     while(scoville[0] < K):
#         if (len(scoville) == 1):
#             return -1
#         else:
#             temp = scoville[0] + scoville[1] * 2
#             del scoville[0]
#             del scoville[0]
            
#         scoville.insert(0,temp)
#         scoville.sort()
#         answer = answer + 1
#     return answer

# heapq 사용
import heapq

def solution(scoville, K):
    answer = 0 
    heapq.heapify(scoville)
    
    while scoville[0] < K:
        if len(scoville) == 1 and scoville[0] < K:
            return -1
        
        mix = heapq.heappop(scoville) + heapq.heappop(scoville) * 2
        heapq.heappush(scoville, mix)
        answer += 1
        
    return answer
        