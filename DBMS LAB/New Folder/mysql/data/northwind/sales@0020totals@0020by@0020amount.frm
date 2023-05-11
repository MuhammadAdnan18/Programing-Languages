TYPE=VIEW
query=select `order subtotals`.`Subtotal` AS `SaleAmount`,`northwind`.`orders`.`OrderID` AS `OrderID`,`northwind`.`customers`.`CompanyName` AS `CompanyName`,`northwind`.`orders`.`ShippedDate` AS `ShippedDate` from ((`northwind`.`customers` join `northwind`.`orders` on(`northwind`.`customers`.`CustomerID` = `northwind`.`orders`.`CustomerID`)) join `northwind`.`order subtotals` on(`northwind`.`orders`.`OrderID` = `order subtotals`.`OrderID`)) where `order subtotals`.`Subtotal` > 2500 and `northwind`.`orders`.`ShippedDate` between \'1997-01-01\' and \'1997-12-31\'
md5=cd0418dce2c09391e5acae49242d7072
updatable=0
algorithm=0
definer_user=root
definer_host=localhost
suid=2
with_check_option=0
timestamp=2023-01-20 13:07:48
create-version=2
source=SELECT `Order Subtotals`.Subtotal AS SaleAmount, \n                  Orders.OrderID, \n               Customers.CompanyName, \n                  Orders.ShippedDate\nFROM Customers \n JOIN Orders ON Customers.CustomerID = Orders.CustomerID\n    JOIN `Order Subtotals` ON Orders.OrderID = `Order Subtotals`.OrderID \nWHERE (`Order Subtotals`.Subtotal >2500) \nAND (Orders.ShippedDate BETWEEN \'1997-01-01\' And \'1997-12-31\')
client_cs_name=utf8
connection_cl_name=utf8_general_ci
view_body_utf8=select `order subtotals`.`Subtotal` AS `SaleAmount`,`northwind`.`orders`.`OrderID` AS `OrderID`,`northwind`.`customers`.`CompanyName` AS `CompanyName`,`northwind`.`orders`.`ShippedDate` AS `ShippedDate` from ((`northwind`.`customers` join `northwind`.`orders` on(`northwind`.`customers`.`CustomerID` = `northwind`.`orders`.`CustomerID`)) join `northwind`.`order subtotals` on(`northwind`.`orders`.`OrderID` = `order subtotals`.`OrderID`)) where `order subtotals`.`Subtotal` > 2500 and `northwind`.`orders`.`ShippedDate` between \'1997-01-01\' and \'1997-12-31\'
mariadb-version=100425
