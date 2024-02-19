class Employee {
    // constructor(){
    //     this.empId=1;
    //     this.empName="AAA";
    //     this.empSalary=10000;
    //     this.married=false;
    // }
    constructor(id, name, salary, status) {
        this.empId = id;
        this.empName = name;
        this.empSalary = salary;
        this.married = status;
    }
    get emSal() {
        return this.empSalary;
    }
    set emSal(sal) {
        this.empSalary = sal;
    }
    get emNam() {
        return this.empName;
    }
    set emNam(nam) {
        this.empName = nam;
    }
    get emId() {
        return this.empId;
    }
    set emId(id) {
        this.empId = id;
    }
    get emStat() {
        return this.married;
    }
    set emStat(Stat) {
        this.married = Stat;
    }
    showdetails() {
        return "id: " + this.empId + "  name: " + this.empName + "  salary: " + this.empSalary + " married? " + this.married;
    }
    showdetails1() {
        return `id: ${this.empId}  name: ${this.empName}  salary: ${this.empSalary}  married: ${this.married}`;
    }
}
let emp2 = new Employee(666, 'arif', 3400, false);
console.log(emp2.showdetails1());
console.log(emp2.emSal); // accessing private method using getter method
emp2.emSal = 90000;
//console.log(emp2.emNam);
emp2.emNam = "Dhoni";
console.log(emp2.emNam);
console.log(emp2.emId);
emp2.emId = 777;
console.log(emp2.emStat);
emp2.emStat = true;
//emp2.empName = "messi";  ///private data not accessable outside class
console.log(emp2.showdetails1());
// let emp3 = new Employee(666,'arif',34000);
// console.log(emp3.showdetails1());
// //.empName = "ronaldo";
// console.log(emp3.showdetails1());
// let num:number;
// let s1:string;
// let emp1:Employee;
// emp1= new Employee();
//  let details1 = emp1.showdetails();
//  console.log(details1);
// emp1.empId = 112;
// emp1.empName="haei";
// emp1.empSalary=988888;
// emp1.married=true;
// details1 = emp1.showdetails();
// console.log(details1);
// let emp2 = new Employee(); 
// emp2.empId=113;
// emp2.empName="arif";
// emp2.empSalary=9888999;
// emp2.married=true;
// let details2 = emp2.showdetails1();
// console.log(details2);
