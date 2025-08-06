// 447. Number of Boomerangs
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// You are given n points in the plane that are all distinct, where points[i] = [xi, yi]. A boomerang is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

// Return the number of boomerangs.

 

// Example 1:

// Input: points = [[0,0],[1,0],[2,0]]
// Output: 2
// Explanation: The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]].
// Example 2:

// Input: points = [[1,1],[2,2],[3,3]]
// Output: 2
// Example 3:

// Input: points = [[1,1]]
// Output: 0
 

// Constraints:

// n == points.length
// 1 <= n <= 500
// points[i].length == 2
// -104 <= xi, yi <= 104
// All the points are unique.


/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let map = new Map();

    let count = 0;

    for(let i = 0; i < points.length; i++){
        map.clear();
        for(let j = 0; j < points.length; j++){
            if( i === j) continue;
            
            let dx = points[j][0] - points[i][0];
            let dy = points[j][1] - points[i][1];
            let distance = dx * dx + dy * dy;

            let size = map.get(distance) || 0;

            count += size++ * 2;

            map.set(distance, size);
        }
    }

    return count;
    
};