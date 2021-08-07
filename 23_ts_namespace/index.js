var Util;
(function (Util) {
    function isEmpty(d) {
        return !d;
    }
    Util.isEmpty = isEmpty;
    console.log(isEmpty(""));
    console.log(isEmpty("text"));
    function isUndefined(d) {
        return typeof d === "undefined";
    }
    Util.isUndefined = isUndefined;
    console.log(isUndefined(23));
    console.log(isUndefined(undefined));
    console.log(isUndefined(null));
    Util.PI = Math.PI;
    Util.EXP = Math.E;
})(Util || (Util = {}));
var EXP = "text Math.E";
console.log(Util.isEmpty(""));
console.log(Util.isUndefined("text"));
console.log(Util.PI);
console.log(EXP);
console.log(Util.EXP);
