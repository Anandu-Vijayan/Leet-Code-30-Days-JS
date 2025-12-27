// 630. Course Schedule III
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// Hint
// There are n different online courses numbered from 1 to n. You are given an array courses where courses[i] = [durationi, lastDayi] indicate that the ith course should be taken continuously for durationi days and must be finished before or on lastDayi.

// You will start on the 1st day and you cannot take two or more courses simultaneously.

// Return the maximum number of courses that you can take.

 

// Example 1:

// Input: courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]
// Output: 3
// Explanation: 
// There are totally 4 courses, but you can take 3 courses at most:
// First, take the 1st course, it costs 100 days so you will finish it on the 100th day, and ready to take the next course on the 101st day.
// Second, take the 3rd course, it costs 1000 days so you will finish it on the 1100th day, and ready to take the next course on the 1101st day. 
// Third, take the 2nd course, it costs 200 days so you will finish it on the 1300th day. 
// The 4th course cannot be taken now, since you will finish it on the 3300th day, which exceeds the closed date.
// Example 2:

// Input: courses = [[1,2]]
// Output: 1
// Example 3:

// Input: courses = [[3,2],[4,3]]
// Output: 0
 

// Constraints:

// 1 <= courses.length <= 104
// 1 <= durationi, lastDayi <= 104


var scheduleCourse = function(courses) {
    // As we iterate, lastDay will get larger
    courses.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        else return a[1] - b[1];
    });
    
    let heap = new MaxPriorityQueue({compare: (a, b) => b[0] - a[0]});

    let totalDur = 0, totalCourses = 0;
    for (let i = 0; i < courses.length; i++) {
        let [curDur, curLast] = courses[i];
        if (totalDur + curDur > curLast) {
            if (heap.size()) {
                let [largestDur] = heap.front();
                if (curDur > largestDur) continue;
                // If the current duration is less than the largest duration, 
                // delete the largest duration, add the current duration, essentially swapping them
                if (totalDur - largestDur + curDur <= curLast) {
                    totalDur = totalDur - largestDur + curDur;
                    heap.dequeue();
                    heap.enqueue(courses[i]);
                }
            }
        }
        else {
            totalDur += curDur;
            totalCourses++;
            heap.enqueue(courses[i]);
        }
    }
    
    return totalCourses;
};