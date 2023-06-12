# Write your MySQL query statement below
SELECT S1.Score, COUNT(S2.Score) as `Rank`
FROM Scores S1,
    (SELECT DISTINCT Score FROM Scores) S2
WHERE S1.Score <= S2.Score
GROUP BY S1.Id
ORDER BY S1.Score DESC;

# Other solution:
# SELECT S1.Score, (
#     SELECT COUNT(DISTINCT Score) FROM Scores WHERE Score >= S1.Score) AS Rank
# FROM Scores S1
# ORDER BY S1.Score DESC