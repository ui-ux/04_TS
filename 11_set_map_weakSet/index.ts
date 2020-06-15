'use strict';

let set = new Set();
set.add('test1');
set.add('test2');
console.log(set);
console.log(set.size);

let set2 = new Set([1,2,3,4,4,5,5,7,0,0,1]);
console.log(set2);
console.log(set2.size);

let set3 = new Set().add(2).add(1).add(3);
console.log(set3);
console.log(set3.size);
console.log(set3.has(1));
console.log(set3.delete(3));
console.log(set3);
console.log(set3.clear(3));
console.log(set3);

let set4 = new WeakSet();
let key1 = {};
set4.add(key1);
console.log(set4.size);
key1 = null;
console.log(set4.size);

let set5 = new Set();
let key2 = {};
set4.add(key2);
console.log(set5.size);
key2 = null;
console.log(set5.size);

let map = new Map();
map.set('name', 'Bill');
map.set('sname', 'Bonth');

console.log(map);
console.log(map.size);
console.log(map.get('name'));

let obj1 = {};
let obj2 = {};
map.set(obj1, 'Pyu');
map.set(obj2, 'Polson');
console.log(map);
console.log(map.size);
console.log(map.has(obj2));
console.log(map.delete('sname'));
console.log(map.size);

let mapArr = new Map([
    ['name2', 'Bill2'],
    ['sname2', 'Bonth2']
]);
console.log(mapArr);

let vals = mapArr.values();
let keyN = mapArr.keys();
let ent = mapArr.entries();
console.log(vals);
console.log(keyN);
console.log(ent);

