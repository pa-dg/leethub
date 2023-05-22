/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
//     const minRate = Number.POSITIVE_INFINITY;
//     const maxRate = Math.max(...piles);
//     const rates = getRange(1, maxRate + 1);
//     let [l, r] = [0, rates.length - 1];
    
//     while (l <= r) {
//         const midIdx = Math.floor(l + (r - l) / 2);
//         const midVal = rates[midIdx];
//         const guessHour = getHour(midVal, piles)
        
//         if (guessHour === h) {
//             console.log(guessHour)
//             minRate = Math.min(minRate, midVal);
//         } else if (guessHour <= h) {
//             r = midIdx + 1;
//         } else {
//             l = midIdx + 1;
//         }
//     };
  
//     return minRate;
    let [left, right] = [1, Math.max(...piles)];

    while (left < right) {
        const mid = (left + right) >> 1;
        const hourSpent = getHourSpent(mid, piles);

        const isTargetGreater = h < hourSpent;
        if (isTargetGreater) left = mid + 1;

        const isTargetLess = hourSpent <= h;
        if (isTargetLess) right = mid;
    }

    return right;
};

const getHourSpent = (mid, piles, hourSpent = 0) => {
    for (const pile of piles) {
        hourSpent += Math.ceil(pile / mid);
    }

    return hourSpent;
};


// const getRange = (start, end, length = end - start) => {
//     return Array.from({ length }, (_, i) => start + i)
// }

// const getHour = (rate, piles) => {
//     console.log('rate', rate)
//     console.log('piles', piles)
//     let totalHours = 0
//     for (let i = 0; i < piles.length; i++) {
//         totalHours += Math.ceil(piles[i] / rate); 
//     }
//     console.log(totalHours)
//     return totalHours;
// }