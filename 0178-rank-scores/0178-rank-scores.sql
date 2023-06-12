# Write your MySQL query statement below
SELECT S.Score, COUNT(S2.Score) as `Rank`
FROM Scores S,
(SELECT DISTINCT Score FROM Scores) S2
WHERE S.Score<=S2.Score
GROUP BY S.Id
ORDER BY S.Score DESC;

# Other solution:
# SELECT S1.Score, (
#     SELECT COUNT(DISTINCT Score) FROM Scores WHERE Score >= S1.Score) AS Rank
# FROM Scores S1
# ORDER BY S1.Score DESC