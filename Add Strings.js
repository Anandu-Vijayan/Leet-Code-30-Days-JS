// 415. Add Strings
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"
 

// Constraints:

// 1 <= num1.length, num2.length <= 104
// num1 and num2 consist of only digits.
// num1 and num2 don't have any leading zeros except for the zero itself.


var addStrings = function(num1, num2) {
    let ans = "";
    let i=num1.length-1, j=num2.length-1, carry=0;

    while(i>=0 || j>=0 || carry){
        const n1 = i >= 0 ? +num1[i] : 0;
        const n2 = j >= 0 ? +num2[j] : 0;

        const sum = n1 + n2 + carry;
        ans += sum%10;
        carry = Math.floor(sum/10);
        i--;
        j--;
    }

    return ans.split('').reverse().join('');
};