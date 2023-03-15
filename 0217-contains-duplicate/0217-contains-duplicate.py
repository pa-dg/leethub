class Solution(object):
    def containsDuplicate(self, nums):
        no_dups = set()
        
        for single in nums:
            if single not in no_dups:
                no_dups.add(single)
            else:
                return True
        
        return False
       