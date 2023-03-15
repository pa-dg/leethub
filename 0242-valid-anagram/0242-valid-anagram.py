class Solution(object):
    def isAnagram(self, s, t):
        s_dict = {}
        t_dict = {}
        
        for char1 in s:
            s_dict[char1] = s_dict.get(char1, 0) + 1
            
        for char2 in t:
            t_dict[char2] = t_dict.get(char2, 0) + 1
            
        return s_dict == t_dict
        

        