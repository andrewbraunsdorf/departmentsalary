var fs = require("fs");

// Step1. Create All single-d and multi-d arrays AS empty arrays (initially)
// push single string data/elements into an array as a single element
//push array data into an array to form muli-d arrays

// single-d arrays --valid
var departmentId = [];
var departments = [];

//multi-d arrays -- invalid
var employeeId = [];
var employeeName = [];
var salaries = [];

// Process "load_dept_name.txt" file
fs.readFile("load_dept_names.txt", "utf8", function(err, data){
	if (err) throw err;

	
	var deptDataClean = data.replace(/INSERT INTO `departments` VALUES \n/g, "");
	var deptDataArray = deptDataClean.split("\n");
	
	
	for (var i = 0; i < deptDataArray.length; i++) {
		//populate single-d arrays with DATA
		departmentId.push(deptDataArray[i].slice(2,6));
		departments.push(deptDataArray[i].slice(9,-3));
		
		employeeId.push([]);
		employeeName.push([]);
		salaries.push([]);
	}
		// populate multi-d arrays with empty sub-arrays (NO DATA!!!)
		
		
	
	console.log(departmentId);
	console.log(departments);
	console.log(employeeId);
	console.log(employeeName);
	console.log(salaries);
	
});

// Process "load_dept_emp.txt" file
fs.readFile("load_dept_emp.txt", "utf8", function(err, data){
	if (err) throw err;
	
	var employeeDataClean = data.replace(/INSERT INTO `dept_emp` VALUES /g, "");
	var employeeDataArray = employeeDataClean.split("\n");
	
	for (var i = 0; i < employeeDataArray.length; i++) {
		if (employeeDataArray[i].slice(28, 32) == "9999") {
			
			console.log(employeeDataArray[i].slice(8, 12));
			console.log(employeeDataArray[i].slice(1, 6));
			// employeeId[departmentId.indexOf(employeeDataArray[i].slice(7, 12))].push(employeeDataArray[i].slice(1,7));
		}
	}
//	employeeId.push(employeeDataArray[i])
	
	// console.log(employeeId);
	
});