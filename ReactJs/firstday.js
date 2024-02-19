

document.write("<br>");

for(let i = 0 ; i<= 10 ; i++)
{
    
         document.write(i+" ");
     
}
document.write("<br>");
document.write("======================================================");

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("======================================================");

document.write("<br>");
document.write("const keyword");
document.write("<br>");
document.write("<br>");
const subj = ["java","react js","javascript"];

//subj = ["html","angular"];  

document.write(subj);

document.write("<br>");
document.write("======================================================");
document.write("<br>");

document.write("use of arrow fucntion");
document.write("<br>");
document.write("<br>");


let arrowtest1=(num1,num2)=>{
    let sub=num1-num2;
    return sub;
}


document.write(arrowtest1(23,12));


document.write("<br>");
document.write("<br>");

document.write("map object");
document.write("<br>");
document.write("======================================================");
document.write("<br>");
const subject = new Map();

subject.set("java","2 months");
subject.set("ReactJs","20 days");
subject.set("frontend","1 month");
subject.set("angular","10 days");

subject.forEach((values,keys)=>{document.write(values+'='+keys+"<br>")});

document.write(subject.get("java"));
document.write("<br>");
document.write(subject.size);
document.write("<br>");
document.write(subject.delete("angular"));
document.write("<br>");
document.write(subject.has("ReactJs"));
document.write("<br>");
document.write(subject.has("python"));
document.write("<br>");
document.write(typeof subject);

document.write("<br>");

document.write("======================================================");
document.write("<br>");
document.write("set object");
document.write("<br>");

const training = new  Set();

training.add("java");
training.add("python");
training.add("php");
training.add("javascript");

training.forEach(function(values){
    document.write(values+"<br>");
});

document.write("<br>");

document.write(training.has("java"));


document.write("<br>");
document.write("======================================================");

document.write("<br>");
document.write("classes");
document.write("<br>");

class student{
    name;
    age;
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    department(){
        let depart = "java web developer";
        let time = "2 months";
        document.write(depart);
        document.write(time);
    }

    
}

//document.write(st1.multi(2,4));
document.write("<br>");
let st1 = new student("arif",23);
let st2 = new student("fira",22);

document.write(st1.name + " : " + st1.age);
document.write("<br>");
document.write(st2.name + " : " + st2.age);
document.write("<br>");
document.write(st1.department());
document.write("<br>");

document.write("---------------------------------------------------------------");

document.write("---------------------------------------------------------------");

document.write("<br>");

class Company {
    constructor(brand) {
       this.Compname = brand;
    }
    get name() {
       return this.Compname;
    }
    set name(x) {
       this.Compname = x;
    }

    
 }
 myName = new Company("ReactJs training");

 document.write(myName.Compname);