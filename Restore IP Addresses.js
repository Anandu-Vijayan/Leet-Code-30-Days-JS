// 93. Restore IP Addresses
// Solved
// Medium
// Topics
// Companies
// A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

// For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
// Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.

 

// Example 1:

// Input: s = "25525511135"
// Output: ["255.255.11.135","255.255.111.35"]
// Example 2:

// Input: s = "0000"
// Output: ["0.0.0.0"]
// Example 3:

// Input: s = "101023"
// Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 

// Constraints:

// 1 <= s.length <= 20
// s consists of digits only.


/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if (!s || s.length === 0) return [];
    const result = [];

    // xxx.xxx.xxx.xxx => think about we have 4 sections totally, "remaining" represents how many sections remains for current dfs level
    const dfs = (startIndex, remaining, ip) => {
        // when remaining is 0, means we've explored 4 sections already
        if (remaining === 0) {
            // found the ip
            if (startIndex === s.length) {
                // remove the last .
                result.push(ip.slice(0, -1));
            }
            // e.g. "1.9.2.1680" when remaining is 0, but still some string left, so not valid, return
            return;
        }

        // For each dfs level, we can have 3 options, 1 digit, 2 digits, 3 digits; e.g. sub = 1 || 19 || 192; 
        for (let i = 1; i <= 3; i++) {
            // because "00".substring(0, 10) will also return "00", so we need to check out of boundery
            if (startIndex + i > s.length) break;
            // find substring
            const sub = s.substring(startIndex, startIndex + i);

            // check if it's leading 0
            if (sub.charAt(0) === '0' && sub.length > 1) return;

            if (Number(sub) <= 255) {
                dfs(startIndex + i, remaining - 1, ip + sub + '.')
            }
        }
    }

    dfs(0, 4, "");
    return result;
};