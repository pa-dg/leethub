class Solution:
    
#Solution 1:
#     import re

#     def isPalindrome(self, s: str) -> bool:
#         alphanum = re.sub(r'[^a-zA-Z0-9]',"", s.lower())

#         return alphanum == alphanum[::-1]


# #Solution 2:
    def isPalindrome(self, s: str) -> bool:
        alpha = string.ascii_lowercase
        num = set(str(i) for i in range(10))
        left, right = 0, len(s) - 1
        
        while left < right:
            if s[left].lower() not in alpha and s[left] not in num:
                left += 1
                continue
            if s[right].lower() not in alpha and s[right] not in num:
                right -= 1
                continue
            if s[left].lower() != s[right].lower():
                return False
            left += 1
            right -= 1
        return True
                                            
        
            
            
    