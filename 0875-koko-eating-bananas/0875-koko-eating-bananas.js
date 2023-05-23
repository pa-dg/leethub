/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let minRate = Number.POSITIVE_INFINITY;
    let [l, r] = [1, Math.max(...piles)];
    
    while (l <= r) {
        const mid = Math.floor(l + (r - l) / 2);
        const hourSpent = getHourSpent(mid, piles);
        
        if (hourSpent > h) {
            l = mid + 1;  
        }; 
        if (hourSpent <= h) {
            minRate = Math.min(minRate, mid);
            r = mid - 1;  
        };
    };
  
    return minRate;
};

const getHourSpent = (rate, piles) => {
    let total = 0;
    for (const pile of piles) {
      total += Math.ceil(pile / rate)  
    };
    
    return total;
}

// const getRange = (start, end, length = end - start) => {
//     return Array.from({ length }, (_, i) => start + i)
// }
