function getLength(v) {
    console.log('length = ', v.length);
}
var user = {
    length: 5
};
var user2 = {
    length: 5,
    age: 78
};
getLength([1, 2, 3]);
getLength(user);
getLength(user2);
function getLength2(v) {
    v.logInfo('test info');
}
var user3 = {
    length: 9,
    age: 78,
    logInfo: function (info) {
        console.log("method = " + this.age + " " + info + " ");
    }
};
getLength2(user3);
