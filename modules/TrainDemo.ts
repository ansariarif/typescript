// import {stationname} from './LocalTrain'
// import {modify} from './LocalTrain'
// import {test as getstation} from './LocalTrain'
// import {LocalTrain as ltrain} from './LocalTrain'


import * as train  from  './LocalTrain';


// console.log(stationname); //  global module


// //stationname="ghatkopar"; //u can modify the valuse also unless it is import or export|| but also u cannot modify if it is import from module

// modify();
// getstation();

// let train1 = new ltrain();

// train1.trainId=100;
// train1.source="thane";
// train1.destination="CST";
// train1.trainline="central";

// let dd = train1.getDetails();
// console.log(dd);



console.log(train.stationname); //  global module


//stationname="ghatkopar"; //u can modify the valuse also unless it is import or export|| but also u cannot modify if it is import from module

train.modify();
train.test();

let train1 = new train.LocalTrain();

train1.trainId=100;
train1.source="thane";
train1.destination="CST";
train1.trainline="central";

let dd = train1.getDetails();
console.log(dd);