

interface Client{

    type:string;
    project:string;
    id:number;  
    
    show();
}





class SoftCompany implements Client{

    type:string;
    project:string;
    id:number; 
    technology:string;
    amount:number
    
    show(){
        return `type : ${this.type} project: ${this.project} id: ${this.id} technology : ${this.technology} amount: ${this.amount}`;
    }

 }




class WorkingTeam implements Client{
    type:string;
    project:string;
    id:number; 
    salary:number;
    
    show(){
        return `type : ${this.type} project: ${this.project} id: ${this.id} salary : ${this.salary}`;
    }
  
}

let obj = new SoftCompany();



obj.type="bank";
obj.project="database";
obj.id=7;
obj.technology="java";
obj.amount=5000000;
console.log(obj.show());

let obj1 = new WorkingTeam();
obj1.type="bank";
obj1.project="database";
obj1.id=2;
obj1.salary=2000;
console.log(obj1.show());



interface Aera{

    length:number;
    width:number;  
    
    result();
}


class Rectangle implements Aera{
      
    length:number;
    width:number;  
    aera:number;

    result(){
      
        return `area of reactangle: ${this.aera}`;

    }

}


let obj3 = new Rectangle();

obj3.length=5;
obj3.width=4;
obj3.aera=obj3.length*obj3.width;
console.log(obj3.result());
