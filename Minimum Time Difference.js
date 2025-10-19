// 539. Minimum Time Difference
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.
 

// Example 1:

// Input: timePoints = ["23:59","00:00"]
// Output: 1
// Example 2:

// Input: timePoints = ["00:00","23:59","00:00"]
// Output: 0
 

// Constraints:

// 2 <= timePoints.length <= 2 * 104
// timePoints[i] is in the format "HH:MM".
 
/**
 * @param {string[]} timePoints
 * @return {number}
 */
function findMinDifference(timePoints) {
  const minutesArray = [];
  const seen = new Array(24 * 60).fill(false); // To detect duplicates

  // Helper to convert "HH:MM" to total minutes
  function toMinutes(time) {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  }

  for (const time of timePoints) {
    const mins = toMinutes(time);
    if (seen[mins]) {
      // Duplicate time means min difference is 0
      return 0;
    }
    seen[mins] = true;
    minutesArray.push(mins);
  }

  minutesArray.sort((a, b) => a - b);

  let minDiff = 24 * 60 + minutesArray[0] - minutesArray[minutesArray.length - 1];
  
  for (let i = 1; i < minutesArray.length; i++) {
    minDiff = Math.min(minDiff, minutesArray[i] - minutesArray[i - 1]);
  }

  return minDiff;
}