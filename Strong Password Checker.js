// 420. Strong Password Checker
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// A password is considered strong if the below conditions are all met:

// It has at least 6 characters and at most 20 characters.
// It contains at least one lowercase letter, at least one uppercase letter, and at least one digit.
// It does not contain three repeating characters in a row (i.e., "Baaabb0" is weak, but "Baaba0" is strong).
// Given a string password, return the minimum number of steps required to make password strong. if password is already strong, return 0.

// In one step, you can:

// Insert one character to password,
// Delete one character from password, or
// Replace one character of password with another character.
 

// Example 1:

// Input: password = "a"
// Output: 5
// Example 2:

// Input: password = "aA1"
// Output: 3
// Example 3:

// Input: password = "1337C0d3"
// Output: 0
 

// Constraints:

// 1 <= password.length <= 50
// password consists of letters, digits, dot '.' or exclamation mark '!'.



/**
 * @param {string} password
 * @return {number}
 */
function strongPasswordChecker(pw, minLength = 6, maxLength = 20, maxRepeat = 2) {
    const re = new RegExp(`(.)\\1{0,${maxRepeat}}(?=\\1{${maxRepeat}})`, 'g');
    const changes = (pw.match(re) || []).map(s => s.length).sort((a, b) => b - a);

    let toRemove = pw.length - maxLength;
    while (changes.at(-1) <= toRemove) {
        toRemove -= changes.pop();
    }

    const numChanges = Math.max(
        changes.length, !/[a-z]/.test(pw) + !/[A-Z]/.test(pw) + !/[0-9]/.test(pw));
    return Math.max(minLength - pw.length, numChanges + Math.max(0, pw.length - maxLength));
};