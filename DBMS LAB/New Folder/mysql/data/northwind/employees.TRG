TYPE=TRIGGERS
triggers='CREATE DEFINER=`root`@`localhost` trigger new_salary\nbefore insert \non employees\nfor each row\nset new.Salary=new.Salary + 1000'
sql_modes=0
definers='root@localhost'
client_cs_names='utf8'
connection_cl_names='utf8_general_ci'
db_cl_names='utf8mb4_general_ci'
created=167622793360
