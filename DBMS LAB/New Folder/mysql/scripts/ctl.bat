@echo off
rem START or STOP Services
rem ----------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop


"F:\uni\IQRA\courses\DBMS LAB\New folder\mysql\bin\mysqld" --defaults-file="F:\uni\IQRA\courses\DBMS LAB\New folder\mysql\bin\my.ini" --standalone
if errorlevel 1 goto error
goto finish

:stop
cmd.exe /C start "" /MIN call "F:\uni\IQRA\courses\DBMS LAB\New folder\killprocess.bat" "mysqld.exe"

if not exist "F:\uni\IQRA\courses\DBMS LAB\New folder\mysql\data\%computername%.pid" goto finish
echo Delete %computername%.pid ...
del "F:\uni\IQRA\courses\DBMS LAB\New folder\mysql\data\%computername%.pid"
goto finish


:error
echo MySQL could not be started

:finish
exit
