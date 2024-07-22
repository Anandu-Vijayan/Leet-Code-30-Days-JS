// 40. Combination Sum II
// Solved
// Medium
// Topics
// Companies
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

 

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output: 
// [
// [1,2,2],
// [5]
// ]
 

// Constraints:

// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    const res = [];

    function dfs(target, start, comb) {
        if (target < 0) {
            return;
        }

        if (target === 0) {
            res.push(comb.slice());
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {

            if (i > start && candidates[i] === candidates[i-1]) {
                continue;
            }

            if (candidates[i] > target) {
                break;
            }

            dfs(target - candidates[i], i + 1, comb.concat(candidates[i]));
        }
    }

    dfs(target, 0, []);
    return res;
};