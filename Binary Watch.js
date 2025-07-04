// 401. Binary Watch
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.

// For example, the below binary watch reads "4:51".


// Given an integer turnedOn which represents the number of LEDs that are currently on (ignoring the PM), return all possible times the watch could represent. You may return the answer in any order.

// The hour must not contain a leading zero.

// For example, "01:00" is not valid. It should be "1:00".
// The minute must consist of two digits and may contain a leading zero.

// For example, "10:2" is not valid. It should be "10:02".
 

// Example 1:

// Input: turnedOn = 1
// Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
// Example 2:

// Input: turnedOn = 9
// Output: []
 

// Constraints:

// 0 <= turnedOn <= 10



function getValidTime(hours, minutes) {
  if (hours > 11 || minutes > 59) return null;
  return `${hours}:${minutes > 9 ? minutes : '0' + minutes}`;
}

function readBinaryWatch(turnedOn) {
  if (turnedOn > 8) return [];

  const watchTimesArr = [8, 4, 2, 1, 32, 16, 8, 4, 2, 1];
  const validTimesArr = [];
  const turnedOnWatchTimesIdxArr = [];

  let curHours = 0;
  let curMinutes = 0;

  for (let i = 0; i < turnedOn; i++) {
    if (i < 4) curHours += watchTimesArr[i];
    else curMinutes += watchTimesArr[i];
    turnedOnWatchTimesIdxArr.push(i);
  }

  while (true) {
    const validTime = getValidTime(curHours, curMinutes);
    if (validTime) validTimesArr.push(validTime);

    let i = turnedOnWatchTimesIdxArr.length - 1;
    let j = watchTimesArr.length - 1;

    while (turnedOnWatchTimesIdxArr[i] === j) {
      i--;
      j--;
    }

    if (i === -1) break;

    for (let k = i; k < turnedOnWatchTimesIdxArr.length; k++) {
      if (turnedOnWatchTimesIdxArr[k] < 4)
        curHours -= watchTimesArr[turnedOnWatchTimesIdxArr[k]];
      else curMinutes -= watchTimesArr[turnedOnWatchTimesIdxArr[k]];

      if (k === i) turnedOnWatchTimesIdxArr[k]++;
      else turnedOnWatchTimesIdxArr[k] = turnedOnWatchTimesIdxArr[k - 1] + 1;

      if (turnedOnWatchTimesIdxArr[k] < 4)
        curHours += watchTimesArr[turnedOnWatchTimesIdxArr[k]];
      else curMinutes += watchTimesArr[turnedOnWatchTimesIdxArr[k]];
    }
  }

  return validTimesArr;
}