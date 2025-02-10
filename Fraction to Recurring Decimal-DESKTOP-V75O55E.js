// 166. Fraction to Recurring Decimal
// Solved
// Medium
// Topics
// Companies
// Hint
// Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

// If the fractional part is repeating, enclose the repeating part in parentheses.

// If multiple answers are possible, return any of them.

// It is guaranteed that the length of the answer string is less than 104 for all the given inputs.

 

// Example 1:

// Input: numerator = 1, denominator = 2
// Output: "0.5"
// Example 2:

// Input: numerator = 2, denominator = 1
// Output: "2"
// Example 3:

// Input: numerator = 4, denominator = 333
// Output: "0.(012)"
 

// Constraints:

// -231 <= numerator, denominator <= 231 - 1
// denominator != 0


var fractionToDecimal = function(numerator, denominator) {
    if(!numerator) return '0';
    
    let str = '';
    
    if(Math.sign(numerator) !== Math.sign(denominator)) str += '-';
    
    const numer = Math.abs(numerator)
    const denom = Math.abs(denominator)
    
    str += Math.floor(numer/denom);
    let rem = numer%denom;
    if(!rem) return str;
    str += '.'
    
    const map = new Map();
    
    while(rem !== 0) {
        map.set(rem, str.length);
        
        rem *= 10;
        str += Math.floor(rem/denom);
        rem %= denom
        
        if(map.has(rem)) {
            const idx = map.get(rem);
            return str.slice(0, idx) + `(${str.slice(idx)})`; 
        }
    }
    return str;
};
