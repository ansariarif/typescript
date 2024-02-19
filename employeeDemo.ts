
class Employee{
     
    empId:number;
    empName:string;
    empSalary:number;
    married:boolean;

    showdetails():string{
        return "id: "+this.empId+"  name: "+this.empName+"  salary: "+this.empSalary+" married? "+this.married;
    }

    showdetails1():string{
          return `id: ${this.empId}  name: ${this.empName}  salary: ${this.empSalary}  married: ${this.married}`;
    }


}


let num:number;
let s1:string;
let emp1:Employee;
emp1= new Employee();
emp1.empId = 112;
emp1.empName="haei";
emp1.empSalary=988888;
emp1.married=true;
let details1 = emp1.showdetails();
console.log(details1);



let emp2 = new Employee(); 
emp2.empId=113;
emp2.empName="arif";
emp2.empSalary=9888999;
emp2.married=true;

let details2 = emp2.showdetails1();
console.log(details2);