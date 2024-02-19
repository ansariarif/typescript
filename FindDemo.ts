

let arr1 = [5, 12, 8, 130, 44];

let found1 = arr1.find(element => element > 10);

console.log(found1);

let inventory = [ {name: 'messi', number: 10}, {name: 'ronaldo', number: 7},{name: 'nymer', number: 11} ];
  
 let found2 = inventory.find( ({ name }) => name === 'messi' );
  
  console.log(found2)