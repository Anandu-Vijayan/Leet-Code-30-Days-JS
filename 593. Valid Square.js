// 593. Valid Square
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given the coordinates of four points in 2D space p1, p2, p3 and p4, return true if the four points construct a square.

// The coordinate of a point pi is represented as [xi, yi]. The input is not given in any order.

// A valid square has four equal sides with positive length and four equal angles (90-degree angles).

 

// Example 1:

// Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
// Output: true
// Example 2:

// Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
// Output: false
// Example 3:

// Input: p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
// Output: true
 

// Constraints:

// p1.length == p2.length == p3.length == p4.length == 2
// -104 <= xi, yi <= 104


function calcD(p1, p2) {
    return Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);
}
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
    if(p1[0] == p2[0] && p1[1] == p2[1] || p1[0] == p3[0] && p1[1] == p3[1] || p1[0] == p4[0] && p1[1] == p4[1] ||
    p3[0] == p2[0] && p3[1] == p2[1] || p4[0] == p2[0] && p4[1] == p2[1]
     || p3[0] == p4[0] && p3[1] == p4[1]) {
        return false;
    }
    const d2 = calcD(p1, p2);
    const d3 = calcD(p1, p3);
    const d4 = calcD(p1, p4);
    if (d2 == d3) {
        return calcD(p2, p3) == d4 && calcD(p2, p4) == d2 && calcD(p3, p4) == d2;
    }
    if (d2 == d4) {
        return calcD(p2, p4) == d3 && calcD(p2, p3) == d2 && calcD(p4, p3) == d2;
    }
    if(d3 == d4) {
        return calcD(p3, p4) == d2 && calcD(p2, p3) == d3 && calcD(p4, p2) == d3;
    }
return false;
};