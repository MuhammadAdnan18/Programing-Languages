-----------------(TABLE CREATION WITH P.key)---------------------------

CREATE TABLE jobs(
job_id INT NOT NULL UNIQUE,
job_title VARCHAR(50) NOT NULL DEFAULT ' ',
min_salary INT DEFAULT 8000,
max_salary INT DEFAULT NULL ,
PRIMARY KEY(job_id)
)
----------------ALTER TABLE--------------------------------

ALTER TABLE jobs
MODIFY COLUMN job_id  INT NOT NULL UNIQUE AUTO_INCREMENT;

INSERT INTO jobs
VALUES(1,'junior dev',8000,10000)

INSERT INTO jobs
VALUES(2,'frontend dev',9000,11000)

#update

CREATE TABLE users
(
f_name VARCHAR(50),
id INT,
email VARCHAR(150),
contact_No VARCHAR(20),
address VARCHAR(100),
gender ENUM("M","F","O")

)

INSERT INTO users
SET f_name="Ali",
id=453,
contact_No="034524352",
address="abd stree#5",
gender="M"

ALTER TABLE users
DROP COLUMN STATUS

UPDATE users SET email="Ali@gmail.com"
WHERE id=453




---------------FOREIGN KEY TABLE----------------------------

CREATE TABLE job_history(
employee_id INT NOT NULL UNIQUE ,
start_date DATE NOT NULL,
end_date DATE NOT NULL,
job_ide INT NOT NULL,
department_id INT,
PRIMARY KEY(employee_id),
FOREIGN KEY (job_ide) REFERENCES jobs(job_id)
)


---------------dates----------------------------
INSERT INTO job_history	
VALUES(21,21-07-2020,21-05-2022,2,031)

INSERT INTO job_history	
VALUES(35,2021-07-20,2025-07-20,3,031)

INSERT INTO job_history	
VALUES(13,2021-7-2,2025-7-2,4,022)


INSERT INTO job_history	
VALUES(42,'2021-7-2','2025-7-2',1,145)

INSERT INTO job_history	
VALUES(27,'2022-9-22','2027-9-22',4,245)

---------------ADD COLUMNS BY ALTER-------------------------

ALTER TABLE jobs
ADD COLUMN e_name VARCHAR(50);

UPDATE jobs
SET e_name="Ali" WHERE job_id=1

REPAIR TABLE practice.job;

INSERT INTO jobs
VALUES(5,'data engenier',20000,30000)

--------------------------------FUNCTIONS--------------------

SELECT AVG(job_id) FROM jobs
SELECT SUM(job_id) FROM jobs
SELECT COUNT(job_title) FROM jobs
SELECT MIN(job_title) FROM jobs
SELECT * FROM constainedInfo WHERE semester >= 4 AND age < 20
SELECT * FROM constainedInfo ORDER BY age ASC
SELECT * FROM constainedInfo WHERE s_name LIKE "a%"
SELECT min_salary,COUNT(job_id) FROM job grouped BY min_salary

--------------------------CREATE NEW USER---------------------

CREATE USER 'testuser1'@'localhost' IDENTIFIED BY 'password'
GRANT CREATE ON practice.* TO 'testuser1'@'localhost';
REVOKE CREATE ON practice.* FROM 'testuser1'@'localhost';
DROP USER 'testuser1'@'localhost'

