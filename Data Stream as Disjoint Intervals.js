// 352. Data Stream as Disjoint Intervals
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Given a data stream input of non-negative integers a1, a2, ..., an, summarize the numbers seen so far as a list of disjoint intervals.

// Implement the SummaryRanges class:

// SummaryRanges() Initializes the object with an empty stream.
// void addNum(int value) Adds the integer value to the stream.
// int[][] getIntervals() Returns a summary of the integers in the stream currently as a list of disjoint intervals [starti, endi]. The answer should be sorted by starti.
 

// Example 1:

// Input
// ["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"]
// [[], [1], [], [3], [], [7], [], [2], [], [6], []]
// Output
// [null, null, [[1, 1]], null, [[1, 1], [3, 3]], null, [[1, 1], [3, 3], [7, 7]], null, [[1, 3], [7, 7]], null, [[1, 3], [6, 7]]]

// Explanation
// SummaryRanges summaryRanges = new SummaryRanges();
// summaryRanges.addNum(1);      // arr = [1]
// summaryRanges.getIntervals(); // return [[1, 1]]
// summaryRanges.addNum(3);      // arr = [1, 3]
// summaryRanges.getIntervals(); // return [[1, 1], [3, 3]]
// summaryRanges.addNum(7);      // arr = [1, 3, 7]
// summaryRanges.getIntervals(); // return [[1, 1], [3, 3], [7, 7]]
// summaryRanges.addNum(2);      // arr = [1, 2, 3, 7]
// summaryRanges.getIntervals(); // return [[1, 3], [7, 7]]
// summaryRanges.addNum(6);      // arr = [1, 2, 3, 6, 7]
// summaryRanges.getIntervals(); // return [[1, 3], [6, 7]]
 

// Constraints:

// 0 <= value <= 104
// At most 3 * 104 calls will be made to addNum and getIntervals.
// At most 102 calls will be made to getIntervals.
 

// Follow up: What if there are lots of merges and the number of disjoint intervals is small compared to the size of the data stream?

var SummaryRanges = function () {
    this.intervals = [
        [-Infinity, -Infinity],
        [Infinity, Infinity]
    ];
};

/**
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (value) {
    if (this.intervals.length === 0) {
        this.intervals.push([value, value]);
        return;
    }

    let l = 0;
    let r = this.intervals.length - 1;
    let m;
    while (l < r) {
        m = l + Math.floor((r - l) / 2);
        if (value <= this.intervals[m][1] || value <= this.intervals[m][0]) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    // Пропускаем если значение есть в  интервалах
    if (this.intervals[l][0] <= value && this.intervals[l][1] >= value) {
        return;
    }

    // Пробуем присоединить к интервалу который есть слева
    let fromLeftConnected = false;
    if (l > 1 && this.intervals[l - 1][1] === value - 1) {
        this.intervals[l - 1][1] = value;
        fromLeftConnected = true;
    } else if (l === 1 && this.intervals[l][1] === value - 1) {
        this.intervals[l][1] = value;
        return;
    }

    // Пробуем присоединить к интервалу который есть справа
    let fromRightConnected = false;
    if (this.intervals[l][0] === value + 1) {
        if (l > 0 && fromLeftConnected) {
            this.intervals[l - 1][1] = this.intervals[l][1];
        } else {
            this.intervals[l][0] = value;
        }
        fromRightConnected = true;
    }

    // Если значение объединило два интервала, то второй можно удалить
    if (fromLeftConnected && fromRightConnected) {
        this.intervals.splice(l, 1);
        return;
    }

    // Если значение не попало ни в один интервал, то вставляем его на месте
    if (!fromLeftConnected && !fromRightConnected) {
        this.intervals.splice(l, 0, [value, value]);
    }
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
    return this.intervals.slice(1, -1);
};