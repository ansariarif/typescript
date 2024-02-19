class MapClass {
    constructor() {
        this.myMap = new Map();
    }
    set(key, value) {
        this.myMap.set(key, value);
    }
    get(key) {
        return this.myMap.get(key);
    }
    has(key) {
        if (this.myMap.has(key))
            return true;
        else
            return false;
    }
    delete(key) {
        if (this.myMap.has(key)) {
            this.myMap.delete(key);
            return true;
        }
        else
            return false;
    }
    size() {
        return this.myMap.size;
    }
    clear() {
        this.myMap.clear();
    }
    getKeys() {
        for (let key of this.myMap.keys()) {
            console.log(key);
        }
    }
    getValues() {
        for (let value of this.myMap.values()) {
            console.log(value);
        }
    }
    getEntries() {
        for (let entry of this.myMap.entries()) {
            return [entry[0], entry[1]];
        }
    }
    forEach() {
        this.myMap.forEach((value, key) => {
            console.log("Key : [" + key + "] Value : [", value + "]");
        });
    }
}
class SetClass {
    constructor() {
        this.mySet = new Set();
    }
    add(ele) {
        this.mySet.add(ele);
    }
    delete(ele) {
        if (this.mySet.has(ele)) {
            this.mySet.delete(ele);
            return true;
        }
        return false;
    }
    has(ele) {
        if (this.mySet.has(ele))
            return true;
        return false;
    }
    size() {
        return this.mySet.size;
    }
    clear() {
        this.mySet.clear();
    }
    print() {
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
console.log("size" + newset.size());
console.log("--------------------------------");
let newmap = new MapClass();
newmap.set(7, "ronaldo");
newmap.set(10, "messi");
newmap.set(11, "nymer");
console.log("Keys : " + newmap.getEntries());
newmap.forEach();
console.log("size:" + newmap.size());
console.log("key is there or not :" + newmap.has(7));
console.log("Delete value= " + newmap.delete(11));
console.log("size:" + newmap.size());
