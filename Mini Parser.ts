// 385. Mini Parser
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a string s represents the serialization of a nested list, implement a parser to deserialize it and return the deserialized NestedInteger.

// Each element is either an integer or a list whose elements may also be integers or other lists.

 

// Example 1:

// Input: s = "324"
// Output: 324
// Explanation: You should return a NestedInteger object which contains a single integer 324.
// Example 2:

// Input: s = "[123,[456,[789]]]"
// Output: [123,[456,[789]]]
// Explanation: Return a NestedInteger object containing a nested list with 2 elements:
// 1. An integer containing value 123.
// 2. A nested list containing two elements:
//     i.  An integer containing value 456.
//     ii. A nested list with one element:
//          a. An integer containing value 789
 

// Constraints:

// 1 <= s.length <= 5 * 104
// s consists of digits, square brackets "[]", negative sign '-', and commas ','.
// s is the serialization of valid NestedInteger.
// All the values in the input are in the range [-106, 106].


// Minimal NestedInteger class definition for TypeScript
class NestedInteger {
    private value: number | null = null;
    private list: NestedInteger[] = [];

    constructor(value?: number) {
        if (value !== undefined) {
            this.value = value;
        }
    }

    isInteger(): boolean {
        return this.value !== null;
    }

    getInteger(): number | null {
        return this.value;
    }

    setInteger(value: number): void {
        this.value = value;
        this.list = [];
    }

    add(elem: NestedInteger): void {
        if (this.value !== null) {
            this.list = [];
            this.value = null;
        }
        this.list.push(elem);
    }

    getList(): NestedInteger[] {
        return this.list;
    }
}

function build( list: number[] ): NestedInteger {
    const cur_list: NestedInteger = new NestedInteger();

    for ( const elem of list ) {
        if ( Array.isArray(elem) )
            cur_list.add( build(elem) );
        else
            cur_list.add( new NestedInteger(elem) );     
    }
    return cur_list;
}

function deserialize(s: string): NestedInteger {
    const outputStructure: number[] | number = JSON.parse(s);
    
    if ( Array.isArray( outputStructure ) )
        return build( outputStructure );

    return new NestedInteger( outputStructure );
};