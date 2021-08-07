// Enum
var Job;
(function (Job) {
    Job[Job["Frontend"] = 0] = "Frontend";
    Job[Job["Backend"] = 1] = "Backend";
    Job[Job["Designer"] = 33] = "Designer";
    Job[Job["Designer2"] = 34] = "Designer2";
})(Job || (Job = {}));
var jobB = Job.Backend;
console.log("Job.Backend = " + jobB);
var jobD = Job.Designer;
console.log("Job.Backend = " + jobD);
var jobD2 = Job.Designer2;
console.log("Job.Backend = " + jobD2);
for (var a in Job) {
    console.log(a);
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
            console.log(op + " default");
    }
}
someFunc(0);
someFunc(1);
someFunc(2);
// never
function throwNewError(err) {
    throw new Error(err);
}
// null
var newVar;
newVar = null;
var myNumber = 20;
myNumber = null;
