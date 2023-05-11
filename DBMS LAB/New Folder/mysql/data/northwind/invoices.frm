TYPE=VIEW
query=select `northwind`.`orders`.`ShipName` AS `ShipName`,`northwind`.`orders`.`ShipAddress` AS `ShipAddress`,`northwind`.`orders`.`ShipCity` AS `ShipCity`,`northwind`.`orders`.`ShipRegion` AS `ShipRegion`,`northwind`.`orders`.`ShipPostalCode` AS `ShipPostalCode`,`northwind`.`orders`.`ShipCountry` AS `ShipCountry`,`northwind`.`orders`.`CustomerID` AS `CustomerID`,`northwind`.`customers`.`CompanyName` AS `CustomerName`,`northwind`.`customers`.`Address` AS `Address`,`northwind`.`customers`.`City` AS `City`,`northwind`.`customers`.`Region` AS `Region`,`northwind`.`customers`.`PostalCode` AS `PostalCode`,`northwind`.`customers`.`Country` AS `Country`,`northwind`.`employees`.`FirstName` + \' \' + `northwind`.`employees`.`LastName` AS `Salesperson`,`northwind`.`orders`.`OrderID` AS `OrderID`,`northwind`.`orders`.`OrderDate` AS `OrderDate`,`northwind`.`orders`.`RequiredDate` AS `RequiredDate`,`northwind`.`orders`.`ShippedDate` AS `ShippedDate`,`northwind`.`shippers`.`CompanyName` AS `ShipperName`,`northwind`.`order details`.`ProductID` AS `ProductID`,`northwind`.`products`.`ProductName` AS `ProductName`,`northwind`.`order details`.`UnitPrice` AS `UnitPrice`,`northwind`.`order details`.`Quantity` AS `Quantity`,`northwind`.`order details`.`Discount` AS `Discount`,`northwind`.`order details`.`UnitPrice` * `northwind`.`order details`.`Quantity` * (1 - `northwind`.`order details`.`Discount`) / 100 * 100 AS `ExtendedPrice`,`northwind`.`orders`.`Freight` AS `Freight` from (((((`northwind`.`customers` join `northwind`.`orders` on(`northwind`.`customers`.`CustomerID` = `northwind`.`orders`.`CustomerID`)) join `northwind`.`employees` on(`northwind`.`employees`.`EmployeeID` = `northwind`.`orders`.`EmployeeID`)) join `northwind`.`order details` on(`northwind`.`orders`.`OrderID` = `northwind`.`order details`.`OrderID`)) join `northwind`.`products` on(`northwind`.`products`.`ProductID` = `northwind`.`order details`.`ProductID`)) join `northwind`.`shippers` on(`northwind`.`shippers`.`ShipperID` = `northwind`.`orders`.`ShipVia`))
md5=93200ce8a899490430c219710b5b86c4
updatable=1
algorithm=0
definer_user=root
definer_host=localhost
suid=2
with_check_option=0
timestamp=2023-01-20 13:07:48
create-version=2
source=SELECT Orders.ShipName,\n       Orders.ShipAddress,\n       Orders.ShipCity,\n       Orders.ShipRegion, \n       Orders.ShipPostalCode,\n       Orders.ShipCountry,\n       Orders.CustomerID,\n       Customers.CompanyName AS CustomerName, \n       Customers.Address,\n       Customers.City,\n       Customers.Region,\n       Customers.PostalCode,\n       Customers.Country,\n       (Employees.FirstName + \' \' + Employees.LastName) AS Salesperson, \n       Orders.OrderID,\n       Orders.OrderDate,\n       Orders.RequiredDate,\n       Orders.ShippedDate, \n       Shippers.CompanyName As ShipperName,\n       `Order Details`.ProductID,\n       Products.ProductName, \n       `Order Details`.UnitPrice,\n       `Order Details`.Quantity,\n       `Order Details`.Discount, \n       (((`Order Details`.UnitPrice*Quantity*(1-Discount))/100)*100) AS ExtendedPrice,\n       Orders.Freight \nFROM Customers \n  JOIN Orders ON Customers.CustomerID = Orders.CustomerID  \n    JOIN Employees ON Employees.EmployeeID = Orders.EmployeeID    \n     JOIN `Order Details` ON Orders.OrderID = `Order Details`.OrderID     \n      JOIN Products ON Products.ProductID = `Order Details`.ProductID      \n       JOIN Shippers ON Shippers.ShipperID = Orders.ShipVia
client_cs_name=utf8
connection_cl_name=utf8_general_ci
view_body_utf8=select `northwind`.`orders`.`ShipName` AS `ShipName`,`northwind`.`orders`.`ShipAddress` AS `ShipAddress`,`northwind`.`orders`.`ShipCity` AS `ShipCity`,`northwind`.`orders`.`ShipRegion` AS `ShipRegion`,`northwind`.`orders`.`ShipPostalCode` AS `ShipPostalCode`,`northwind`.`orders`.`ShipCountry` AS `ShipCountry`,`northwind`.`orders`.`CustomerID` AS `CustomerID`,`northwind`.`customers`.`CompanyName` AS `CustomerName`,`northwind`.`customers`.`Address` AS `Address`,`northwind`.`customers`.`City` AS `City`,`northwind`.`customers`.`Region` AS `Region`,`northwind`.`customers`.`PostalCode` AS `PostalCode`,`northwind`.`customers`.`Country` AS `Country`,`northwind`.`employees`.`FirstName` + \' \' + `northwind`.`employees`.`LastName` AS `Salesperson`,`northwind`.`orders`.`OrderID` AS `OrderID`,`northwind`.`orders`.`OrderDate` AS `OrderDate`,`northwind`.`orders`.`RequiredDate` AS `RequiredDate`,`northwind`.`orders`.`ShippedDate` AS `ShippedDate`,`northwind`.`shippers`.`CompanyName` AS `ShipperName`,`northwind`.`order details`.`ProductID` AS `ProductID`,`northwind`.`products`.`ProductName` AS `ProductName`,`northwind`.`order details`.`UnitPrice` AS `UnitPrice`,`northwind`.`order details`.`Quantity` AS `Quantity`,`northwind`.`order details`.`Discount` AS `Discount`,`northwind`.`order details`.`UnitPrice` * `northwind`.`order details`.`Quantity` * (1 - `northwind`.`order details`.`Discount`) / 100 * 100 AS `ExtendedPrice`,`northwind`.`orders`.`Freight` AS `Freight` from (((((`northwind`.`customers` join `northwind`.`orders` on(`northwind`.`customers`.`CustomerID` = `northwind`.`orders`.`CustomerID`)) join `northwind`.`employees` on(`northwind`.`employees`.`EmployeeID` = `northwind`.`orders`.`EmployeeID`)) join `northwind`.`order details` on(`northwind`.`orders`.`OrderID` = `northwind`.`order details`.`OrderID`)) join `northwind`.`products` on(`northwind`.`products`.`ProductID` = `northwind`.`order details`.`ProductID`)) join `northwind`.`shippers` on(`northwind`.`shippers`.`ShipperID` = `northwind`.`orders`.`ShipVia`))
mariadb-version=100425
