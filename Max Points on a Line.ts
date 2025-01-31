// 149. Max Points on a Line
// Solved
// Hard
// Topics
// Companies
// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

 

// Example 1:


// Input: points = [[1,1],[2,2],[3,3]]
// Output: 3
// Example 2:


// Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// Output: 4
 

// Constraints:

// 1 <= points.length <= 300
// points[i].length == 2
// -104 <= xi, yi <= 104
// All the points are unique.


function maxPoints(points: number[][]): number {
    if (points.length <= 2) return points.length;
    let max = 2;
    for (let i = 0; i < points.length - 1; i++) {
        const map = new Map<number, number>();
        for (let j = i + 1; j < points.length; j++) {
            if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) continue;
            let a = points[i][0] != points[j][0] ? (points[i][1] - points[j][1]) / (points[i][0] - points[j][0]): Infinity;
            map.set(a, (map.get(a) || 0) + 1);
            max = Math.max(max, 1 + map.get(a));
        }
    }
    return max;
}