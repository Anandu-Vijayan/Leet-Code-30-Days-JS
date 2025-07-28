// 433. Minimum Genetic Mutation
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'.

// Suppose we need to investigate a mutation from a gene string startGene to a gene string endGene where one mutation is defined as one single character changed in the gene string.

// For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
// There is also a gene bank bank that records all the valid gene mutations. A gene must be in bank to make it a valid gene string.

// Given the two gene strings startGene and endGene and the gene bank bank, return the minimum number of mutations needed to mutate from startGene to endGene. If there is no such a mutation, return -1.

// Note that the starting point is assumed to be valid, so it might not be included in the bank.

 

// Example 1:

// Input: startGene = "AACCGGTT", endGene = "AACCGGTA", bank = ["AACCGGTA"]
// Output: 1
// Example 2:

// Input: startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
// Output: 2
 

// Constraints:

// 0 <= bank.length <= 10
// startGene.length == endGene.length == bank[i].length == 8
// startGene, endGene, and bank[i] consist of only the characters ['A', 'C', 'G', 'T'].


var minMutation = function(start, end, bank) {
    const bankSet = new Set(bank);
    if (!bankSet.has(end)) return -1;

    const chars = ['A', 'C', 'G', 'T'];
    const queue = [[start, 0]];

    while (queue.length) {
        const [current, steps] = queue.shift();
        if (current === end) return steps;

        for (let i = 0; i < current.length; i++) {
            for (let c of chars) {
                if (current[i] === c) continue;
                const next = current.slice(0, i) + c + current.slice(i + 1);
                if (bankSet.has(next)) {
                    queue.push([next, steps + 1]);
                    bankSet.delete(next);
                }
            }
        }
    }

    return -1;
};