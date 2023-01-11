-- SELECT last_name, actor_id, COUNT(1)
-- 	FROM actor
-- 	WHERE last_name IN (
-- 		'AKroyd',
-- 		'Allen',
-- 		'Ball',
-- 		'Cruise',
-- 		'Jackman'
-- 	)
-- 	GROUP BY first_name,
-- 	last_name,
-- 	actor_id
-- 	ORDER BY 2 ASC,
-- 		1 ASC;

SELECT first_name,
	last_name,
	COUNT(1)
FROM actor
WHERE last_name >= 'Allen'
	  AND first_name <> 'Kim'
GROUP BY first_name, last_name
HAVING COUNT(1) = 1 
	   OR COUNT(1) = 2
ORDER BY 1 ASC,
	  	 2 ASC;
		
SELECT first_name, CONCAT(last_name,'_', first_name, '@', actor_id)
FROM actor
	WHERE first_name > 'A'
	ORDER BY 1;