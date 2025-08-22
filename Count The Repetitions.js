// 466. Count The Repetitions
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// We define str = [s, n] as the string str which consists of the string s concatenated n times.

// For example, str == ["abc", 3] =="abcabcabc".
// We define that string s1 can be obtained from string s2 if we can remove some characters from s2 such that it becomes s1.

// For example, s1 = "abc" can be obtained from s2 = "abdbec" based on our definition by removing the bolded underlined characters.
// You are given two strings s1 and s2 and two integers n1 and n2. You have the two strings str1 = [s1, n1] and str2 = [s2, n2].

// Return the maximum integer m such that str = [str2, m] can be obtained from str1.

 

// Example 1:

// Input: s1 = "acb", n1 = 4, s2 = "ab", n2 = 2
// Output: 2
// Example 2:

// Input: s1 = "acb", n1 = 1, s2 = "acb", n2 = 1
// Output: 1
 

// Constraints:

// 1 <= s1.length, s2.length <= 100
// s1 and s2 consist of lowercase English letters.
// 1 <= n1, n2 <= 106


/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
    if (n1 === 0) return 0;

    let index = 0; // pointer in s2
    let count = 0; // how many s2 sequences matched so far
    const len1 = s1.length, len2 = s2.length;

    // Map to store: index in s2 => [iteration of s1, count of s2 matched]
    const recall = new Map();

    for (let i = 0; i < n1; i++) {
        for (let j = 0; j < len1; j++) {
            if (s1[j] === s2[index]) {
                index++;
                if (index === len2) {
                    count++;
                    index = 0;
                }
            }
        }

        // Cycle detection
        if (recall.has(index)) {
            const [prev_i, prev_count] = recall.get(index);
            // Length of the cycle
            const cycle_len = i - prev_i;
            // Number of s2 sequences matched in one cycle
            const cycle_count = count - prev_count;
            // How many cycles fit into the remaining iterations
            const cycles = Math.floor((n1 - 1 - i) / cycle_len);
            // Jump forward
            count += cycles * cycle_count;
            i += cycles * cycle_len;
        } else {
            recall.set(index, [i, count]);
        }
    }

    return Math.floor(count / n2);
};