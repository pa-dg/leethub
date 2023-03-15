class Solution(object):
    def twoSum(self, nums, target):
        num_dict = {}

        for index, n in enumerate(nums):
            complement = target - n

            if complement in num_dict:
                return (index, num_dict[complement])

            num_dict[n] = index
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        