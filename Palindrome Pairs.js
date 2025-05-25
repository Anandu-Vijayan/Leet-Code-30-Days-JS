// 336. Palindrome Pairs
// Solved
// Hard
// Topics
// Companies
// Hint
// You are given a 0-indexed array of unique strings words.

// A palindrome pair is a pair of integers (i, j) such that:

// 0 <= i, j < words.length,
// i != j, and
// words[i] + words[j] (the concatenation of the two strings) is a palindrome.
// Return an array of all the palindrome pairs of words.

// You must write an algorithm with O(sum of words[i].length) runtime complexity.

 

// Example 1:

// Input: words = ["abcd","dcba","lls","s","sssll"]
// Output: [[0,1],[1,0],[3,2],[2,4]]
// Explanation: The palindromes are ["abcddcba","dcbaabcd","slls","llssssll"]
// Example 2:

// Input: words = ["bat","tab","cat"]
// Output: [[0,1],[1,0]]
// Explanation: The palindromes are ["battab","tabbat"]
// Example 3:

// Input: words = ["a",""]
// Output: [[0,1],[1,0]]
// Explanation: The palindromes are ["a","a"]
 

// Constraints:

// 1 <= words.length <= 5000
// 0 <= words[i].length <= 300
// words[i] consists of lowercase English letters.


const palindromePairs = function(words) {
    const wordMap = new Map();
    const lengthSet = new Set();

    for (let i = 0; i < words.length; i++) {
        wordMap.set(words[i], i);
        lengthSet.add(words[i].length);
    }

    const sortedLengths = Array.from(lengthSet).sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const wordLength = word.length;

        if (wordLength === 1 && wordMap.has("")) {
            result.push([i, wordMap.get("")]);
            result.push([wordMap.get(""), i]);
            continue;
        }

        const reversedWord = reverseWord(word);

        if (wordMap.has(reversedWord) && wordMap.get(reversedWord) !== i) {
            result.push([i, wordMap.get(reversedWord)]);
        }

        for (const length of sortedLengths) {
            if (length === wordLength) break;

            // Проверка на палиндром в середине
            if (isPalindrome(reversedWord, length, wordLength - 1)) {
                const prefix = reversedWord.substring(0, length);
                if (wordMap.has(prefix)) {
                    result.push([wordMap.get(prefix), i]);
                }
            }

            // Проверка на палиндром в начале
            if (isPalindrome(reversedWord, 0, wordLength - 1 - length)) {
                const suffix = reversedWord.substring(wordLength - length);
                if (wordMap.has(suffix)) {
                    result.push([i, wordMap.get(suffix)]);
                }
            }
        }
    }

    return result;
};

function isPalindrome(str, left, right) {
    while (left < right) {
        if (str[left++] !== str[right--]) return false;
    }
    return true;
}

function reverseWord(word) {
    return word.split('').reverse().join('');
}