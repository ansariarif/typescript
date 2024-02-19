var salaries = [45000, 89000, 78000, 90000, 75000];
var sum = 0;
salaries.forEach(function (ele, index, arr) {
    console.log(ele + " " + index + " " + arr);
    sum = sum + ele;
});
console.log(sum);
//arrow function
// salaries.forEach((ele,ind,ar) =>{
//     console.log(ele+" " +ind+" " +ar);
//     sum = sum +ele;
// });
salaries.forEach(function (ele) { return console.log(ele); }); // arrow fucntion with signle element
console.log("------------------------------------------");
var filsalary = salaries.filter(function (ele) { return ele < 80000; });
filsalary.forEach(function (el) { return console.log(el); });
console.log("------------------------------------------");
salaries.filter(function (ele) { return ele > 80000; }).forEach(function (el) { return console.log(el); });
// increment every salary by 5000
console.log("------------------------------------------");
var incsal = salaries.map(function (el) { return el + 5000; });
incsal.forEach(function (element) { return console.log(element); });
//increment salries only less than 500000 by 4000 and display it
console.log("------------------------------------------");
salaries.filter(function (ele) { return ele < 50000; }).map(function (ele) { return ele + 4000; }).forEach(function (ele) { return console.log(ele); });
//find method
var array1 = [5, 7, 8, 9, 33, 45];
var found = array1.find(function (element) { return element > 10; });
console.log(found);
//sum of salaries // reducing n salaries ip ====> single op
console.log("------------------------------------------");
var summ = salaries.reduce(function (acc, ele) { return acc + ele; }, 1000); // acc=0  default if u want default value is not zero than put , definelike  1000
console.log(summ);
