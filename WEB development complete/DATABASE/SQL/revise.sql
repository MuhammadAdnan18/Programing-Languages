SELECT AVG(Salary) FROM employees

SELECT * FROM employees
WHERE Salary =(SELECT COUNT(Salary) FROM employees)


SELECT SUM(Salary) FROM employees
WHERE title='Sales Representative'
GROUP BY Salary
ORDER BY ASC



#order by lower to high salary
SELECT * FROM employees
WHERE title='Sales Representative'
ORDER BY salary ASC
LIMIT 4


#order by higher to lower salary
SELECT * FROM employees
WHERE title='Sales Representative'
ORDER BY salary DESC

#to find employees whose name start with a
SELECT * FROM employees WHERE FirstName LIKE 'a%'
#to find employees whose name end with a
SELECT * FROM employees WHERE FirstName LIKE '%a'
#to find employees having a in their name
SELECT * FROM employees WHERE FirstName LIKE '%a%'
#to filter employees who have u at given position i-e;3
SELECT * FROM employees WHERE FirstName LIKE '__u%'


#users

CREATE USER 'Ali'@'localhost' IDENTIFIED BY 'password'

GRANT ALL ON northwind.employees TO 'Ali'@'localhost';

REVOKE ALL ON northwind.employees TO 'Ali'@'localhost';

DROP USER 'Ali'@'localhost'

#joins 

SELECT p.ProductName, s.ContactName
FROM products p
INNER JOIN suppliers s
ON p.ProductID=s.SupplierID

SELECT p.ProductName, s.ContactName
FROM products p
LEFT JOIN suppliers s
ON p.ProductID=s.SupplierID

SELECT p.ProductName, s.ContactName
FROM products p
FULL JOIN suppliers s
ON p.ProductID=s.SupplierID


SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;