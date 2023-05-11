TYPE=VIEW
query=select distinct `northwind`.`customers`.`CustomerID` AS `CustomerID`,`northwind`.`customers`.`CompanyName` AS `CompanyName`,`northwind`.`customers`.`City` AS `City`,`northwind`.`customers`.`Country` AS `Country` from (`northwind`.`customers` join `northwind`.`orders` on(`northwind`.`customers`.`CustomerID` = `northwind`.`orders`.`CustomerID`)) where `northwind`.`orders`.`OrderDate` between \'1997-01-01\' and \'1997-12-31\'
md5=7c3bdadb5ffa477355920b1554959a21
updatable=0
algorithm=0
definer_user=root
definer_host=localhost
suid=2
with_check_option=0
timestamp=2023-01-20 13:07:48
create-version=2
source=SELECT DISTINCT Customers.CustomerID, \n                Customers.CompanyName, \n                Customers.City, \n                Customers.Country\nFROM Customers \n     JOIN Orders ON Customers.CustomerID = Orders.CustomerID\nWHERE Orders.OrderDate BETWEEN \'1997-01-01\' And \'1997-12-31\'
client_cs_name=utf8
connection_cl_name=utf8_general_ci
view_body_utf8=select distinct `northwind`.`customers`.`CustomerID` AS `CustomerID`,`northwind`.`customers`.`CompanyName` AS `CompanyName`,`northwind`.`customers`.`City` AS `City`,`northwind`.`customers`.`Country` AS `Country` from (`northwind`.`customers` join `northwind`.`orders` on(`northwind`.`customers`.`CustomerID` = `northwind`.`orders`.`CustomerID`)) where `northwind`.`orders`.`OrderDate` between \'1997-01-01\' and \'1997-12-31\'
mariadb-version=100425
