// 514. Freedom Trail
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// In the video game Fallout 4, the quest "Road to Freedom" requires players to reach a metal dial called the "Freedom Trail Ring" and use the dial to spell a specific keyword to open the door.

// Given a string ring that represents the code engraved on the outer ring and another string key that represents the keyword that needs to be spelled, return the minimum number of steps to spell all the characters in the keyword.

// Initially, the first character of the ring is aligned at the "12:00" direction. You should spell all the characters in key one by one by rotating ring clockwise or anticlockwise to make each character of the string key aligned at the "12:00" direction and then by pressing the center button.

// At the stage of rotating the ring to spell the key character key[i]:

// You can rotate the ring clockwise or anticlockwise by one place, which counts as one step. The final purpose of the rotation is to align one of ring's characters at the "12:00" direction, where this character must equal key[i].
// If the character key[i] has been aligned at the "12:00" direction, press the center button to spell, which also counts as one step. After the pressing, you could begin to spell the next character in the key (next stage). Otherwise, you have finished all the spelling.
 

// Example 1:


// Input: ring = "godding", key = "gd"
// Output: 4
// Explanation:
// For the first key character 'g', since it is already in place, we just need 1 step to spell this character. 
// For the second key character 'd', we need to rotate the ring "godding" anticlockwise by two steps to make it become "ddinggo".
// Also, we need 1 more step for spelling.
// So the final output is 4.
// Example 2:

// Input: ring = "godding", key = "godding"
// Output: 13
 

// Constraints:

// 1 <= ring.length, key.length <= 100
// ring and key consist of only lower case English letters.
// It is guaranteed that key could always be spelled by rotating ring.


/**
 * 遞迴 + 記憶化
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
function findRotateSteps(ring, key) {
  const n = ring.length;
  const m = key.length;

  // 預處理：每個字母在 ring 上出現的所有索引
  const pos = Array.from({ length: 26 }, () => []);
  for (let i = 0; i < n; i++) {
    const idx = ring.charCodeAt(i) - 97; // 'a' => 97
    pos[idx].push(i);
  }

  // 記憶化：memo[i][j] = 在 ring 指針於 j、要打 key[i..] 的最少步數
  const memo = Array.from({ length: m + 1 }, () => Array(n).fill(-1));

  // 圓環距離
  const dist = (a, b) => {
    const d = Math.abs(a - b);
    return Math.min(d, n - d);
  };

  function dfs(i, j) {
    if (i === m) return 0;            // 全部輸入完畢
    if (memo[i][j] !== -1) return memo[i][j];

    const need = key.charCodeAt(i) - 97;
    let best = Infinity;

    // 嘗試把指針從 j 轉到 ring 上所有等於 key[i] 的位置 p
    for (const p of pos[need]) {
      const step = dist(j, p) + 1;    // 旋轉步數 + 按下確定
      best = Math.min(best, step + dfs(i + 1, p));
    }

    memo[i][j] = best;
    return best;
  }

  // 起始：指針在 0
  return dfs(0, 0);
}

// 測試
console.log(findRotateSteps("godding", "gd")); // 4