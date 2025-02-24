// 184. Department Highest Salary
// Solved
// Medium
// Topics
// Companies
// SQL Schema
// Pandas Schema
// Table: Employee

// +--------------+---------+
// | Column Name  | Type    |
// +--------------+---------+
// | id           | int     |
// | name         | varchar |
// | salary       | int     |
// | departmentId | int     |
// +--------------+---------+
// id is the primary key (column with unique values) for this table.
// departmentId is a foreign key (reference columns) of the ID from the Department table.
// Each row of this table indicates the ID, name, and salary of an employee. It also contains the ID of their department.
 

// Table: Department

// +-------------+---------+
// | Column Name | Type    |
// +-------------+---------+
// | id          | int     |
// | name        | varchar |
// +-------------+---------+
// id is the primary key (column with unique values) for this table. It is guaranteed that department name is not NULL.
// Each row of this table indicates the ID of a department and its name.
 

// Write a solution to find employees who have the highest salary in each of the departments.

// Return the result table in any order.

// The result format is in the following example.

 

// Example 1:

// Input: 
// Employee table:
// +----+-------+--------+--------------+
// | id | name  | salary | departmentId |
// +----+-------+--------+--------------+
// | 1  | Joe   | 70000  | 1            |
// | 2  | Jim   | 90000  | 1            |
// | 3  | Henry | 80000  | 2            |
// | 4  | Sam   | 60000  | 2            |
// | 5  | Max   | 90000  | 1            |
// +----+-------+--------+--------------+
// Department table:
// +----+-------+
// | id | name  |
// +----+-------+
// | 1  | IT    |
// | 2  | Sales |
// +----+-------+
// Output: 
// +------------+----------+--------+
// | Department | Employee | Salary |
// +------------+----------+--------+
// | IT         | Jim      | 90000  |
// | Sales      | Henry    | 80000  |
// | IT         | Max      | 90000  |
// +------------+----------+--------+
// Explanation: Max and Jim both have the highest salary in the IT department and Henry has the highest salary in the Sales department.


`SELECT as_d.name AS Department, as_t_first_query.name AS Employee, as_t_first_query.salary AS Salary 
FROM 
(SELECT as_e_main.departmentId, as_e_main.name, as_e_main.salary 
 FROM Employee as_e_main 
 JOIN 
 (SELECT as_e.departmentId, MAX(salary) AS as_max_salary 
  FROM Employee as_e 
  GROUP BY as_e.departmentId) as_t_salary 
 ON as_e_main.salary = as_t_salary.as_max_salary AND as_e_main.departmentId = as_t_salary.departmentId) as_t_first_query 
JOIN Department as_d 
ON as_t_first_query.departmentId = as_d.id`;