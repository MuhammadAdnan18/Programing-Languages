


CREATE TABLE jobs(
job_id INT NOT NULL UNIQUE,
job_title VARCHAR(50) NOT NULL DEFAULT ' ',
min_salary INT DEFAULT 8000,
max_salary INT DEFAULT NULL ,
PRIMARY KEY(job_id)
)

ALTER TABLE jobs
MODIFY COLUMN job_id  INT NOT NULL UNIQUE AUTO_INCREMENT;

INSERT INTO jobs
VALUES(1,'junior dev',8000,10000)

INSERT INTO jobs
VALUES(2,'frontend dev',9000,11000)
practice


CREATE TABLE job_history(
employee_id INT NOT NULL UNIQUE ,
start_date DATE NOT NULL,
end_date DATE NOT NULL,
job_ide INT NOT NULL,
department_id INT,
PRIMARY KEY(employee_id),
FOREIGN KEY (job_ide) REFERENCES jobs(job_id)
)

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

CREATE USER 'user2'@'localhost' IDENTIFIED BY 'password'