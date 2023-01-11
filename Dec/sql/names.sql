-- ASCENDING --

SELECT concat(firstName,' ', lastName) AS fullName, SUM(amount) AS total FROM employees
	JOIN customers
    	ON customers.salesRepEmployeeNumber = employees.employeeNumber
    JOIN payments
    	ON payments.customerNumber = customers.customerNumber
    WHERE paymentDate > '2003-04-01'
    GROUP BY employees.employeeNumber
	ORDER BY total ASC;

-- customer name and representative's name
SELECT CONCAT(contactFirstName, ' ', contactLastName) AS fullName, CONCAT(firstName, ' ', lastName) AS salesRepName 
	FROM customers
    JOIN employees
    ON employees.employeeNumber = customers.salesRepEmployeeNumber;

-- customer name and product name
SELECT CONCAT(contactFirstName, ' ', contactLastName) AS customerName, productName
	FROM customers
    JOIN orders
    	ON orders.customerNumber = customers.customerNumber
    JOIN orderdetails
    	ON orderdetails.orderNumber = orders.orderNumber
    JOIN products
    	ON products.productCode = orderdetails.productCode;

-- CREATE AS VIEW
CREATE VIEW customerProduct AS
SELECT CONCAT(contactFirstName, ' ', contactLastName) AS customerName, productName
	FROM customers
    JOIN orders
    	ON orders.customerNumber = customers.customerNumber
    JOIN orderdetails
    	ON orderdetails.orderNumber = orders.orderNumber
    JOIN products
    	ON products.productCode = orderdetails.productCode;

-- USE VIEW
SELECT * FROM customerproduct
	JOIN products
    	ON products.productName = customerproduct.productName
	JOIN productlines
    	ON productlines.productLine = products.productLine;

-- PROCESURE
CREATE PROCEDURE getCustomerWithProducts()
SELECT CONCAT(contactFirstName, ' ', contactLastName) AS customerName, productName
	FROM customers
    JOIN orders
    	ON orders.customerNumber = customers.customerNumber
    JOIN orderdetails
    	ON orderdetails.orderNumber = orders.orderNumber
    JOIN products
    	ON products.productCode = orderdetails.productCode;

-- UNION
/* 1, 2, 3
   2, 3, 5 */
SELECT 1, 2, 3
  UNION
SELECT 2, 3, 5

/* THIS ERROR */
SELECT 1, 2, 3
UNION
SELECT 2, 3

-- UNION ALL
/*
  1, 2, 3
  2, 3, 52
  1, 2, 4
  2, 3, 53
*/
SELECT 1, 2, 3
  UNION
SELECT 2, 3, 52
	UNION ALL
    SELECT 1, 2, 4
  UNION
SELECT 2, 3, 53
	
/*
  1, 2, 3
  2, 3, 5
  2, 3, 53
*/
SELECT 1, 2, 3
  UNION
SELECT 2, 3, 5
	UNION ALL
    SELECT 1, 2, 3
  UNION
SELECT 2, 3, 53
	

-- BETWEEN
SELECT COUNT(*) FROM orders
  WHERE orderDate BETWEEN '2003-02-11' AND '2004-03-15';