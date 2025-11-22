587. Erect the Fence
Solved
Hard
Topics
premium lock icon
Companies
You are given an array trees where trees[i] = [xi, yi] represents the location of a tree in the garden.

Fence the entire garden using the minimum length of rope, as it is expensive. The garden is well-fenced only if all the trees are enclosed.

Return the coordinates of trees that are exactly located on the fence perimeter. You may return the answer in any order.

 

Example 1:


Input: trees = [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]
Output: [[1,1],[2,0],[4,2],[3,3],[2,4]]
Explanation: All the trees will be on the perimeter of the fence except the tree at [2, 2], which will be inside the fence.
Example 2:


Input: trees = [[1,2],[2,2],[4,2]]
Output: [[4,2],[2,2],[1,2]]
Explanation: The fence forms a line that passes through all the trees.
 

Constraints:

1 <= trees.length <= 3000
trees[i].length == 2
0 <= xi, yi <= 100
All the given positions are unique.




  var outerTrees = function (trees) {
    function cmp(p1, p2, p3) {
        let [x1, y1] = p1;
        let [x2, y2] = p2;
        let [x3, y3] = p3;
        return (y3 - y2) * (x2 - x1) - (y2 - y1) * (x3 - x2);
    }

    trees.sort((a, b) => {
        let diff = a[0] - b[0];
        if (diff === 0) return a[1] - b[1];
        return diff
    });

    const upper = [];
    const lower = [];

    for (let point of trees) {
        while (lower.length > 1 && cmp(lower[lower.length - 2], lower[lower.length - 1], point) > 0) {
            lower.pop()
        }
        while (upper.length > 1 && cmp(upper[upper.length - 2], upper[upper.length - 1], point) < 0) {
            upper.pop()
        }
        upper.push(point);
        lower.push(point);
    }

    return Array.from(new Set(upper.concat(lower)))
};
