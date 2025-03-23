// 220. Contains Duplicate III
// Solved
// Hard
// Topics
// Companies
// Hint
// You are given an integer array nums and two integers indexDiff and valueDiff.

// Find a pair of indices (i, j) such that:

// i != j,
// abs(i - j) <= indexDiff.
// abs(nums[i] - nums[j]) <= valueDiff, and
// Return true if such pair exists or false otherwise.

 

// Example 1:

// Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
// Output: true
// Explanation: We can choose (i, j) = (0, 3).
// We satisfy the three conditions:
// i != j --> 0 != 3
// abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
// abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
// Example 2:

// Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
// Output: false
// Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.
 

// Constraints:

// 2 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 1 <= indexDiff <= nums.length
// 0 <= valueDiff <= 109


var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    
    if(  (valueDiff == 0) && ( new Set(nums).size == nums.length ) ) {
        
        // Quick response for valueDiff = 0
        // valueDiff = 9 requires at least one pair ofrepeated element
        return false;
    }
    
    // key: element value / width
    // value: corresponding element 
    let bucket = new Map();
    
    const width = valueDiff + 1;
    
    for( let idx = 0 ; idx < nums.length ; idx++ ){
        
        let curNumber = nums[idx];
        
        let bucketIdx = Math.floor( curNumber / width );
        
        if( bucket.has(bucketIdx) ){
            
            // two numbers in the same bucket, gap must be smaller than width
            return true;
            
        }else if( bucket.has(bucketIdx+1) && Math.abs( curNumber - bucket.get(bucketIdx+1) ) < width ){
        
            // two number in two consecutive buckets, and gap is smaller than width
            return true;
            
        }else if( bucket.has(bucketIdx-1) && Math.abs( curNumber - bucket.get(bucketIdx-1) ) < width ){
            
            // two number in two consecutive buckets, and gap is smaller than width
            return true;
        }
        
        
        // put current number into corresponding bucket
        bucket.set( bucketIdx,  curNumber );
        
        if( idx >= indexDiff ){
            
            let oldNumber = nums[ idx - indexDiff ];
            let oldNumberBucketIdx = Math.floor( oldNumber / width);
            bucket.delete( oldNumberBucketIdx );
        } 
        
    }
    
   
    
    return false;
};