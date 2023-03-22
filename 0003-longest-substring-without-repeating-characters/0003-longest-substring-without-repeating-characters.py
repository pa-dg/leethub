class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start = 0
        charSet = set()
        count = 0
        
        for end in range(len(s)):
            while s[end] in charSet:
                charSet.remove(s[start])
                start += 1
            
            charSet.add(s[end])
            count = max(count, end - start + 1)
        
        return count
        
    
    
    # have start and end pointer
    # create set to store chars iterated
    # iterate by index, if duplicate found in set, move start pointer, remove duplicate in set
    # else, add char in set and move end pointer