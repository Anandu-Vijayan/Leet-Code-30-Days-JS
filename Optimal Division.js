// 553. Optimal Division

// Medium

// Topics

// Companies

// You are given an integer array will perform the float division.

// nums.

// The adjacent integers in nums

// For example, for

// nums

// =

// [2,3,4]

// ,we will evaluate the

// "2/3/4"

// expression

// However, you can add any number of parenthesis at any position to change the priority of operations. You want to add these parentheses such the value of the expression after the evaluation is maximum.

// Return the corresponding expression that has the maximum value in string format.

// Note: your expression should not contain redundant parenthesis.

// Example 1:

// Input: nums = [1000,100,10,2]

// Output: "1000/(100/10/2)"

// Explanation: 1000/(100/10/2) = 1000/((100/10)/2)

// = 200

// However, the bold parenthesis in

// "1000/((100/10)/2)" are redundant since they do

// not influence the operation priority.

// So you should return "1000/(100/10/2)".






// Other cases:

// 1000/(100/10)/2 = 50

// 1000/(100/(10/2)) = 50

// 1000/100/10/2 = 0.5

// 1000/100/(10/2) = 2


var optimalDivision = function(nums) {
    if (nums.length === 1) return `${nums[0]}`;
    if (nums.length === 2) return `${nums[0]}/${nums[1]}`;
    return `${nums[0]}/(${nums.slice(1).join('/')})`;
};
