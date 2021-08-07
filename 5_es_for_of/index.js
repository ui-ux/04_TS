var arr = ["Wer 1", "Wer 2", "Wer 3", "Wer 4"];
for (var i = 0; i < arr.length; i++) {
    console.log(i + " = " + arr[i]);
}
// in
for (var a in arr) {
    console.log(a);
}
for (var a in arr) {
    console.log(arr[a]);
}
arr.forEach(function (element) { return console.log(element); });
// of
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var s = arr_1[_i];
    console.log(s);
}
for (var _a = 0, _b = "string"; _a < _b.length; _a++) {
    var s = _b[_a];
    console.log(s);
}
