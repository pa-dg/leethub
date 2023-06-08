/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const stonesQueue = new MaxPriorityQueue();
    for (let stone of stones) {
        stonesQueue.enqueue(stone);
    }
    
    while (stonesQueue.size() > 1) {
        let heaviest = stonesQueue.dequeue().element
        let secondHeaviest = stonesQueue.dequeue().element;
        
        let difference = heaviest - secondHeaviest;
        if (difference) stonesQueue.enqueue(difference);
    }
    
    return stonesQueue.size() ? stonesQueue.front().element : 0
};