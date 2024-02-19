

class Employee{
    id:number;
    name:string;
    age:number;


constructor(id:number,name:string,age:number){
     this.id=id;
     this.name=name;
     this.age=age;

}

    showDetails():string{
           return `id : ${this.id}  Age: ${this.age}  Name : ${this.name}`;
    }


}


class Manager extends Employee{
    Department:string;
    salary:number;

    constructor(id,name,age,Department,salary){
        super(id,name,age);
        this.Department=this.Department;
        this.salary=this.salary;
    }

    showManagerDetails():string{
        return `${this.showDetails()} department: ${this.Department} salary : ${this.salary}`;
    }

    
    
}



let obj = new Employee(101,"arif",24);

console.log(obj.showDetails());

 let obj1 = new Manager(10,"fira",45,"web",98000);
 obj1.salary=98000;
 obj1.Department="web";
console.log(obj1.showManagerDetails());


