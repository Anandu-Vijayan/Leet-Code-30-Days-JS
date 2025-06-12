// 372. Super Pow
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Your task is to calculate ab mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array.

 

// Example 1:

// Input: a = 2, b = [3]
// Output: 8
// Example 2:

// Input: a = 2, b = [1,0]
// Output: 1024
// Example 3:

// Input: a = 1, b = [4,3,3,8,5,2]
// Output: 1
 

// Constraints:

// 1 <= a <= 231 - 1
// 1 <= b.length <= 2000
// 0 <= b[i] <= 9
// b does not contain leading zeros.


var superPow = function(a, b) {
	const MOD = 1337;
	const pow = (num, n) => {
		let result = 1;
		for (let index = 0; index < n; index++) {
			result = result * num % MOD;
		}
		return result;
	};

	return b.reduceRight((result, n) => {
		a %= MOD;
		const powNum = result * pow(a, n) % MOD;

		a = pow(a, 10);
		return powNum;
	}, 1);
};