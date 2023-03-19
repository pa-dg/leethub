class Solution:
    import re
    
    def isPalindrome(self, s: str) -> bool:
        alphanum = re.sub(r'[^a-zA-Z0-9]',"", s.lower())
        
        return alphanum == alphanum[::-1]