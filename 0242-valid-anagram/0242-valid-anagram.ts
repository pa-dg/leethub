// 0. evaluate if s string and t string are same length, if not return false immediately
// 1. declare an object with k:v pair corresponding to char:count for input s string as we iterate through the string
// 2. iterate thru input s string, add char count accordingly
// 3. iterate thru input t string, if current char exists from step 1, then remove count by 1
// 4. extract values from step 1 object and evaluate if count is 0 return true, else is not anagram

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    let charCount: { [key: string]: number } = {}

    for (let char of s) {
        charCount[char] = charCount[char] + 1 || 1
    }

    for (let char of t) {
        if (charCount[char]) {
            charCount[char]--
        } else return false
    }

    const charCountResult: number[] = Object.values(charCount)
    const zeroCount = (currentVal: number) => currentVal === 0

    if (!charCountResult.every(zeroCount)) {
        return false
    } else {
        return true
    }
};