# Write your MySQL query statement below
SELECT D.name AS Department, E.name AS Employee, E.salary AS Salary
FROM Employee E
JOIN Department D ON E.departmentId = D.id
WHERE (E.departmentId, E.salary) IN
        (SELECT departmentId, MAX(Salary)
         FROM Employee
         GROUP BY departmentId)
;


# departmentID is the foreign key of the ID from the Department table
# guaranteed department name is NOT NULL
# return employees who have the highest salary in each of the departments
