var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.showdetails = function () {
        return "id: " + this.empId + "  name: " + this.empName + "  salary: " + this.empSalary + " married? " + this.married;
    };
    Employee.prototype.showdetails1 = function () {
        return "id: " + this.empId + "  name: " + this.empName + "  salary: " + this.empSalary + "  married: " + this.married;
    };
    return Employee;
}());
var num;
var s1;
var emp1;
emp1 = new Employee();
emp1.empId = 112;
emp1.empName = "haei";
emp1.empSalary = 988888;
emp1.married = true;
var details1 = emp1.showdetails();
console.log(details1);
var emp2 = new Employee();
emp2.empId = 113;
emp2.empName = "arif";
emp2.empSalary = 9888999;
emp2.married = true;
var details2 = emp2.showdetails1();
console.log(details2);
