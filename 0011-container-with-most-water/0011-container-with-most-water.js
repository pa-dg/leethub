/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1
    
    while (left < right) {
        const area = (right - left) * Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, area);
    
        if (height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
        
    return maxArea;
            
        
};