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
var Employee = /** @class */ (function () {
    function Employee(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Employee.prototype.showDetails = function () {
        return "id : " + this.id + "  Age: " + this.age + "  Name : " + this.name;
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, age, Department, salary) {
        var _this = _super.call(this, id, name, age) || this;
        _this.Department = _this.Department;
        _this.salary = _this.salary;
        return _this;
    }
    Manager.prototype.showManagerDetails = function () {
        return this.showDetails() + " department: " + this.Department + " salary : " + this.salary;
    };
    return Manager;
}(Employee));
var obj = new Employee(101, "arif", 24);
console.log(obj.showDetails());
var obj1 = new Manager(10, "fira", 45, "web", 98000);
obj1.salary = 98000;
obj1.Department = "web";
console.log(obj1.showManagerDetails());
