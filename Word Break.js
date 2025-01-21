// 139. Word Break
// Solved
// Medium
// Topics
// Companies
// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false
 

// Constraints:

// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.


const wordBreak = (s, wordDict) => {
    if (wordDict == null || wordDict.length === 0) return false;
    const set = new Set(wordDict);
  
    // When s = 'catsandog', wordDict = ['cats', 'ca', 'ts']
    // After 'cats' and 'ca', it will become 'andog', 'tsandog'
    // For 'tsandog', after 'ts', it will become 'andog' again, visited set here is for memoization
    const visited = new Set();
    const q = [0];
  
    while (q.length) {
      const start = q.shift();
  
      if (!visited.has(start)) {
        for (let end = start + 1; end <= s.length; end++) {
          if (set.has(s.slice(start, end))) {
            if (end === s.length) return true;
            q.push(end);
          }
        }
        visited.add(start);
      }
    }
    return false;
  };