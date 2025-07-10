// 407. Trapping Rain Water II
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Given an m x n integer matrix heightMap representing the height of each unit cell in a 2D elevation map, return the volume of water it can trap after raining.

 

// Example 1:


// Input: heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]
// Output: 4
// Explanation: After the rain, water is trapped between the blocks.
// We have two small ponds 1 and 3 units trapped.
// The total volume of water trapped is 4.
// Example 2:


// Input: heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]
// Output: 10
 

// Constraints:

// m == heightMap.length
// n == heightMap[i].length
// 1 <= m, n <= 200
// 0 <= heightMap[i][j] <= 2 * 104



/**
 * @param {number[][]} heightMap
 * @return {number}
 */
class MinHeap {
    constructor() {
        this.heap = [];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    compare(i, j) {
        return this.heap[i].height < this.heap[j].height;
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return top;
    }

    size() {
        return this.heap.length;
    }

    bubbleUp(index) {
        let parent = Math.floor((index - 1) / 2);
        while (index > 0 && this.compare(index, parent)) {
            this.swap(index, parent);
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    bubbleDown(index) {
        const length = this.heap.length;
        let smallest = index;

        while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (left < length && this.compare(left, smallest)) {
                smallest = left;
            }

            if (right < length && this.compare(right, smallest)) {
                smallest = right;
            }

            if (smallest !== index) {
                this.swap(index, smallest);
                index = smallest;
            } else break;
        }
    }
}

var trapRainWater = function(heightMap) {
    const m = heightMap.length;
    const n = heightMap[0].length;
    if (m < 3 || n < 3) return 0;
    const heap = new MinHeap();
    const visited = Array.from({length: m}, () => Array(n).fill(false));
    const directions = [
        [1,0],
        [0,1],
        [-1,0],
        [0,-1]
    ];
    let waterTrapped = 0;
    for(let i=0; i<m; i++) {
        heap.push({row: i, col: 0, height: heightMap[i][0]});
        visited[i][0] = true;

        heap.push({row: i, col: n-1, height: heightMap[i][n-1]});
        visited[i][n-1] = true;
    };
    for(let j=0; j<n; j++) {
        if (!visited[0][j]) {
            heap.push({row: 0, col: j, height: heightMap[0][j]});
            visited[0][j] = true;
        }

       if (!visited[m-1][j]) {
            heap.push({row: m-1, col: j, height: heightMap[m-1][j]});
            visited[m-1][j] = true;
        }
    };

    while (heap.size() > 0) {
        const {row, col, height} = heap.pop();
        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;
            if (
                newRow < 0 || newRow >= m ||
                newCol < 0 || newCol >= n ||
                visited[newRow][newCol]
            ) continue;
            visited[newRow][newCol] = true;
            const neighborHeight = heightMap[newRow][newCol];
            if (neighborHeight < height) waterTrapped += height - neighborHeight;
            heap.push({
                row: newRow,
                col: newCol,
                height: Math.max(neighborHeight, height)
            });
        }
    };

    return waterTrapped;
};