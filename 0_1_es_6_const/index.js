var AR = 44.44;
console.log(AR);
var TESTOBG = {
    PROP1: 22.44
};
// It is possible to change the internal variables of an array, object etc.
TESTOBG.PROP1 = 33.33;
console.log(TESTOBG.PROP1);
var arr = [1, 2, 3];
arr[0] = 101;
console.log(arr[0]);
