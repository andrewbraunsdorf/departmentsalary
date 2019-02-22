var fs = require("fs");

// Step1. Create All single-d and multi-d arrays AS empty arrays (initially)
// push single string data/elements into an array as a single element
//push array data into an array to form muli-d arrays

//single-d arrays
var departmentId = [];
var departments = [];

//multi-d arrays
var employeeId = [];
var employeeName = [];
var salaries = [];

// Process "load_dept_name.txt" file
fs.readFile("load_dept_names.txt", "utf8", function(err, data){
	if (err) throw err;
	
	console.log(data);
	//remove the u
})