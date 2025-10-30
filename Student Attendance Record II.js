// 552. Student Attendance Record II

// Topics

// Companies

// Hard

// An attendance record for a student can be represented as a string where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

// 'A': Absent.

// 'L': Late.

// 'p': Present.

// Any student is eligible for an attendance award if they meet both of the following criteria:

// The student was absent ('A') for strictly fewer than 2 days total.

// The student was never late ('L') for 3 or more consecutive days.

// Given an integer n, return the number of possible attendance records of length n that make a student eligible for an attendance award. The answer may be very large, so return it modulo 10º + 7.





/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
    const MOD = 1000000007;

    // Initialize the memoization array
    let temp = new Array(n).fill(0).map(() => 
        new Array(2).fill(0).map(() => 
            new Array(3).fill(-1)
        )
    );

    const check_all_records = (cur_ind, count_a, count_l) => {
        if (cur_ind === n) {
            return 1;
        }
        if (temp[cur_ind][count_a][count_l] !== -1) {
            return temp[cur_ind][count_a][count_l];
        }
        let with_a_next = (count_a === 0) ? check_all_records(cur_ind + 1, count_a + 1, 0) : 0;
        let with_l_next = (count_l === 2) ? 0 : check_all_records(cur_ind + 1, count_a, count_l + 1);
        let with_p_next = check_all_records(cur_ind + 1, count_a, 0);
        let total = ((with_a_next + with_l_next) % MOD + with_p_next) % MOD;

        temp[cur_ind][count_a][count_l] = total;
        return total;
    };

    return check_all_records(0, 0, 0);
};
