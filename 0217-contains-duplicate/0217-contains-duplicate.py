class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        numSet = set()
        
        for n in nums:
            if n in numSet:
                return True
            else:
                numSet.add(n)
        
        return False