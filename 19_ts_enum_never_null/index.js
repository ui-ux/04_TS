var Job;
(function (Job) {
    Job[Job["Frontend"] = 0] = "Frontend";
    Job[Job["Backend"] = 1] = "Backend";
    Job[Job["Designer"] = 2] = "Designer";
})(Job || (Job = {}));
var job = Job.Backend;
console.log(job);
for (var a in Job) {
    console.log(a);
}
var object1 = {
    a: 'somestring',
    b: 42,
    c: false
};
console.log(Object.values(object1));
for (var b in object1) {
    console.log(b);
}
for (var b in object1) {
    console.log(object1[b]);
}
function someFunc(op) {
    switch (op) {
        case 0 /* Up */:
            console.log(0 /* Up */);
            break;
        case 1 /* Down */:
            console.log(1 /* Down */);
            break;
        default:
            console.log(op + ' default');
    }
}
someFunc(0);
someFunc(1);
someFunc(2);
// never
function throwNewError(err) {
    throw new Error(err);
}
var newVar;
newVar = null;
var mynNumber = 20;
mynNumber = null;
