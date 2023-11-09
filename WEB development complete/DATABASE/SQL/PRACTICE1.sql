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

DELETE FROM users WHERE id=NULL

INSERT INTO users(f_name,id,email,contact_No,address,gender)
VALUES ("hamza",736,"hamza@gmail.com","0342342252","va colony street#3","M"),
       ("hamz",7361,"hamz@gmail.com","034234221","va1 colony street#3","M")

INSERT INTO users VALUES 
("hamz",7361,"hamz@gmail.com","034234221","va1 colony street#3","M")

SELECT f_name AS "Students name",id
FROM users
WHERE id<7349 

SELECT *
FROM users

CREATE TABLE constainedInfo
(

s_name VARCHAR(50) NOT NULL,
s_id INT NOT NULL UNIQUE ,
contact VARCHAR(22) NOT NULL UNIQUE,
semester TINYINT NOT NULL,
age TINYINT NOT NULL CHECK (age >= 18)
)

INSERT INTO constainedInfo VALUES 
("Kamran",532,"034374872",4,19)

SELECT * FROM constainedInfo

INSERT INTO constainedInfo VALUES 
("Ahmad",421,"02237434322",3,18),
("Ali",432,"031674348682",7,22)

INSERT INTO constainedInfo VALUES 
("Jamshed",588,"0312444322",5,20),
("Ali Kamal",433,"0312744348682",4,21)

INSERT INTO constainedInfo VALUES 
("Ahmad",421,"02237434322",3,18),
("Ali",432,"031674348682",7,22)

SELECT * FROM constainedInfo WHERE semester >= 4 AND age < 20

SELECT * FROM constainedInfo ORDER BY age ASC

SELECT * FROM constainedInfo WHERE s_name LIKE "a%"