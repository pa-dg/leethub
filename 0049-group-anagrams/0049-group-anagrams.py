class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        anagram_dict = {}
        
        for string in strs:
            sorted_str = "".join(sorted(string))
            
            if sorted_str not in anagram_dict:
                anagram_dict[sorted_str] = []
            
            anagram_dict[sorted_str].append(string)
            
        return list(anagram_dict.values())