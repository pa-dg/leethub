# Write your MySQL query statement below
# SELECT D.name AS Department, E.name AS Employee, E.salary AS Salary
# FROM Employee E
# JOIN Department D ON E.departmentId = D.id
# GROUP BY D.name
# HAVING 
#     MAX(Salary)


SELECT D.name AS Department, E.name AS Employee, E.salary AS Salary
FROM 
    Employee E,
    (SELECT departmentId, MAX(salary) AS maxSal FROM Employee GROUP BY departmentId) T,
    Department D
WHERE E.departmentId = T.departmentId
    AND E.salary = T.maxSal
    AND E.departmentId = D.id

# departmentID is the foreign key of the ID from the Department table
# guaranteed department name is NOT NULL
# return employees who have the highest salary in each of the departments
