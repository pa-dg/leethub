// 1. declare and initialize a Set, which we use to store unique number as we iterate thru input nums array
// 2. iterate thru the input nums array, if current num exists in Set return true, else add to Set
// 3. return false in the end

function containsDuplicate(nums: number[]): boolean {
    const previous: Set<number> = new Set()

    for (const n of nums) {
        if (previous.has(n)) return true

        previous.add(n)
    }

    return false
};