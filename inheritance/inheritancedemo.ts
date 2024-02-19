
class Person{
    adharNum:number;
    name:string;
    age:number;


constructor(anum:number,name:string,age:number){
     this.adharNum=anum;
     this.name=name;
     this.age=age;

}

    showPersonDetails():string{
           return `Adhar number : ${this.adharNum}  Age: ${this.age}  Name : ${this.name}`;
    }


}


class Student extends Person{
    rollno:number;
    standard:string;

    constructor(anum,name,age,rollno,standard){
        super(anum,name,age);
        this.rollno=rollno;
        this.standard=standard
    }

    showStudentDetails():string{
        return `${this.showPersonDetails()} roll number: ${this.rollno} standard : ${this.standard}`;
    }

    
    calPercantage(m1:number , m2:number, m3:number){
        return Math.round((m1+m2+m3)/3);
    }
}


class Employee extends Person{
    empId:number;
    salary:number;
    
    constructor (anum,name,age,id:number,sal:number){
        super(anum,name,age);
        this.empId=id;
        this.salary=sal;
    }

    showEmployeeDetails():string{
        return `${this.showPersonDetails()} employee id: ${this.empId} salary : ${this.salary}`;
    }


   calGrossSalary(ta:number,ds:number,hrs:number):number{
       return this.salary+ta+ds+hrs;
   }

}


let stud = new Student(66666666,"arif",23,111,"10th std");
// let stud = new Student();
// stud.adharNum=8888888888;
// stud.age=23;
// stud.name="arif";
// stud.rollno=3117001;
// stud.standard="12th std";

let Studentdetails = stud.showStudentDetails();
console.log(Studentdetails);
let perct = stud.calPercantage(70,90,80);
console.log(perct);

// let Emp = new Employee();
// Emp.adharNum=999999999;
// Emp.age=30;
// Emp.name="fira";
// Emp.empId=7;
// Emp.salary=9000000;

// let employeedetails = Emp.showEmployeeDetails();
// console.log(employeedetails);

// let netsal = Emp.calGrossSalary(600,700,900);
// console.log(netsal);


// let emp1 = new Employee(222,800000);
// emp1.adharNum=66666666;
// emp1.age=22;
// emp1.name="nymer";

