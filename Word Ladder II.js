// 126. Word Ladder II
// Solved
// Hard
// Topics
// Companies
// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words [beginWord, s1, s2, ..., sk].

 

// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
// Explanation: There are 2 shortest transformation sequences:
// "hit" -> "hot" -> "dot" -> "dog" -> "cog"
// "hit" -> "hot" -> "lot" -> "log" -> "cog"
// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: []
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
 

// Constraints:

// 1 <= beginWord.length <= 5
// endWord.length == beginWord.length
// 1 <= wordList.length <= 500
// wordList[i].length == beginWord.length
// beginWord, endWord, and wordList[i] consist of lowercase English letters.
// beginWord != endWord
// All the words in wordList are unique.
// The sum of all shortest transformation sequences does not exceed 105.


/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */

var findLadders = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return []
    if (beginWord === endWord) return [[beginWord]]
    wordList.push(beginWord)
    const wordToNeighbors = new Map()
    const wordToShortest = new Map()
    const shortestLen = findShortestLen(beginWord, endWord)
    const ladders = []
    const curLadder = [beginWord]
    recursion(beginWord, shortestLen)
    return ladders

    
    function recursion(curWord, curShortest) {
        if (curShortest === 0) {
            ladders.push([...curLadder])
            return
        }
        const neighbors = findAllNeighbors(curWord)
        for (let neighbor of neighbors) {
            if (!wordToShortest.has(neighbor) || wordToShortest.get(neighbor) != curShortest - 1) continue
            curLadder.push(neighbor)
            recursion(neighbor, curShortest - 1)
            curLadder.pop()
        }
    }
    
    
    function findShortestLen(beginWord, endWord) {
        const queue = []
        queue.push(endWord)
        let count = 0
        wordToShortest.set(endWord, count)
        while (queue.length !== 0) {
            count++;
            const size = queue.length
            for (let i = 0; i < size; i++) {
                const curLast = queue.shift()
                const neighbors = findAllNeighbors(curLast)
                for (let neighbor of neighbors) {
                    if (wordToShortest.has(neighbor)) continue
                    wordToShortest.set(neighbor, count)
                    if (neighbor === beginWord)  {
                        return count
                    }
                    queue.push(neighbor)
                }
            }
        }
        return -1
    }
    
    function findAllNeighbors(word) {
        if (wordToNeighbors.has(word)) return wordToNeighbors.get(word)
        neighbors = []
        for (let w of wordList) {
            if (isNeighbor(word, w)) {
                neighbors.push(w)
            }
        }
        wordToNeighbors.set(word, neighbors)
        return neighbors
    }
    
    function isNeighbor(w1, w2) {
        if (w1.length !== w2.length) return false
        let diff = 0
        for (let i = 0; i < w1.length; i++) {
            if (w1.charAt(i) !== w2.charAt(i)) {
                diff++
                if (diff > 1) return false
            }
        }
        return diff === 1
    }
};