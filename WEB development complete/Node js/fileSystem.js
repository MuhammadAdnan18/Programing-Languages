//to make this file work just run it on terminal
//const=cant change value later on unlike var
//jshint eversion:6

//first create a filesystem object
const fs = require("fs");

//now with fs we can perform all sort of file operations(read,update,copy,delete)

//1)COPY:2 parameters("name of file to be coppied","name of new file")
//DO NOT FORGET to add extensions add the end of file names
fs.copyFileSync("whatIsBackend.txt", "backend.txt");
