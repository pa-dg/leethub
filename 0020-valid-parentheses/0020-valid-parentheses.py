class Solution:
    def isValid(self, s: str) -> bool:
        dict = { '(': ')', '{': '}', '[': ']' }
        stack = []

        for c in s:
            if c in dict:
                stack.append(c)
                
            elif len(stack) == 0 or dict[stack.pop()] != c:
                return False

        return len(stack) == 0