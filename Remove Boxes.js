// 546. Remove Boxes

// Hard

// Topics

// Companies

// You are given several boxes with different colors represented by different positive numbers.

// You may experience several rounds to remove boxes until there is no box left. Each time you can choose some continuous boxes with the same color (i.e., composed of k boxes, k >= 1), remove them and get k * k points.

// Return the maximum points you can get.

// Example 1:

// Input: boxes = [1,3,2,2,2,3,4,3,1]

// Output: 23

// Explanation:

// [1, 3, 2, 2, 2, 3, 4, 3, 1]

// Example 2:

// [1, 3, 3, 4, 3, 1] (3*3=9 points)

// [1, 3, 3, 3, 1] (1*1=1 points)

// [1, 1] (3*3=9 points)

// [] (2*2=4 points)

// Input: boxes = [1,1,1]

// Output: 9

// Example 3:

// Input: boxes


/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function (boxes) {
  const merged = []
  const points = []
  let count = 1

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i] !== boxes[i + 1]) {
      merged.push(boxes[i])
      points.push(count)
      count = 1
      continue
    }
    count++
  }

  const size = merged.length;
  const dp = Array.from({ length: size }, () => Array.from({ length: size }, () => new Uint16Array(boxes.length)))

  const calculate = (l, r, p) => {
    if (l > r) {
        return 0
    }

    if (dp[l][r][p]) {
        return dp[l][r][p]
    }

    let point = points[l] + p
    let max = point * point + calculate(l + 1, r, 0)

    for (let i = l + 1; i <= r; i++) {
      if (merged[i] === merged[l]) {
        max = Math.max(max, calculate(l + 1, i - 1, 0) + calculate(i, r, point))
      }
    }

    dp[l][r][p] = max
    return max
  }

  return calculate(0, size - 1, 0)
}












