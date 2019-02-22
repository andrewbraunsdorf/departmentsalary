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

	
	var deptDataClean = data.replace(/INSERT INTO `departments` VALUES \n/g, "");
	
	var deptDataArray = deptDataClean.split("\n");
	for (var i = 0; i < deptDataArray.length; i++) {
		departmentId.push(deptDataArray[i].slice(2,6));
	}
		for (var j = 0; j < deptDataArray.length; j++) {
		departments.push(deptDataArray[j].slice(9,-3));
	}
	console.log(departmentId);
	console.log(departments);
})