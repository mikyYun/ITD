-- Concatenation

SELECT DISTINCT last_name, CONCAT(first_name, '  ', last_name) AS full_name,
	CONCAT(last_name, actor_id) AS uniqueID,
	last_name || ' -- ' || first_name AS "naming",
	COUNT(*)
	FROM actor
	GROUP BY last_name, first_name, actor_id
	ORDER BY last_name;
	
	