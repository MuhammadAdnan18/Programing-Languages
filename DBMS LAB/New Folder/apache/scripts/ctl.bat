@echo off

if not ""%1"" == ""START"" goto stop

cmd.exe /C start /B /MIN "" "F:\uni\IQRA\courses\DBMS LAB\New folder\apache\bin\httpd.exe"

if errorlevel 255 goto finish
if errorlevel 1 goto error
goto finish

:stop
cmd.exe /C start "" /MIN call "F:\uni\IQRA\courses\DBMS LAB\New folder\killprocess.bat" "httpd.exe"

if not exist "F:\uni\IQRA\courses\DBMS LAB\New folder\apache\logs\httpd.pid" GOTO finish
del "F:\uni\IQRA\courses\DBMS LAB\New folder\apache\logs\httpd.pid"
goto finish

:error
echo Error starting Apache

:finish
exit
