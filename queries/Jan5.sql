-- SELECT * FROM actor
-- 	WHERE (
-- 		first_name LIKE 'B%n' 
-- 		OR first_name LIKE 'B%b'
-- 	)
-- 	OR (
-- 		(
-- 			last_name LIKE 'W%'
-- 			OR last_name LIKE 'Z%'
-- 		 ) AND (
-- 		 	last_name LIKE '%m'
-- 			 OR last_name LIKE '%s'
-- 			 OR last_name LIKE '%t'
-- 		 )
-- 	);

-- SELECT * FROM actor
-- 	WHERE actor_id != 10
-- 		OR actor_id != 1;
		
-- SELECT * FROM actor
-- 	WHERE actor_id < 10;

-- SELECT first_name, last_name FROM actor
-- 	WHERE (
-- 		Wissam's
-- 		(first_name BETWEEN 'D' AND 'R' 
-- 		OR last_name BETWEEN 'D' AND 'R')
-- 		AND (
-- 			(
-- 			first_name LIKE '%dd%'
-- 				OR first_name LIKE '%pp%'
-- 				OR first_name LIKE '%rr%'
-- 				OR first_name LIKE '%ss%'
-- 				OR first_name LIKE '%ee%'
-- 			) OR (
-- 			last_name LIKE '%dd%'
-- 				OR last_name LIKE '%pp%'
-- 				OR last_name LIKE '%rr%'
-- 				OR last_name LIKE '%ss%'
-- 				OR last_name LIKE '%ee%'
-- 			)
-- 		)
		
-- 			(first_name BETWEEN 'D' AND 'R')
-- 			AND (
-- 				first_name LIKE '%dd%'
-- 				OR first_name LIKE '%pp%'
-- 				OR first_name LIKE '%rr%'
-- 				OR first_name LIKE '%ss%'
-- 				OR first_name LIKE '%ee%'
-- 			)
-- 		) OR (
-- 			(last_name BETWEEN 'D' AND 'R')
-- 			AND (
-- 				last_name LIKE '%dd%'
-- 				OR last_name LIKE '%pp%'
-- 				OR last_name LIKE '%rr%'
-- 				OR last_name LIKE '%ss%'
-- 				OR last_name LIKE '%ee%'
-- 			)
-- 		);

SELECT actor_id, first_name, last_name FROM actor
	WHERE (
		first_name LIKE 'Ba%'
		OR first_name LIKE 'Be%'
	) OR (
		last_name BETWEEN 'B' AND 'K'
-- 		Misunderstood range.....
-- 		OR last_name LIKE 'K%'
	) OR (
		actor_id % 10 = 0
		AND (
			(
				first_name LIKE '%ss%'
				OR first_name LIKE '%rr%'
				OR first_name LIKE '%ee%'
				OR first_name LIKE '%ll%'
			) OR (
				last_name LIKE '%ss%'
				OR last_name LIKE '%rr%'
				OR last_name LIKE '%ee%'
				OR last_name LIKE '%ll%'
			)
		)
	)

-- SELECT * FROM actor
-- 	WHERE first_name LIKE 'rr';
	