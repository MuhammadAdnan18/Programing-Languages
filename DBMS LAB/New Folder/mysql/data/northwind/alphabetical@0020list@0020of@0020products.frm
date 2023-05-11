TYPE=VIEW
query=select `northwind`.`products`.`ProductID` AS `ProductID`,`northwind`.`products`.`ProductName` AS `ProductName`,`northwind`.`products`.`SupplierID` AS `SupplierID`,`northwind`.`products`.`CategoryID` AS `CategoryID`,`northwind`.`products`.`QuantityPerUnit` AS `QuantityPerUnit`,`northwind`.`products`.`UnitPrice` AS `UnitPrice`,`northwind`.`products`.`UnitsInStock` AS `UnitsInStock`,`northwind`.`products`.`UnitsOnOrder` AS `UnitsOnOrder`,`northwind`.`products`.`ReorderLevel` AS `ReorderLevel`,`northwind`.`products`.`Discontinued` AS `Discontinued`,`northwind`.`categories`.`CategoryName` AS `CategoryName` from (`northwind`.`categories` join `northwind`.`products` on(`northwind`.`categories`.`CategoryID` = `northwind`.`products`.`CategoryID`)) where `northwind`.`products`.`Discontinued` = 0
md5=6e5004e29b60ceda6e757a6dd59f39eb
updatable=1
algorithm=0
definer_user=root
definer_host=localhost
suid=2
with_check_option=0
timestamp=2023-01-20 13:07:48
create-version=2
source=SELECT Products.*, \n       Categories.CategoryName\nFROM Categories \n   INNER JOIN Products ON Categories.CategoryID = Products.CategoryID\nWHERE (((Products.Discontinued)=0))
client_cs_name=utf8
connection_cl_name=utf8_general_ci
view_body_utf8=select `northwind`.`products`.`ProductID` AS `ProductID`,`northwind`.`products`.`ProductName` AS `ProductName`,`northwind`.`products`.`SupplierID` AS `SupplierID`,`northwind`.`products`.`CategoryID` AS `CategoryID`,`northwind`.`products`.`QuantityPerUnit` AS `QuantityPerUnit`,`northwind`.`products`.`UnitPrice` AS `UnitPrice`,`northwind`.`products`.`UnitsInStock` AS `UnitsInStock`,`northwind`.`products`.`UnitsOnOrder` AS `UnitsOnOrder`,`northwind`.`products`.`ReorderLevel` AS `ReorderLevel`,`northwind`.`products`.`Discontinued` AS `Discontinued`,`northwind`.`categories`.`CategoryName` AS `CategoryName` from (`northwind`.`categories` join `northwind`.`products` on(`northwind`.`categories`.`CategoryID` = `northwind`.`products`.`CategoryID`)) where `northwind`.`products`.`Discontinued` = 0
mariadb-version=100425
