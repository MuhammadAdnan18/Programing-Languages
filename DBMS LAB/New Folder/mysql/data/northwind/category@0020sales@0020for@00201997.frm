TYPE=VIEW
query=select `product sales for 1997`.`CategoryName` AS `CategoryName`,sum(`product sales for 1997`.`ProductSales`) AS `CategorySales` from `northwind`.`product sales for 1997` group by `product sales for 1997`.`CategoryName`
md5=db4a95751cde7d515fea1741d43b63d5
updatable=0
algorithm=0
definer_user=root
definer_host=localhost
suid=2
with_check_option=0
timestamp=2023-01-20 13:07:48
create-version=2
source=SELECT     `Product Sales for 1997`.CategoryName, \n       Sum(`Product Sales for 1997`.ProductSales) AS CategorySales\nFROM `Product Sales for 1997`\nGROUP BY `Product Sales for 1997`.CategoryName
client_cs_name=utf8
connection_cl_name=utf8_general_ci
view_body_utf8=select `product sales for 1997`.`CategoryName` AS `CategoryName`,sum(`product sales for 1997`.`ProductSales`) AS `CategorySales` from `northwind`.`product sales for 1997` group by `product sales for 1997`.`CategoryName`
mariadb-version=100425
