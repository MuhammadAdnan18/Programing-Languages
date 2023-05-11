TYPE=VIEW
query=select `northwind`.`categories`.`CategoryName` AS `CategoryName`,`northwind`.`products`.`ProductName` AS `ProductName`,sum(`northwind`.`order details`.`UnitPrice` * `northwind`.`order details`.`Quantity` * (1 - `northwind`.`order details`.`Discount`) / 100 * 100) AS `ProductSales` from (((`northwind`.`categories` join `northwind`.`products` on(`northwind`.`categories`.`CategoryID` = `northwind`.`products`.`CategoryID`)) join `northwind`.`order details` on(`northwind`.`products`.`ProductID` = `northwind`.`order details`.`ProductID`)) join `northwind`.`orders` on(`northwind`.`orders`.`OrderID` = `northwind`.`order details`.`OrderID`)) where `northwind`.`orders`.`ShippedDate` between \'1997-01-01\' and \'1997-12-31\' group by `northwind`.`categories`.`CategoryName`,`northwind`.`products`.`ProductName`
md5=af952a1807acbfb732268993def1ce5e
updatable=0
algorithm=0
definer_user=root
definer_host=localhost
suid=2
with_check_option=0
timestamp=2023-01-20 13:07:48
create-version=2
source=SELECT Categories.CategoryName, \n       Products.ProductName, \n       Sum((`Order Details`.UnitPrice*Quantity*(1-Discount)/100)*100) AS ProductSales\nFROM Categories\n JOIN    Products On Categories.CategoryID = Products.CategoryID\n    JOIN  `Order Details` on Products.ProductID = `Order Details`.ProductID     \n     JOIN  `Orders` on Orders.OrderID = `Order Details`.OrderID \nWHERE Orders.ShippedDate Between \'1997-01-01\' And \'1997-12-31\'\nGROUP BY Categories.CategoryName, Products.ProductName
client_cs_name=utf8
connection_cl_name=utf8_general_ci
view_body_utf8=select `northwind`.`categories`.`CategoryName` AS `CategoryName`,`northwind`.`products`.`ProductName` AS `ProductName`,sum(`northwind`.`order details`.`UnitPrice` * `northwind`.`order details`.`Quantity` * (1 - `northwind`.`order details`.`Discount`) / 100 * 100) AS `ProductSales` from (((`northwind`.`categories` join `northwind`.`products` on(`northwind`.`categories`.`CategoryID` = `northwind`.`products`.`CategoryID`)) join `northwind`.`order details` on(`northwind`.`products`.`ProductID` = `northwind`.`order details`.`ProductID`)) join `northwind`.`orders` on(`northwind`.`orders`.`OrderID` = `northwind`.`order details`.`OrderID`)) where `northwind`.`orders`.`ShippedDate` between \'1997-01-01\' and \'1997-12-31\' group by `northwind`.`categories`.`CategoryName`,`northwind`.`products`.`ProductName`
mariadb-version=100425
