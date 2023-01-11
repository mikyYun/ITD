-- Mid-term Exam Part 1

-- 1. execute all the movies that include the word “Feminist” in film table
SELECT * FROM film
	WHERE description LIKE '%Feminist%';
	
-- 2. execute all the movies whose title starts with “P” or “S”, or “T”.
SELECT * FROM film
	WHERE title LIKE 'P%'
		OR title LIKE 'S%'
		OR title LIKE 'T%';
		
-- 3.  find all the null transactions (0.00) under the amount column inside the payment table
SELECT * FROM payment
	WHERE amount = 0;
	
-- 4. show which languages are totally used
SELECT language.name FROM language
	JOIN film
	ON film.language_id = language.language_id
	GROUP BY language.name;
	
-- 5. find category id of Horror, Travel, and Sci-fi
SELECT film.film_id, title, category.name FROM film
	JOIN film_category
	ON film.film_id = film_category.film_id
	JOIN category
	ON category.category_id = film_category.category_id
	WHERE category.name IN ('Horror', 'Travel', 'Sci-fi')
	ORDER BY category.name ASC;
	
-- 6. select cities their name start with 'L' || 'M' || 'K'. And order by city id and count repetition of the cities' names
SELECT city.city_id, city.city, COUNT(city.city) FROM city
	JOIN (
		SELECT city.city FROM city
		WHERE city LIKE 'L%'
			OR city LIKE 'M%'
			OR city LIKE 'K%'
	) AS city_with_L_M_K
	ON city.city = city_with_L_M_K.city
	GROUP BY city.city_id, city.city;

-- 7. find number of available postal codes under address table.
--  AND write a query to make prove there is no repetitive postal code

-- find number of available postal code
SELECT COUNT(postal_code) AS valid_postal_code FROM address
	WHERE postal_code <> '';

--  validate repetition
-- NOTE: number of count postal_code and count with distinct are different which means there are duplicated postal code. 
SELECT postal_code FROM (
	SELECT DISTINCT postal_code FROM address
	WHERE postal_code <> ''
) AS unique_postal_code;
	
-- 8. Organize the phone numbers under the address column based on the given postal code
SELECT postal_code, phone FROM address
	WHERE postal_code <> ''
	ORDER BY postal_code ASC;

-- 9. execute all the actors/actressess with the first name "Dan" || "Ed" || "Fay"
--  AND actors/acteressess with the last name "Cage" || "Chase"

SELECT * FROM actor
	WHERE first_name IN ('Dan', 'Ed', 'Fay')
		OR last_name IN ('Cage', 'Chase');
		
-- 10. find all the first names and last names that include 'rr' || 'ff' || 'nn' || 'pp'
--  And also all the actors and actresses with last names starting with 'T' and ending with 'e'
SELECT * FROM actor
	WHERE (
		first_name LIKE '%rr%'
		OR first_name LIKE '%ff%'
		OR first_name LIKE '%nn%'
		OR first_name LIKE '%pp%'
	) OR (
		last_name LIKE 'T%'
		AND last_name LIKE '%e'
	);
	