// 473. Matchsticks to Square
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. You want to use all the matchsticks to make one square. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.

// Return true if you can make this square and false otherwise.

 

// Example 1:


// Input: matchsticks = [1,1,2,2,2]
// Output: true
// Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
// Example 2:

// Input: matchsticks = [3,3,3,3,4]
// Output: false
// Explanation: You cannot find a way to form a square with all the matchsticks.
 

// Constraints:

// 1 <= matchsticks.length <= 15
// 1 <= matchsticks[i] <= 108
 

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(M) {
    let n = M.length, side = M.reduce((a,c) => a + c) / 4
    M.sort((a,b) => b - a)
    if (side !== ~~side || M[0] > side)
        return false
    const btrack = (i, space, done) => {
        if (done === 3)
            return true
        for (; i < n; i++) {
            let num = M[i], res
            if (num > space)
                continue
            M[i] = side + 1
            if (num === space)
                res = btrack(1, side, done+1)
            else
                res = btrack(i+1, space-num, done)
            if (res)
                return true
            M[i] = num
            while (M[i+1] === num)
                i++
        }
        return false
    }
    return btrack(0, side, 0)
};

