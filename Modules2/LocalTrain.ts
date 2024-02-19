
export let stationname = "CST";

export function modify(){
    stationname="mumbra";
}
export function test(){

    console.log(stationname);
}

export class LocalTrain{

 trainId:number;
 source:string;
 destination:string;
 trainline:string;
 
   getDetails(){
           return `${this.trainId} ${this.source} ${this.destination} ${this.trainline}`;
   }
}

export * as train from './LocalTrain';