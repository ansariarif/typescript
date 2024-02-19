

let salaries=[45000,89000,78000,90000,75000];
let sum = 0;
salaries.forEach(function(ele,index,arr){
     console.log(ele+" " +index +" " +arr);
     sum = sum +ele;
});

console.log(sum);

//arrow function
// salaries.forEach((ele,ind,ar) =>{
//     console.log(ele+" " +ind+" " +ar);
//     sum = sum +ele;
// });

salaries.forEach(ele=>console.log(ele));  // arrow fucntion with signle element
console.log("------------------------------------------");
let filsalary = salaries.filter(ele=>ele<80000);

filsalary.forEach(el => console.log(el));
console.log("------------------------------------------");
salaries.filter(ele=>ele>80000).forEach(el=>console.log(el));


// increment every salary by 5000
console.log("------------------------------------------");
let incsal = salaries.map(el=>el+5000);
incsal.forEach(element=>console.log(element));

//increment salries only less than 500000 by 4000 and display it
console.log("------------------------------------------");
salaries.filter(ele=>ele<50000).map(ele=>ele+4000).forEach(ele=>console.log(ele));

//find method

//let array1 = [5,7,8,9,33,45];

//const found = array1.find(element=>element >10 );
//console.log(found);

//sum of salaries // reducing n salaries ip ====> single op
console.log("------------------------------------------");
let summ = salaries.reduce((acc,ele)=>acc+ele, 1000); // acc=0  default if u want default value is not zero than put , definelike  1000

console.log(summ);