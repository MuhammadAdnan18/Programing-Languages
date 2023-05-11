#joins are used when we want to fetch rows from two or more tables
#there are 4 main types of joins iner join left join ,right join and outer join

#--------------INER JOIN------------------
#inner joinn is the one which gives the common attributes between the table
#i-e lets suppose there are two teams a footbal and cricket 

#table 1
CREATE TABLE cricket(
cricket_id INT AUTO_INCREMENT,
c_name VARCHAR(30)
PRIMARY KEY(cricket_id)
)
#table 1

CREATE TABLE football(
football_id INT AUTO_INCREMENT,
f_name VARCHAR(30)
PRIMARY KEY(football_id)
)


SELECT f_name FROM football

INSERT INTO football(f_name)
VALUES('Amar'),('Shahid'),('Hamid'),('Khwan'),('Uzui'),('Jawad'),('Shaheer')


#apply join
#select all(*) 
SELECT * FROM cricket INNER JOIN football 
ON c_name=f_name

#for specific tables (names)
SELECT c_name ,f_name FROM cricket 
INNER JOIN football ON c_name=f_name

#result: here as we can see it only fetches the attributes values which are common in both tables

#northwind example if i want to check customers who have placed order
SELECT ContactName,OrderID,UnitPrice FROM customers 
INNER JOIN  order_details 
ON ContactName=OrderID


#--------------LEFT JOIN------------------

SELECT * 
FROM job_history LEFT JOIN jobs
ON job_history.job_ide=jobs.job_id

#--------------RIGHT JOIN------------------


SELECT * 
FROM job_history RIGHT JOIN jobs
ON job_history.job_ide=jobs.job_id

SELECT ContactName,Phone FROM customer