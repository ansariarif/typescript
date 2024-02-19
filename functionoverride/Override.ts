
class Person{
    adharNum:number;
    name:string;
    age:number;
    gender:string;


constructor(anum:number,name:string,age:number){
     this.adharNum=anum;
     this.name=name;
     this.age=age;

}

    showDetails():string{
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

    showDetails():string{
        return `${super.showDetails()} roll number: ${this.rollno} standard : ${this.standard}`;
    }            //chaaining->1st call super/parent class method then chlid class method

    
    calPercantage(m1:number , m2:number, m3:number){
        return Math.round((m1+m2+m3)/3);
    }
}


class Employee extends Person{
    empId:number;
    salary:number;
    gender:string;
    constructor (anum,name,age,id:number,sal:number){
        super(anum,name,age);
        this.empId=id;
        this.salary=sal;
    }

    showDetails():string{
      //  this.gender="female"; // chlid class access
      //  super.gender="male";//parent class acess

        return `$ employee id: ${this.empId} salary : ${this.salary}`;
    }


   calGrossSalary(ta:number,ds:number,hrs:number):number{
       return this.salary+ta+ds+hrs;
   }

}


let obj:Person;

obj = new Person(8888,"sivita",23);
console.log("person details:" +obj.showDetails());

obj = new Student(66666666,"arif",23,111,"10th std");
console.log("student details :"+obj.showDetails());

obj = new Employee(3243434,"messi",34,111,4354354);

console.log("employee details: "+obj.showDetails()); // run time ploymorphism

/* when we do upcasting then for sub class own properites is unvisisble, overriding properite are visible*/
/*
let obj2:Student;
obj2 = new Student(454,"dsfds",23,111,"ssc"); // super +  own pr
console.log("Studdnt to student"+obj2.showDetails())
let obj1:Person;

obj1 = new Student(2222,"arifsd",23,111,"23234"); // upcasting
console.log("person to student :"+obj1.showDetails());   */
//only casted super class property is vivsible