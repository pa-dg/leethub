class Solution(object):
#     def majorityElement(self, nums):
#         num_dict = {}
        
#         for n in nums:
#             if n not in num_dict:
#                 num_dict[n] = 0
            
#             num_dict[n] += 1
            
#         return max(num_dict, key=num_dict.get)

    def majorityElement(self, nums):
        num_dict = {}
        
        for n in nums:
            if n not in num_dict:
                num_dict[n] = 0
                
            num_dict[n] += 1
        
        return max(num_dict, key = lambda k: num_dict[k])

        
        """
        :type nums: List[int]
        :rtype: int
        """
         