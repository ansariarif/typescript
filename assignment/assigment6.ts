
class MapClass<K,V>{
     myMap = new Map<K,V>();

    set(key:K, value:V) : void{
        this.myMap.set(key,value);
    }

    get(key:K) : V {
        return this.myMap.get(key);
    }

    has(key:K) :boolean{
        if(this.myMap.has(key)) return true;
        else return false;
    }

    delete(key:K) : boolean{
        if(this.myMap.has(key)){
            this.myMap.delete(key);
            return true;
        }else return false;
    }

    size() : number{
        return this.myMap.size;
    }

    clear() : void{
        this.myMap.clear()
    }

    getKeys() : void{
        for (let key of this.myMap.keys()) {
            console.log(key);
        }
    }

    getValues() : void{
        for (let value of this.myMap.values()) {
            console.log(value);
        }
    }

    getEntries():any{
        for (let entry of this.myMap.entries()) {
            return [entry[0], entry[1]];
           
        }
        
    }

    forEach():void{
        this.myMap.forEach((value, key) => {
            console.log("Key : ["+key+"] Value : [", value+"]");
        });
    }
}
class SetClass<T>{
     mySet = new Set<T>();
    
    add(ele :T):void{
        this.mySet.add(ele);
    }

    delete(ele : T):boolean{
        if(this.mySet.has(ele)) {
            this.mySet.delete(ele);
            return true;
        }
        return false;
    }

    has(ele : T):boolean{
        if(this.mySet.has(ele)) return true;
        return false;
    }

    size():number{
        return this.mySet.size;
    }

    clear():void{
        this.mySet.clear();
    }

    print(){
        for (let currentNumber of this.mySet) {
           
            console.log(currentNumber);     
        }
    }

}

let newset = new SetClass();
newset.add(10);
newset.add("arif");
newset.add(false);
newset.add(7);
newset.print();
console.log(newset.delete(7));
newset.print();
console.log("size"+newset.size());

console.log("--------------------------------");

let newmap = new MapClass();
newmap.set(7,"ronaldo");
newmap.set(10,"messi");
newmap.set(11,"nymer");
console.log("Keys : "+newmap.getEntries());
newmap.forEach();
console.log("size:"+newmap.size());
console.log("key is there or not :"+newmap.has(7));
console.log( "Delete value= " +newmap.delete(11) ); 
console.log("size:"+newmap.size()); 



