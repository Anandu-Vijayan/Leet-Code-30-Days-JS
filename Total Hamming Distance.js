// 477. Total Hamming Distance
// Medium
// Topics
// premium lock icon
// Companies
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given an integer array nums, return the sum of Hamming distances between all the pairs of the integers in nums.

 

// Example 1:

// Input: nums = [4,14,2]
// Output: 6
// Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
// showing the four bits relevant in this case).
// The answer will be:
// HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
// Example 2:

// Input: nums = [4,14,4]
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 109
// The answer for the given input will fit in a 32-bit integer.


var totalHammingDistance = function(nums) {
    const cache={};
    const toBase2=(n)=>{
        const key=n;
        if(cache[key]) return cache[key];

        // 32 bit integer array    
        const arr=Array(32).fill().map(()=>0);
        let pos=0;
        while(n>0){
            const left=n%2;
            arr[pos]=left;
            n=Math.trunc(n/2);
            pos++;
        }
        return cache[key]=arr.reverse();
    }
    
    // Build a 2xD mat
    let base2mat=[];
    for(let i=0;i<nums.length;i++)
        base2mat.push(toBase2(nums[i]));

    // Calculating each column
    let totalCount=0;
    for(let c=0;c<base2mat[0].length;c++){
        let zeroes=0, ones=0;
        for(let r=0;r<base2mat.length;r++){
            zeroes+=base2mat[r][c]===0?1:0;
            ones+=base2mat[r][c]===1?1:0;
        }
        totalCount+=zeroes*ones;
    }

    return totalCount;
};