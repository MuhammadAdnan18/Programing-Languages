TYPE=VIEW
query=select `northwind`.`products`.`ProductID` AS `ProductID`,`northwind`.`products`.`ProductName` AS `ProductName` from `northwind`.`products` where `northwind`.`products`.`Discontinued` = 0
md5=f2b2944e8568f9c4410bb68e495c8864
updatable=1
algorithm=0
definer_user=root
definer_host=localhost
suid=2
with_check_option=0
timestamp=2023-01-20 13:07:48
create-version=2
source=SELECT ProductID,\n       ProductName \nFROM Products \nWHERE Discontinued=0
client_cs_name=utf8
connection_cl_name=utf8_general_ci
view_body_utf8=select `northwind`.`products`.`ProductID` AS `ProductID`,`northwind`.`products`.`ProductName` AS `ProductName` from `northwind`.`products` where `northwind`.`products`.`Discontinued` = 0
mariadb-version=100425
