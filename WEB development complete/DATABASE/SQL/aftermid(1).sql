#1)_________________views______________________________

SELECT * FROM employees

CREATE VIEW emp_view AS 
SELECT EmployeeID,LastName,FirstName,city
FROM employees
WHERE FirstName IS NOT NULL 

SELECT * FROM emp_view 

INSERT INTO emp_view
VALUES(10,'Ali','Ahmad','Istanbul')

#2)______________________subqueries_________________________

#if i need tp find the highest salary i can just use amx function with salary 
SELECT MAX(Salary) FROM employees

#but if you want complete information of all employee who have highes salary u need to use subqueries
SELECT EmployeeID,FirstName,Salary,Title FROM employees
WHERE Salary=(SELECT MAX(Salary) FROM employees)

#3)_______________________Stored Procedures_____________________
 #stored  procedures are used when you need a function that can be reusable or used multiple times with different input values
DELIMITER//
CREATE PROCEDURE search_user(IN fname VARCHAR(30))
BEGIN 
SELECT * FROM employees 
WHERE FirstName=fname;
END//
DELIMITER
 
CALL search_user('Janet')
#or search by id
DELIMITER//
CREATE PROCEDURE empdata2(IN eid INT)
BEGIN
SELECT firstname,salary
FROM employees
WHERE employeeid=eid;
END//
DELIMITER

CALL empdata2(5)


#how to calculate employee experience from hire date in sql
SELECT * FROM employees

SELECT DATE_FORMAT(FROM_DAYS(DATEDIFF(NOW(), HireDate)), '%Y') + 0 AS experience;
FROM employees;


#4_________________________Triggers_______________________
#trigger is asql code that is autometically executed in response to a certain event to maintain the integrity and consistency of relations
#lets say that as a hiring manager you are to send a welcome mail to every new emplooye if new employess are more than 1000 lets say that it becomes a impossible task in such cases you can setup a trigger that when ever a new employee is hired a welcome email is autometically sent to him
#if we create a trigger that will automatically increase 1000 to the alloted salary of the new employee

CREATE TRIGGER new_salary
BEFORE INSERT 
ON employees
FOR EACH ROW
SET new.Salary=new.Salary + 1000;

INSERT INTO employees(EmployeeID,FirstName,City,Salary)
VALUES(11,'Anwar','Lahore',1100)