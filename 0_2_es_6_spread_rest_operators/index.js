var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var arr_1 = ['199', '2', '3'];
var arr_2 = ['3', '4', '5'];
var arr_3 = __spreadArrays(arr_1, [0], arr_2);
console.log(arr_3);
function add(x, y, z) {
    console.log(x + y + z);
}
var numbers = [4, 5, 7];
add.apply(void 0, numbers);
var x;
var y;
function add2(x) {
    var y = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        y[_i - 1] = arguments[_i];
    }
    console.log(x, y);
}
add2('199', '2', '3', '33', 'test');
