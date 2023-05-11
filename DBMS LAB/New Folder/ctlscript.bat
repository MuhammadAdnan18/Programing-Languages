@echo off
rem START or STOP Services
rem ----------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop

if exist F:\uni\IQRA\courses\DBMS LAB\New folder\hypersonic\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\server\hsql-sample-database\scripts\ctl.bat START)
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\ingres\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\ingres\scripts\ctl.bat START)
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\mysql\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\mysql\scripts\ctl.bat START)
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\postgresql\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\postgresql\scripts\ctl.bat START)
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\apache\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\apache\scripts\ctl.bat START)
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\openoffice\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\openoffice\scripts\ctl.bat START)
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\apache-tomcat\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\apache-tomcat\scripts\ctl.bat START)
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\resin\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\resin\scripts\ctl.bat START)
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\jetty\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\jetty\scripts\ctl.bat START)
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\subversion\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\subversion\scripts\ctl.bat START)
rem RUBY_APPLICATION_START
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\lucene\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\lucene\scripts\ctl.bat START)
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\third_application\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\third_application\scripts\ctl.bat START)
goto end

:stop
echo "Stopping services ..."
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\third_application\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\third_application\scripts\ctl.bat STOP)
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\lucene\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\lucene\scripts\ctl.bat STOP)
rem RUBY_APPLICATION_STOP
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\subversion\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\subversion\scripts\ctl.bat STOP)
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\jetty\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\jetty\scripts\ctl.bat STOP)
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\hypersonic\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\server\hsql-sample-database\scripts\ctl.bat STOP)
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\resin\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\resin\scripts\ctl.bat STOP)
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\apache-tomcat\scripts\ctl.bat (start /MIN /B /WAIT F:\uni\IQRA\courses\DBMS LAB\New folder\apache-tomcat\scripts\ctl.bat STOP)
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\openoffice\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\openoffice\scripts\ctl.bat STOP)
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\apache\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\apache\scripts\ctl.bat STOP)
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\ingres\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\ingres\scripts\ctl.bat STOP)
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\mysql\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\mysql\scripts\ctl.bat STOP)
if exist F:\uni\IQRA\courses\DBMS LAB\New folder\postgresql\scripts\ctl.bat (start /MIN /B F:\uni\IQRA\courses\DBMS LAB\New folder\postgresql\scripts\ctl.bat STOP)

:end

