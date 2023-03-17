class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        count = {}
        freq=[[] for i in range(len(nums) + 1)]
        
        for n in nums:
            count[n] = count.get(n, 0) + 1
        for n, c in count.items():
            freq[c].append(n)
            
        result = []
        for i in range(len(nums), 0, -1):
            for n in freq[i]:
                result.append(n)
                if len(result) == k:
                    return result
                

        
         
            