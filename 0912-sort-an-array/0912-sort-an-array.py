from collections import deque

class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        if len(nums) < 2: return nums
        
        mid = len(nums) // 2
        left = self.sortArray(nums[:mid])
        right = self.sortArray(nums[mid::])
        
        return self.merge(left, right)
    
    def merge(self, left, right):
        merged = []
        
        while len(left) and len(right):
            if left[0] < right[0]:
                merged.append(left.pop(0))
            else:
                merged.append(right.pop(0))
                
        return merged + left + right
    