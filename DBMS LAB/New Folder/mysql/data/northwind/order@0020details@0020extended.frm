TYPE=VIEW
query=select `northwind`.`order details`.`OrderID` AS `OrderID`,`northwind`.`order details`.`ProductID` AS `ProductID`,`northwind`.`products`.`ProductName` AS `ProductName`,`northwind`.`order details`.`UnitPrice` AS `UnitPrice`,`northwind`.`order details`.`Quantity` AS `Quantity`,`northwind`.`order details`.`Discount` AS `Discount`,`northwind`.`order details`.`UnitPrice` * `northwind`.`order details`.`Quantity` * (1 - `northwind`.`order details`.`Discount`) / 100 * 100 AS `ExtendedPrice` from (`northwind`.`products` join `northwind`.`order details` on(`northwind`.`products`.`ProductID` = `northwind`.`order details`.`ProductID`))
md5=e75e96d4a78895924221a9278484ee62
updatable=1
algorithm=0
definer_user=root
definer_host=localhost
suid=2
with_check_option=0
timestamp=2023-01-20 13:07:48
create-version=2
source=SELECT `Order Details`.OrderID, \n       `Order Details`.ProductID, \n       Products.ProductName, \n	   `Order Details`.UnitPrice, \n       `Order Details`.Quantity, \n       `Order Details`.Discount, \n      (`Order Details`.UnitPrice*Quantity*(1-Discount)/100)*100 AS ExtendedPrice\nFROM Products \n     JOIN `Order Details` ON Products.ProductID = `Order Details`.ProductID
client_cs_name=utf8
connection_cl_name=utf8_general_ci
view_body_utf8=select `northwind`.`order details`.`OrderID` AS `OrderID`,`northwind`.`order details`.`ProductID` AS `ProductID`,`northwind`.`products`.`ProductName` AS `ProductName`,`northwind`.`order details`.`UnitPrice` AS `UnitPrice`,`northwind`.`order details`.`Quantity` AS `Quantity`,`northwind`.`order details`.`Discount` AS `Discount`,`northwind`.`order details`.`UnitPrice` * `northwind`.`order details`.`Quantity` * (1 - `northwind`.`order details`.`Discount`) / 100 * 100 AS `ExtendedPrice` from (`northwind`.`products` join `northwind`.`order details` on(`northwind`.`products`.`ProductID` = `northwind`.`order details`.`ProductID`))
mariadb-version=100425
