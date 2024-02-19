let empId;
empId=1234;
console.log(empId);
console.log(typeof empId);
empId="e123";
console.log(empId);
console.log(typeof empId);
empId=true;
console.log(empId);
console.log(typeof empId);

let empSalary:any; // typescript keyword


let empAddress:any
empAddress="dhaari road delhi";
empAddress.toUpperCase();
let lower = (<string>empAddress).toLowerCase(); // typeassertion
let uuper = (<string>empAddress).toUpperCase();
console.log(lower);
console.log(uuper);

let city:string; // string ,number , boolean

city="Mumbai";

console.log(city);
//city=true;

let companyname=" neosoft technology";
document.write(companyname);
document.write(typeof companyname);
//companyname=23344;

var num1 = 34;
var num1 = 45;  // can redeclare
console.log(num1);

let num2=45;
num2=23;

const num3=11; // you can not modify , you can use it
