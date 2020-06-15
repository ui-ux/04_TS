if (true) {
    var a = "es6";
    console.log(a);
}
// console.log(a);
var buttons = document.querySelectorAll('button');
var _loop_1 = function (a) {
    var button = buttons[a];
    button.innerText = String(a);
    button.onclick = function () {
        console.log(a);
    };
};
for (var a = 0; a < buttons.length; a++) {
    _loop_1(a);
}
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log("var i " + i);
    }, 2000);
}
var _loop_2 = function (a) {
    setTimeout(function () {
        console.log("let a " + a);
    }, 2000);
};
for (var a = 0; a < 5; a++) {
    _loop_2(a);
}
