var Task = /** @class */ (function () {
    function Task(title2, result) {
        this.title = 'title 1';
        this.title2 = title2;
        this.result = result;
        console.log('base class task');
    }
    Task.prototype.mTest = function () {
        console.log("base func");
    };
    return Task;
}());
console.log("typeof class Task " + typeof Task);
var task = new Task('list title 2', true);
console.log(typeof task);
console.log("task instanceof Task - " + (task instanceof Task));
console.log(task.title);
console.log(task.title2);
task.mTest();
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        if (message === void 0) { message = Greeter.testMethod(); }
        Greeter.count += 3;
        this.message = message;
    }
    Greeter.testMethod = function () {
        return "testMethod";
    };
    return Greeter;
}());
Greeter.count = 1;
var greeter = new Greeter();
console.log(Greeter.count);
console.log(greeter.message);
var Greeter2 = /** @class */ (function () {
    function Greeter2() {
        this._done = false;
    }
    Object.defineProperty(Greeter2.prototype, "done", {
        get: function () {
            return this._done === true ? 'is true string' : 'is false string';
        },
        set: function (value) {
            if (value !== undefined && typeof value === 'boolean') {
                this._done = value;
            }
            else {
                console.error(' _error_');
            }
        },
        enumerable: true,
        configurable: true
    });
    Greeter2.prototype.doneM = function () {
        this._done = true;
    };
    return Greeter2;
}());
var greeter2 = new Greeter2();
console.log(greeter2.done);
greeter2.doneM();
console.log(greeter2.done);
