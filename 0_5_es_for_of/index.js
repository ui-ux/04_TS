var as = ['Wer 1', 'Wer 2', 'Wer 3', 'Wer 4'];
for (var a in as) {
    console.log(a);
}
for (var a in as) {
    console.log(as[a]);
}
as.forEach(function (element) { return console.log(element); });
console.log(as);
for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
    var s = as_1[_i];
    console.log(s);
}
console.log(as);
