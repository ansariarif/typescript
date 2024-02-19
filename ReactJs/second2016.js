document.write("================2016=======================");
document.write("<br>");
let x = 5;
 let z =  x**2;
 document.write(z);

 let a = 5;

 a **=2;
document.write("<br>");
 document.write(a);

 document.write("<br>");
 const nu = [2,4,56,77,97];
 document.write(nu.includes(77));

document.write("<br>");
document.write("================2017=======================");
document.write("<br>");

let sr = 5 ;

//document.write(sr.padStart(4,0));

//document.write(sr.padEnd(4,0));

document.write("<br>");


const person = {
    name : "arif",
    age:50
};

document.write(Object.entries(person)); //return key/value pairs
document.write("<br>");
document.write(Object.values(person)); //return single 1D array of object valuesa

document.write("<br>");
/*
async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("its working");}, 3000);
    });
    document.write( await myPromise);
  }
  
  myDisplay();

*/
  document.write("<br>");
document.write("================2018=======================");
document.write("<br>");

const ar1 = [10 , 23,45];
const ar2 = [34 ,56];

const copy = [...ar1];
document.write(copy);
document.write("<br>");
const merge = [...ar1,...ar2];
document.write(merge);
document.write("<br>");
document.write(Math.max(...merge));

document.write("<br>");
document.write(/one.two/.test('one\ntwo'));
document.write("<br>");
document.write("<br>");
const re = /(\d{4})-(\d{2})-(\d{2})/;
const match= re.exec('2019-01-10');

document.write(match[0]);  
document.write("<br>");  // → 2019-01-10
document.write(match[1]); 
document.write("<br>");   // → 2019
document.write(match[2]); 
document.write("<br>");   // → 01
document.write(match[3]);
document.write("<br>");
document.write("<br>");

const text = 'A quick fox';

const regexpLastWord = /\w+$/;
document.write(text.match(regexpLastWord));
// expected output: Array ["fox"]
document.write("<br>");
const regexpWords = /\b\w+\b/g;
document.write(text.match(regexpWords));
// expected output: Array ["A", "quick", "fox"]
document.write("<br>");








