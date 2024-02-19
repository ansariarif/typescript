

interface EmployeeIntf{

       empId:number;
       empSalary:number;
       empName:string;  
       
       getGrossSalary():number;
}




class NeoTrainer implements EmployeeIntf{
   
    empId:number;
    empSalary:number;
    empName:string;
    emptechnology:string;

    getGrossSalary():number{
        return this.empSalary+3000+5000+200;
    }

}


class NeoDeveloper implements EmployeeIntf{
     empId:number;
     empSalary:number;
     empName:string;

     getGrossSalary():number{
                 return this.empSalary+7000+6000+400;
     }
}

let Trainer = new NeoTrainer();

Trainer.getGrossSalary();

Trainer.empId=7;
Trainer.empName="arif";
Trainer.empSalary=435455657;
Trainer.emptechnology="java";
let developer = new NeoDeveloper();
developer.getGrossSalary();
console.log(Trainer);


let obj:EmployeeIntf;

obj= new NeoTrainer();
obj.getGrossSalary(); // run time polymorhism
console.log(obj.getGrossSalary());
obj= new NeoDeveloper();
obj.getGrossSalary();// runtime poylmorphism
console.log(Trainer.getGrossSalary());