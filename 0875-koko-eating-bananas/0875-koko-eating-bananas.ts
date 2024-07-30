// use two pointers to set range of search from 1 to maximum bananas in piles
// using while..loop to determine k, by finding midIdx, midVal of the range to start with
// determine how many bananas given k from previous step
// 

function minEatingSpeed(piles: number[], h: number): number {
  
    
    let low = 1, high = Math.max(...piles)
    
    while (low <= high) {
        const speed = Math.floor(low + (high - low)/2)
        
        if (canFinish(speed)) {
            high = speed - 1
        } else {
            low = speed + 1
        }
    }
    
    return low;
    
      function canFinish(speed: number): boolean {
        let hours = 0;
        for (let pile of piles) {
            hours += Math.ceil(pile/speed)
        }
        return hours <= h
        
    }
    
};