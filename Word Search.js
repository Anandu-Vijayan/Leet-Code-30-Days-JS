// 79. Word Search
// Solved
// Medium
// Topics
// Companies
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

// Example 1:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false
 

// Constraints:

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.
 

// Follow up: Could you use search pruning to make your solution faster with a larger board?


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const dict = {};
    const rows = board.length;
    const cols = board[0].length;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            dict[board[row][col]] = (dict[board[row][col]] || 0) + 1;
        }
    }

    function isLetterValid(word) {
        const counter = {...dict}
        for (const letter of word) {
            if (counter[letter] === undefined || counter[letter] < 0) return false;
            counter[letter]--;
        }

        return true;
    }


    function isWordInBoard(word) {

        const CHECK = 'checking'
        function isWordValid(row, col, index) {
            if (index >= word.length) return true;

            if (
                row >= rows || 
                row < 0 || 
                col >= cols || 
                col < 0 || 
                board[row][col] === CHECK || 
                board[row][col] !== word.charAt(index)) {
                    return false
            }

            const current = board[row][col]
            board[row][col] = CHECK;
            
            const result = isWordValid(row, col + 1, index + 1) ||
                            isWordValid(row, col - 1, index + 1) ||
                            isWordValid(row + 1, col, index + 1) ||
                            isWordValid(row - 1, col, index + 1);
            
            board[row][col] = current;
            if (result) return true;
        }

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if(isWordValid(row, col, 0)) return true;
            }
        }

        return false
    }

    function isSegmentValid(word) {
        if (word.length < 5) return true;

        const first = Math.floor(word.length / 3);
        const second = Math.floor(word.length / 3 * 2);

        return isWordInBoard(word.substring(0, first)) && 
                isWordInBoard(word.substring(first, second)) && 
                isWordInBoard(word.substring(second))
    }

    if (!isLetterValid(word)) return false;
    if (!isSegmentValid(word)) return false;

    return isWordInBoard(word)
};