# Write your MySQL query statement below
SELECT E2.name AS Employee
FROM Employee E1
INNER JOIN Employee E2 ON E2.managerId = E1.id
WHERE E2.salary > E1.salary