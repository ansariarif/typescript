class Generic<T>{
    obj:T
    constructor(obj:T){
        this.obj=obj;
    }
}

let gen = new Generic<string>("sfdsfd");
let gen1 = new Generic<number>(45464);


interface employeeIntf<E>{

    empId:E;
    empName:string;
}


class NeoDevloper implements employeeIntf<number>{

    empId:number;
    empName:string;
}

let devel1 = new NeoDevloper();
devel1.empId=344545;

let devel2 = new NeoDevloper();
devel1.empId=454;


class Neotrainer implements employeeIntf<string>{

    empName:string;
    empId:string;
}

let trainer2=new Neotrainer();
trainer2.empId="sfdsf";
trainer2.empName="dfdfds";


