var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.showPersonDetails = function () {
        return "Adhar number : " + this.adharNum + "  Age: " + this.age + "  Name : " + this.name;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.showStudentDetails = function () {
        return this.showPersonDetails() + " roll number: " + this.rollno + " standard : " + this.standard;
    };
    Student.prototype.calPercantage = function (m1, m2, m3) {
        return Math.round((m1 + m2 + m3) / 3);
    };
    return Student;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.showEmployeeDetails = function () {
        return this.showPersonDetails() + " employee id: " + this.empId + " salary : " + this.salary;
    };
    Employee.prototype.calGrossSalary = function (ta, ds, hrs) {
        return this.salary + ta + ds + hrs;
    };
    return Employee;
}(Person));
var stud = new Student();
stud.adharNum = 8888888888;
stud.age = 23;
stud.name = "arif";
stud.rollno = 3117001;
stud.standard = "12th std";
var Studentdetails = stud.showStudentDetails();
console.log(Studentdetails);
var perct = stud.calPercantage(70, 90, 80);
console.log(perct);
var Emp = new Employee();
Emp.adharNum = 999999999;
Emp.age = 30;
Emp.name = "fira";
Emp.empId = 7;
Emp.salary = 9000000;
var employeedetails = Emp.showEmployeeDetails();
console.log(employeedetails);
var netsal = Emp.calGrossSalary(600, 700, 900);
console.log(netsal);
