function getLength(v) {
    console.log("length = ", v.length);
}
var user = {
    length: 5
};
var user2 = {
    length: 9,
    age: 78
};
getLength([1, 2, 3, 4, 5, 6, 7]);
getLength(user);
getLength(user2);
function getLength2(v) {
    v.logInfo("test info");
}
var user3 = {
    length: 9,
    age: 78,
    logInfo: function (info) {
        console.log("method = " + this.age + " " + info + " ");
    }
};
getLength2(user3);
var Admin = /** @class */ (function () {
    function Admin() {
        this.length = 99;
        this.age = 11;
        // new param
        this.name = "Name";
        this.lastName = "LastName";
    }
    Admin.prototype.logInfo = function (info) {
        console.log("method = " + this.age + " " + info + " ");
    };
    return Admin;
}());
