DO $$

-- Declaration & Initialization of variables
DECLARE
	a integer := 10;
	b integer := 20;
	
	BEGIN
-- 		IF a > b THEN
-- 			RAISE NOTICE 'a is greater than b';
-- 		END IF;
-- 		IF a < b THEN
-- 			RAISE NOTICE 'a is less than b';
-- 		END IF;
-- 		IF a = b THEN
-- 			RAISE NOTICE 'a is equal to b';
-- 		END IF;
	
	
		IF a > b
			THEN RAISE NOTICE 'a is greater than b';
		ELSE IF a < b
			RAISE NOTICE 'b is greater than a';
		ELSE IF a = b
			RAISE NOTICE 'a is equal to b';
		END IF;
			
	

END $$;