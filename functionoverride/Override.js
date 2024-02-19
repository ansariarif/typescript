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
    function Person(anum, name, age) {
        this.adharNum = anum;
        this.name = name;
        this.age = age;
    }
    Person.prototype.showDetails = function () {
        return "Adhar number : " + this.adharNum + "  Age: " + this.age + "  Name : " + this.name;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(anum, name, age, rollno, standard) {
        var _this = _super.call(this, anum, name, age) || this;
        _this.rollno = rollno;
        _this.standard = standard;
        return _this;
    }
    Student.prototype.showDetails = function () {
        return _super.prototype.showDetails.call(this) + " roll number: " + this.rollno + " standard : " + this.standard;
    };
    Student.prototype.calPercantage = function (m1, m2, m3) {
        return Math.round((m1 + m2 + m3) / 3);
    };
    return Student;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(anum, name, age, id, sal) {
        var _this = _super.call(this, anum, name, age) || this;
        _this.empId = id;
        _this.salary = sal;
        return _this;
    }
    Employee.prototype.showDetails = function () {
        return "$ employee id: " + this.empId + " salary : " + this.salary;
    };
    Employee.prototype.calGrossSalary = function (ta, ds, hrs) {
        return this.salary + ta + ds + hrs;
    };
    return Employee;
}(Person));
var obj;
obj = new Person(8888, "sivita", 23);
console.log("person details:" + obj.showDetails());
obj = new Student(66666666, "arif", 23, 111, "10th std");
console.log("student details :" + obj.showDetails());
obj = new Employee(3243434, "messi", 34, 111, 4354354);
console.log("employee details: " + obj.showDetails()); // run time ploymorphism
/* when we do upcasting then for sub class own properites is unvisisble, overriding properite are visible*/
/*
let obj2:Student;
obj2 = new Student(454,"dsfds",23,111,"ssc"); // super +  own pr
console.log("Studdnt to student"+obj2.showDetails())
let obj1:Person;

obj1 = new Student(2222,"arifsd",23,111,"23234"); // upcasting
console.log("person to student :"+obj1.showDetails());   */
//only casted super class property is vivsible
