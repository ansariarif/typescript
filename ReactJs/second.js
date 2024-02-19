document.write("----------from------------");
document.write("<br>");
const myArray = Array.from("ABGJLOYGF");
document.write(myArray);

document.write("<br>");
document.write("----------foreach to iterate------------");
document.write("<br>");
const sport = [3,56,10,18,20];

document.write(sport.sort());

document.write("<br>");
sport.forEach((item)=> {document.write(item +"<br>")})
document.write("<br>");
document.write("----------keys to iterate length------------");
document.write("<br>");
const keys = sport.keys();

let text =  "";
for(let x of keys){
    text += x + "<br>";
}

document.write(text);
document.write("----------find method and find index------------");
function checkage(age){
    return age > 18;
}
document.write("<br>");


document.write(sport.find(checkage));
document.write("<br>");
document.write(sport.findIndex(checkage));
document.write("<br>");
document.write(sport.length);
document.write("<br>");
document.write(sport.lastIndexOf(18));
document.write("<br>");
document.write("<br>");

document.write("----------math------------");
document.write("<br>");
document.write(Math.trunc(4.5));
document.write("<br>");
document.write("   -----negative-----");
document.write("<br>");
document.write(Math.sign(-1));
document.write("<br>");
document.write("    -----zero-----");
document.write("<br>");
document.write(Math.sign(0));
document.write("<br>");
document.write("   -----positive-----");
document.write("<br>");
document.write(Math.sign(4));
document.write("<br>");
document.write(Math.cbrt(8));

document.write("<br>");
document.write(Math.log2(2));
document.write("<br>");
document.write("<br>");
document.write("-----------number-----------");
document.write("<br>");
document.write("<br>");
document.write(Number.isInteger(10));
document.write("<br>");
document.write(Number.isInteger(10.7));
document.write("<br>");
document.write(Number.isSafeInteger(10));
document.write("<br>");
document.write(Number.isSafeInteger(10334645675677676876676));
document.write("<br>");
document.write(isFinite(10/0));

document.write("<br>");
document.write("-----------String-----------");
document.write("<br>");

let txt = "this is training pf ReactJs from batch six";
document.write(txt.includes("training"));
document.write("<br>");
document.write(txt.startsWith("this"));
document.write("<br>");
document.write(txt.endsWith("this"));


document.write("<br>");
document.write("-----------symbol-----------");
document.write("<br>");

const person = {
    name: "arif",
    age :23
}

let id = Symbol('id');
person[id]=101
document.write(person[id] + " " + person.id);

document.write("<br>");
document.write("-----------undefined parameter-----------");
document.write("<br>");

function myfn(x,y=7) {
    return x + y;

    
}

document.write(myfn(5));

document.write("<br>");
document.write("----------rest parameter-----------");
document.write("<br>");

function sum(...args) {

    let sum = 0;
    for(let arg of args) sum += arg;
    return sum;
    
}

let x = sum(2,4,5,6,7,8,94)

document.write(x);
