var SoftCompany = /** @class */ (function () {
    function SoftCompany() {
    }
    SoftCompany.prototype.show = function () {
        return "type : " + this.type + " project: " + this.project + " id: " + this.id + " technology : " + this.technology + " amount: " + this.amount;
    };
    return SoftCompany;
}());
var WorkingTeam = /** @class */ (function () {
    function WorkingTeam() {
    }
    WorkingTeam.prototype.show = function () {
        return "type : " + this.type + " project: " + this.project + " id: " + this.id + " salary : " + this.salary;
    };
    return WorkingTeam;
}());
var obj = new SoftCompany();
obj.type = "bank";
obj.project = "database";
obj.id = 7;
obj.technology = "java";
obj.amount = 5000000;
console.log(obj.show());
var obj1 = new WorkingTeam();
obj1.type = "bank";
obj1.project = "database";
obj1.id = 2;
obj1.salary = 2000;
console.log(obj1.show());
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.result = function () {
        return "area of reactangle: " + this.aera;
    };
    return Rectangle;
}());
var obj3 = new Rectangle();
obj3.length = 5;
obj3.width = 4;
obj3.aera = obj3.length * obj3.width;
console.log(obj3.result());
