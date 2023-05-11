TYPE=VIEW
query=select `northwind`.`categories`.`CategoryName` AS `CategoryName`,`northwind`.`products`.`ProductName` AS `ProductName`,`northwind`.`products`.`QuantityPerUnit` AS `QuantityPerUnit`,`northwind`.`products`.`UnitsInStock` AS `UnitsInStock`,`northwind`.`products`.`Discontinued` AS `Discontinued` from (`northwind`.`categories` join `northwind`.`products` on(`northwind`.`categories`.`CategoryID` = `northwind`.`products`.`CategoryID`)) where `northwind`.`products`.`Discontinued` <> 1
md5=8d119293dbfefe489f9f3a17c95a372b
updatable=1
algorithm=0
definer_user=root
definer_host=localhost
suid=2
with_check_option=0
timestamp=2023-01-20 13:07:48
create-version=2
source=SELECT Categories.CategoryName, \n       Products.ProductName, \n       Products.QuantityPerUnit, \n       Products.UnitsInStock, \n       Products.Discontinued\nFROM Categories \n     INNER JOIN Products ON Categories.CategoryID = Products.CategoryID\nWHERE Products.Discontinued <> 1
client_cs_name=utf8
connection_cl_name=utf8_general_ci
view_body_utf8=select `northwind`.`categories`.`CategoryName` AS `CategoryName`,`northwind`.`products`.`ProductName` AS `ProductName`,`northwind`.`products`.`QuantityPerUnit` AS `QuantityPerUnit`,`northwind`.`products`.`UnitsInStock` AS `UnitsInStock`,`northwind`.`products`.`Discontinued` AS `Discontinued` from (`northwind`.`categories` join `northwind`.`products` on(`northwind`.`categories`.`CategoryID` = `northwind`.`products`.`CategoryID`)) where `northwind`.`products`.`Discontinued` <> 1
mariadb-version=100425
