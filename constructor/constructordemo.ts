
class Employee{
     
    empId:number;
    empName:string;
    empSalary:number;
    married:boolean;

    // constructor(){
    //     this.empId=1;
    //     this.empName="AAA";
    //     this.empSalary=10000;
    //     this.married=false;
    // }


    constructor(id:number, name:string, salary:number, status ?:boolean){
        this.empId=id;
        this.empName=name;
        this.empSalary=salary;
        this.married=status;
    }

    showdetails():string{
        return "id: "+this.empId+"  name: "+this.empName+"  salary: "+this.empSalary+" married? "+this.married;
    }

    showdetails1():string{
          return `id: ${this.empId}  name: ${this.empName}  salary: ${this.empSalary}  married: ${this.married}`;
    }


}



let emp2 = new Employee(666,'arif',3400,false);
console.log(emp2.showdetails1());
emp2.empName = "messi";
console.log(emp2.showdetails1());


let emp3 = new Employee(666,'arif',34000);
console.log(emp3.showdetails1());
emp3.empName = "ronaldo";
console.log(emp3.showdetails1());



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