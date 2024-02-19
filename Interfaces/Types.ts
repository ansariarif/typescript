class A{
   test(){

   }

}
class B{
   
    test(){
       
    }

}
class c extends A{
    test2(){
        this.test();
    }
}

//multiple inheritance of classes is not supported

// 1. interface can be extended

interface PersonIntf{

   name:string;
   age:number;

   getDetails();
}


interface Empintf extends PersonIntf{

    empId:number;
    empSalary:number;

    getSalary();
}

class Trainer implements Empintf{

    empId:number;
    empSalary:number;
    name:string
    age:number;

    getDetails(){}
    getSalary(){}
}

//multiple inheritance of interfacess is alloowed (exceptions)


interface MotherIntf{

    dream();
}

interface FatherIntf{

    goals();
}

interface ChildIntf extends MotherIntf, FatherIntf{

    hobbies();
}

class Child implements ChildIntf{

    hobbies(){}
    goals(){}
    dream(){}
}