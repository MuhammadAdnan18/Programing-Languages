CREATE TABLE Customer(
cust_id INT(10) NOT NULL,
customervarchar(20) DEFAULT NULL,
PRIMARY KEY(cust_id)
)

CREATE TABLE Product(
prod_code INT(10) NOT NULL,
prod_name VARCHAR(20) DEFAULT NULL,
unit_price VARCHAR(2) DEFAULT NULL,
PRIMARY KEY(prod_code))

CREATE TABLE Customer_Order(
cust_id INT(10) NOT NULL,
order_code INT(10) NOT NULL, 
order_date VARCHAR(20) DEFAULT NULL,
PRIMARY KEY(order_code))

ALTER TABLE Customer 
ADD contact INT NULL;

movie
CREATE TABLE Movie (
Id INT (10) NOT NULL,
Title VARCHAR (30) DEFAULT NULL,
YEAR INT (10) NOT NULL,
Director VARCHAR (30) DEFAULT NULL,
PRIMARY KEY (Id, YEAR))

INSERT INTO Movie (Id, Title, YEAR, Director)
VALUES (1, 'Ben hur', 2016, 'Thomas')

INSERT INTO Movie (Id, Title, YEAR, Director)
VALUES (2, 'Get Smart', 2012, 'Richard Bell')

INSERT INTO Movie (Id, Title, YEAR, Director)
VALUES (3, 'Spider Man', 2009, 'Tam Morry')

INSERT INTO Movie (Id, Title, YEAR, Director)
VALUES (4, 'Batman V/S Super Man', 2015, 'Gerald Hond')

SELECT Movie