// 475. Heaters
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Winter is coming! During the contest, your first job is to design a standard heater with a fixed warm radius to warm all the houses.

// Every house can be warmed, as long as the house is within the heater's warm radius range. 

// Given the positions of houses and heaters on a horizontal line, return the minimum radius standard of heaters so that those heaters could cover all houses.

// Notice that all the heaters follow your radius standard, and the warm radius will be the same.

 

// Example 1:

// Input: houses = [1,2,3], heaters = [2]
// Output: 1
// Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.
// Example 2:

// Input: houses = [1,2,3,4], heaters = [1,4]
// Output: 1
// Explanation: The two heaters were placed at positions 1 and 4. We need to use a radius 1 standard, then all the houses can be warmed.
// Example 3:

// Input: houses = [1,5], heaters = [2]
// Output: 3
 

// Constraints:

// 1 <= houses.length, heaters.length <= 3 * 104
// 1 <= houses[i], heaters[i] <= 109
 


/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    // Sort the houses and heaters
    houses.sort((a, b) => a - b);
    heaters.sort((a, b) => a - b);
    
    let maxRadius = 0;

    // For each house, find the closest heater
    for (let house of houses) {
        // Use binary search to find the position of the closest heater
        let pos = binarySearch(heaters, house);
        
        // Calculate the distance to the closest heater
        let leftDistance = pos === 0 ? Infinity : house - heaters[pos - 1];
        let rightDistance = pos === heaters.length ? Infinity : heaters[pos] - house;
        
        // The closest heater distance for this house
        let closestHeaterDistance = Math.min(leftDistance, rightDistance);
        
        // Update the maximum radius needed
        maxRadius = Math.max(maxRadius, closestHeaterDistance);
    }

    return maxRadius;
};

function binarySearch(heaters, house) {
    let left = 0;
    let right = heaters.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (heaters[mid] < house) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}