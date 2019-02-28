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
fs.readFile("load_dept_names.txt", "utf8", function(err, data) {
	if (err) throw err;


	var deptDataClean = data.replace(/INSERT INTO `departments` VALUES \n/g, "");
	var deptDataArray = deptDataClean.split("\n");


	for (var i = 0; i < deptDataArray.length; i++) {
		//populate single-d arrays with DATA
		departmentId.push(deptDataArray[i].slice(2, 6));
		departments.push(deptDataArray[i].slice(9, -3));

		employeeId.push([]);
		employeeName.push([]);
		salaries.push([]);
	}
	// populate multi-d arrays with empty sub-arrays (NO DATA!!!)



	// console.log(departmentId);
	// console.log(departments);
	// console.log(employeeId);
	// console.log(employeeName);
	// console.log(salaries);

});

// Process "load_dept_emp.txt" file
fs.readFile("load_dept_emp.txt", "utf8", function(err, data) {
	if (err) throw err;

	var employeeDataClean = data.replace(/INSERT INTO `dept_emp` VALUES /g, "");
	var employeeDataArray = employeeDataClean.split("\n");

	for (var i = 0; i < employeeDataArray.length; i++) {
		if (employeeDataArray[i].slice(28, 32) == "9999") {

			// console.log(employeeDataArray[i].slice(8, 12));
			// console.log(employeeDataArray[i].slice(1, 6));
			employeeId[departmentId.indexOf(employeeDataArray[i].slice(8, 12))].push(employeeDataArray[i].slice(1, 6));
		}
	}
	//	employeeId.push(employeeDataArray[i])

	console.log(employeeId);

});

// Process "load_salaries1.txt" file


fs.readFile("load_salaries1.txt", "utf8", function(err, data) {
	if (err) throw err;

	var salaryDataClean = data.replace(/INSERT INTO `salaries` VALUES /g, "");
	var salaryDataArray = salaryDataClean.split("\n");

	// console.log(salaryDataArray[0].slice(27, 31));

	for (var i = 0; i < salaryDataArray.length; i++) {
		if (salaryDataArray[i].slice(27, 31) == "9999") {
			// console.log("Salary empId: ", salaryDataArray[i].slice(1, 6));
			for (var j = 0; j < employeeId.length; j++) {
				for (var k = 0; k < employeeId[j].length; k++) {

					// console.log(employeeId[j][k]);
					if (salaryDataArray[i].slice(1, 6) == employeeId[j][k]) {
						// console.log("!!!! Match !!!!");
						// salaries[j].push(salaryDataArray[i].slice(7, 12));
						salaries[j][k] = salaryDataArray[i].slice(7, 12);
					}
				}
			}

			// console.log(salaryDataArray[i].slice(1, 6));

			// salaries.push(salaryDataArray[i].slice(1, 6));
		}
	}
	console.log(salaries);

});

// for (var j = 0; j < employeeId[i].length; j++) {
// employeeId[departmentId.indexOf(employeeDataArray[i].slice(8, 12))].push(employeeDataArray[i].slice(1,6));
// salaries[employeeId[i].indexOf(salaryDataArray[i][j].slice(2, 6))].push(salaryDataArray[i].slice(7, 11));
// }





// .split(",").reverse().join("")

fs.readFile("load_employee.txt", "utf8", function(err, data) {
	if (err) throw err;

	var employeeNameDataClean = data.replace(/INSERT INTO `employees` VALUES /g, "");
	var employeeNameDataArray = employeeNameDataClean.split("\n");

	for (var i = 0; i < employeeNameDataArray.length; i++) {
		employeeNameDataArray[i].slice(21, -20);//.split(",").reverse().join(""));
		
		
		// console.log(employeeNameSplit[i]);
		for (var j = 0; j < employeeId.length; j++) {
			for (var k = 0; k < employeeId[j].length; k++) {
				if (employeeNameDataArray[i].slice(1, 6) == employeeId[j][k]) {
					//salaries[j][k] = salaryDataArray[i].slice(7, 12);
					employeeName[j][k] = employeeNameDataArray[i].slice(21, -20).split(",").reverse().join(" ");

				// employeeId[departmentId.indexOf(employeeDataArray[i].slice(8, 12))].push(employeeDataArray[i].slice(1,6));
				// employeeName[employeeId.indexOf(employeeNameDataArray[i][j].slice(2, 6))] //.push(employeeNameDataArray[i][j].slice(20, -19));
			
				}
				}
		}
		// console.log(employeeNameDataArray[i]);

	}
	console.log(employeeName);

});


//dump all fs files into one file.AS

// replaced () to []
// replace '' with "" using regex. using .replace()

// use .json file parse to create an
