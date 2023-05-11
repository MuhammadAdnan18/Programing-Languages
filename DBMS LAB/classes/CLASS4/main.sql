SELECT USER ,PASSWORD, HOST FROM mysql.user

CREATE USER 'testus'@'localhost' IDENTIFIED BY '123' 

GRANT SELECT  ON schooldb.* TO 'testuser'@'localhost'

GRANT INSERT ON schooldb.employee TO 'testuser'@'localhost'

GRANT UPDATE ON schooldb.employee TO 'testuser'@'localhost'

REVOKE UPDATE ON schooldb.employee FROM 'testuser'@'localhost'

GRANT ALL ON schooldb.employee TO 'testuser'@'localhost'

DROP USER 'testuser'@'localhost'