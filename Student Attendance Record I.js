// 551. Student Attendance Record I

// Topics

// Companies

// Easy

// You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

// 'A': Absent.

// 'L': Late.

// 'P': Present.

// The student is eligible for an attendance award if they meet both of the following criteria:

// The student was absent ('A') for strictly fewer than 2 days total.

// The student was never late ('L') for 3 or more consecutive days.

// Return true if the student is eligible for an attendance award, or false otherwise.

// Example 1:

// Input: s = "PPALLP"



var checkRecord = function(s) {
    let aCount = 0, lStreak = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === 'A') {
            aCount++;
            if (aCount >= 2) return false;
        }

        if (c === 'L') {
            lStreak++;
            if (lStreak >= 3) return false;
        } else {
            lStreak = 0;
        }
    }
    return true;
};
