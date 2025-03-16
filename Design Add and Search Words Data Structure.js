// 211. Design Add and Search Words Data Structure
// Solved
// Medium
// Topics
// Companies
// Hint
// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 

// Example:

// Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
// [null,null,null,null,false,true,true,true]

// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True
 

// Constraints:

// 1 <= word.length <= 25
// word in addWord consists of lowercase English letters.
// word in search consist of '.' or lowercase English letters.
// There will be at most 2 dots in word for search queries.
// At most 104 calls will be made to addWord and search.


// Class representing a single TrieNode
class TrieNode {
    constructor() {
      // Stores the children nodes of the current node as key-value pairs
      this.characters = {};
      // Indicates if the current node represents the end of a valid word
      this.wordEnd = false;
    }
  }
  
  // WordDictionary class that uses a Trie data structure
  var WordDictionary = function() {
    // Initialize the root of the trie
    this.trie = new TrieNode();
  };
  
  WordDictionary.prototype.addWord = function(word) {
    // Start at the root of the trie
    let dicLevel = this.trie;
  
    // Iterate through each character of the word
    for (const c of word) {
      // If the character is not already a child of the current node, create a new TrieNode for it
      if (!dicLevel.characters[c]) dicLevel.characters[c] = new TrieNode();
  
      // Move to the current character level
      dicLevel = dicLevel.characters[c];
    }
  
    // Mark the final node as the end of a word
    dicLevel.wordEnd = true;
  };
  
  WordDictionary.prototype.search = function(word) {
    // Helper function to perform a recursive search
    const isExist = (currWord, currTrieLevel) => {
      // Base case: If the word is fully processed, check if it's a valid word
      if (!currWord) return currTrieLevel.wordEnd;
  
      // If the current character is a wildcard ('.'), check all possible paths
      if (currWord[0] === ".") {
        // Iterate over all children of the current node
        for (const nextCharKey in currTrieLevel.characters) {
          // Recursively check if any path matches the rest of the word
          if (isExist(currWord.slice(1), currTrieLevel.characters[nextCharKey])) 
            return true;
        }
        // If no valid path is found, return false
        return false;
      }
  
      // If the current character is not in the trie, the word does not exist
      if (!currTrieLevel.characters[currWord[0]]) return false;
  
      // Recursively check the next character in the word
      return isExist(currWord.slice(1), currTrieLevel.characters[currWord[0]]);
    };
  
    // Start the recursive search from the root of the trie
    return isExist(word, this.trie);
  };