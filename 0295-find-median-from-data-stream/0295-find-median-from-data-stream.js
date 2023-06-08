
var MedianFinder = function() {
    this.large = new MinPriorityQueue()  // [-1]  
    this.small = new MaxPriorityQueue()  // [-2, -3]
    
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (!this.large.size() || this.large.front().element > num) {        
        this.small.enqueue(num)            
        if (this.small.size() - this.large.size() > 1) {       
            this.large.enqueue(this.small.dequeue().element)
        }   
    } else {
        this.large.enqueue(num)
        if (this.large.size() - this.small.size() > 1) {
            this.small.enqueue(this.large.dequeue().element)
        }
    }
    
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    
    if (this.large.size() > this.small.size()) {
        return this.large.front().element
    }
    
    if (this.large.size() < this.small.size()) {
        return this.small.front().element
    }
    
    return (this.large.front().element + this.small.front().element) / 2
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

