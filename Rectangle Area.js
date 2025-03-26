// 223. Rectangle Area
// Solved
// Medium
// Topics
// Companies
// Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles.

// The first rectangle is defined by its bottom-left corner (ax1, ay1) and its top-right corner (ax2, ay2).

// The second rectangle is defined by its bottom-left corner (bx1, by1) and its top-right corner (bx2, by2).

 

// Example 1:

// Rectangle Area
// Input: ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
// Output: 45
// Example 2:

// Input: ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2
// Output: 16
 

// Constraints:

// -104 <= ax1 <= ax2 <= 104
// -104 <= ay1 <= ay2 <= 104
// -104 <= bx1 <= bx2 <= 104
// -104 <= by1 <= by2 <= 104


/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    const maxStart1 = Math.max(ax1, bx1);
    const minEnd1 = Math.min(ax2, bx2);
   
    const width = Math.abs(maxStart1 - minEnd1);
    
    const minStart2 = Math.min(ay2, by2);
    const maxEnd2 = Math.max(ay1, by1);
    
    const height = Math.abs(minStart2 - maxEnd2);
    
    let overLapArea = 0;
    
    if (maxStart1 <= minEnd1 && maxEnd2 <= minStart2) {
        overLapArea = width * height;
    }
    const rectArea1 = calculateArea(ax1, ay1, ax2, ay2);
    const rectArea2 = calculateArea(bx1, by1, bx2, by2);
    
    return rectArea1 + rectArea2 - overLapArea;
} 

function calculateArea(x1, y1, x2, y2) {
    const width = Math.abs(x1 - x2);
    const height = Math.abs(y1 - y2);
    return width * height;
}