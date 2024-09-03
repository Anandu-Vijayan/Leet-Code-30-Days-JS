// 84. Largest Rectangle in Histogram
// Solved
// Hard
// Topics
// Companies
// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

 

// Example 1:


// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// Example 2:


// Input: heights = [2,4]
// Output: 4
 

// Constraints:

// 1 <= heights.length <= 105
// 0 <= heights[i] <= 104


/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const stack = [-1];
    let max_area = 0;

    for (let i = 0; i < heights.length; i++) {
        while (stack[stack.length - 1] !== -1 && heights[i] <= heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()];
            const width = i - stack[stack.length - 1] - 1;
            max_area = Math.max(max_area, height * width);
        }
        stack.push(i);
    }

    while (stack[stack.length - 1] !== -1) {
        const height = heights[stack.pop()];
        const width = heights.length - stack[stack.length - 1] - 1;
        max_area = Math.max(max_area, height * width);
    }

    return max_area;
};