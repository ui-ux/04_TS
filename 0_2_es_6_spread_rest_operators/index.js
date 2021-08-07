var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// rest
function add2(x) {
    var y = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        y[_i - 1] = arguments[_i];
    }
    console.log(x, y);
}
add2("199", "2", "3", "33", "test");
console.log("________________________________");
// spread
var arr_1 = ["199", "2", "3"];
var arr_2 = ["3", "4", "5"];
var arr_3 = __spreadArray(__spreadArray(__spreadArray([], arr_1), [0]), arr_2);
console.log(arr_3);
console.log("________________________________");
//
function add(x, y, z) {
    console.log(x + y + z);
}
var numbers = [4, 5, 7];
add.apply(void 0, numbers);
