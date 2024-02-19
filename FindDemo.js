var arr1 = [5, 12, 8, 130, 44];
var found1 = arr1.find(function (element) { return element > 10; });
console.log(found1);
var inventory = [{ name: 'messi', number: 10 }, { name: 'ronaldo', number: 7 }, { name: 'nymer', number: 11 }];
var found2 = inventory.find(function (_a) {
    var name = _a.name;
    return name === 'messi';
});
console.log(found2);
