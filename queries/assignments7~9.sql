-- DISTINCT : remove duplicate => XOR
-- SELECT DISTINCT last_name, first_name
-- 	FROM actor
-- 	ORDER BY 1;

-- SELECT last_name, count(*) FROM actor
-- 	WHERE last_name > 'A'
-- 	GROUP BY last_name, 1
-- 	ORDER BY 2 DESC;


-- In the given database, you need to execute 6 columns, the first one is the actor id, the second one is the first name, the third one is the last name and the fourth one is giving you the number of repetitions.

-- - Can I have the number of first name repetitions, separately?
-- - Can I have the number of last name repetitions, separately?
-- - Can I have the number of first names and last name repetitions, separately?

-- SELECT actor_id, first_name, last_name,
-- 	COUNT(first_name)
-- 	FROM actor
-- 	GROUP BY actor_id, first_name, last_name;
	
-- SELECT actor_id, first_name, last_name,
-- 	COUNT(*)
-- 	FROM actor
-- 	GROUP BY actor_id, first_name, last_name;
	
-- SELECT first_name, last_name, COUNT(*) FROM actor
-- 	GROUP BY first_name, last_name
-- 	HAVING COUNT(*) >1;

-- SELECT first_name, last_name, COUNT(last_name) FROM actor
	
-- 	GROUP BY first_name, last_name
-- 	HAVING COUNT(*) > 3 
-- 	ORDER BY first_name ASC;

SELECT actor.last_name, COUNT(actor.last_name) AS repeated_last_name
	FROM actor
	JOIN (
		SELECT first_name, last_name
		FROM actor
	) AS repeated_first_name
	ON repeated_first_name.first_name = actor.first_name
	GROUP BY actor.last_name
	HAVING COUNT(actor.last_name) >= 3 AND COUNT(actor.last_name) < 5;