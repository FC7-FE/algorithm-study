def solution(nums):
    answer = 0
    
    MAX = int(len(nums)/2)
    answer = len(set(nums)) if MAX > len(set(nums)) else MAX
    
    return answer