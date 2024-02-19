var NeoTrainer = /** @class */ (function () {
    function NeoTrainer() {
    }
    NeoTrainer.prototype.getGrossSalary = function () {
        return this.empSalary + 3000 + 5000 + 200;
    };
    return NeoTrainer;
}());
var NeoDeveloper = /** @class */ (function () {
    function NeoDeveloper() {
    }
    NeoDeveloper.prototype.getGrossSalary = function () {
        return this.empSalary + 7000 + 6000 + 400;
    };
    return NeoDeveloper;
}());
var Trainer = new NeoTrainer();
Trainer.getGrossSalary();
Trainer.empId = 7;
Trainer.empName = "arif";
Trainer.empSalary = 435455657;
Trainer.emptechnology = "java";
var developer = new NeoDeveloper();
developer.getGrossSalary();
console.log(Trainer);
var obj;
obj = new NeoTrainer();
obj.getGrossSalary(); // run time polymorhsism
console.log(obj.getGrossSalary());
obj = new NeoDeveloper();
obj.getGrossSalary(); // runtime poylomsusishm
console.log(Trainer.getGrossSalary());
