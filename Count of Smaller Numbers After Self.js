// 315. Count of Smaller Numbers After Self
// Solved
// Hard
// Topics
// Companies
// Given an integer array nums, return an integer array counts where counts[i] is the number of smaller elements to the right of nums[i].

 

// Example 1:

// Input: nums = [5,2,6,1]
// Output: [2,1,1,0]
// Explanation:
// To the right of 5 there are 2 smaller elements (2 and 1).
// To the right of 2 there is only 1 smaller element (1).
// To the right of 6 there is 1 smaller element (1).
// To the right of 1 there is 0 smaller element.
// Example 2:

// Input: nums = [-1]
// Output: [0]
// Example 3:

// Input: nums = [-1,-1]
// Output: [0,0]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104


var countSmaller = function(nums) 
{
        /*
                My Fenwick Tree implementation - it's 1 based, but the range of nums is -10^4 - 10^4.
                Hilarity ensues.  Due to the nature of the problem, I'll start everything at 0 and build
                up incrementally.
        */
        const FTree = function(min,max)
        {
                const offset = 1 - min;         // Add this to each num for FT stuff.
                
                let fnums = Array(1+max-min).fill(0);
                
                /* Least Significant Bit finder - used in queries and poit updates - get the bit pattern starting at the rightmost 1. */
                const lsb = n => n&-n;
                
                /* Query - finds the count of elements through the given index (after translating to FT point offset). */
                const query = function(ind)
                {
                        ind += offset;
                        
                        let sum = 0;
                        while(ind > 0)
                        {
                                sum += fnums[ind-1];
                                ind -= lsb(ind);
                        }
                        return sum;
                };
                
                /* Increment - updates the count by 1 at the given (translated) index. */
                const incr = function(ind)
                {
                        ind += offset;
                        
                        while(ind <= fnums.length)
                        {
                                fnums[ind-1]++;
                                ind += lsb(ind);
                        }
                };
                
                return {query,incr};
        };

        
        /* Find the min and max of nums. */
        let min = nums[0], max = nums[0];
        for(let num of nums)
        {
                min = Math.min(min, num);
                max = Math.max(max, num);
        }
        
        /* Create a Fenwick tree. */
        let ftree = FTree(min,max);
        
        /* Going right to left, count the smaller items to the right. */
        let result = Array(nums.length);
        result[result.length-1] = 0;
        for(let i=result.length-1; i>=0; i--)
        {
                result[i] = ftree.query(nums[i]-1);
                ftree.incr(nums[i]);
        }
        
        return result;
};