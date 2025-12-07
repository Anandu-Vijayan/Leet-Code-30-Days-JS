// 601. Human Traffic of Stadium
// Solved
// Hard
// Topics
// premium lock icon
// Companies
// SQL Schema
// Pandas Schema
// Table: Stadium

// +---------------+---------+
// | Column Name   | Type    |
// +---------------+---------+
// | id            | int     |
// | visit_date    | date    |
// | people        | int     |
// +---------------+---------+
// visit_date is the column with unique values for this table.
// Each row of this table contains the visit date and visit id to the stadium with the number of people during the visit.
// As the id increases, the date increases as well.
 

// Write a solution to display the records with three or more rows with consecutive id's, and the number of people is greater than or equal to 100 for each.

// Return the result table ordered by visit_date in ascending order.

// The result format is in the following example.

 

// Example 1:

// Input: 
// Stadium table:
// +------+------------+-----------+
// | id   | visit_date | people    |
// +------+------------+-----------+
// | 1    | 2017-01-01 | 10        |
// | 2    | 2017-01-02 | 109       |
// | 3    | 2017-01-03 | 150       |
// | 4    | 2017-01-04 | 99        |
// | 5    | 2017-01-05 | 145       |
// | 6    | 2017-01-06 | 1455      |
// | 7    | 2017-01-07 | 199       |
// | 8    | 2017-01-09 | 188       |
// +------+------------+-----------+
// Output: 
// +------+------------+-----------+
// | id   | visit_date | people    |
// +------+------------+-----------+
// | 5    | 2017-01-05 | 145       |
// | 6    | 2017-01-06 | 1455      |
// | 7    | 2017-01-07 | 199       |
// | 8    | 2017-01-09 | 188       |
// +------+------------+-----------+
// Explanation: 
// The four rows with ids 5, 6, 7, and 8 have consecutive ids and each of them has >= 100 people attended. Note that row 8 was included even though the visit_date was not the next day after row 7.
// The rows with ids 2 and 3 are not included because we need at least three consecutive ids.


// # Write your MySQL query statement below

`WITH stadium_with_flag AS (
    SELECT 
        id,
        visit_date,
        people,
        CASE 
            WHEN people >= 100 THEN 1
            ELSE 0
        END AS flag
    FROM Stadium
),
stadium_with_conditions AS (
    SELECT
        id,
        visit_date,
        people,
        flag,
        LAG(flag, 1) OVER (ORDER BY id) AS flag_m1,
        LAG(flag, 2) OVER (ORDER BY id) AS flag_m2,
        LEAD(flag, 1) OVER (ORDER BY id) AS flag_p1,
        LEAD(flag, 2) OVER (ORDER BY id) AS flag_p2
    FROM stadium_with_flag
)

SELECT id, visit_date, people
FROM stadium_with_conditions
WHERE 
    (flag_m2 = 1 AND flag_m1 = 1 AND flag = 1)
    OR (flag_m1 = 1 AND flag = 1 AND flag_p1 = 1)
    OR (flag = 1 AND flag_p1 = 1 AND flag_p2 = 1)
ORDER BY id
    

-- -3
-- -2
-- -1
-- 0
-- 1
-- 2
-- 3

-- -3, -2, -1, 0
-- -2, -1, 0, 1
-- -1, 0, 1, 2
-- 0, 1, 2, 3`