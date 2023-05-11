

REPAIR TABLE practice.job;

INSERT INTO jobs
VALUES(5,'data engenier',20000,30000)

GRANT CREATE ON practice.constainedinfo TO 'user2'@'localhost';
SELECT AVG(job_id) FROM jobs
SELECT SUM(job_id) FROM jobs
SELECT COUNT(job_title) FROM jobs
SELECT MIN(job_title) FROM jobs

SELECT min_salary,COUNT(job_id) FROM job grouped BY min_salary

ALTER TABLE jobs
ADD COLUMN e_name VARCHAR(50);

UPDATE jobs
SET e_name="Ali" WHERE job_id=1

CREATE USER 'user1'@'localhost' IDENTIFIED BY 'password'