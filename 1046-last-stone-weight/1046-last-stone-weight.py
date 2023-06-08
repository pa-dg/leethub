import heapq

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones = list(map(lambda n: -n, stones))
        heapq.heapify(stones)
        
        while (len(stones) > 1):
            first = heapq.heappop(stones)   #-8
            second = heapq.heappop(stones)  #-7
            
            if first != second:
                heapq.heappush(stones, first - second)
                
        return abs(stones[0]) if len(stones) > 0 else 0
        
        