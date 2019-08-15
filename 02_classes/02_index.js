var Task = /** @class */ (function () {
    function Task() {
        this.title = 'name title';
        console.log('add task');
    }
    Task.greetM = function () {
        return "default title ___1___";
    };
    return Task;
}());
var task = new Task();
console.log(typeof Task);
console.log(task instanceof Task);
console.log(task.title);
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        if (message === void 0) { message = Greeter.greetM(); }
        this.greeting = message;
        Greeter.count += 1;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeter.greetM = function () {
        return "default title ___1___";
    };
    return Greeter;
}());
Greeter.count = 0;
var greeter = new Greeter("world");
console.log(greeter.greeting);
console.log(greeter.greet());
var greeter2 = new Greeter("Billy");
console.log(greeter2.greeting);
console.log(greeter2.greet());
console.log(Greeter.count);
var greeter3 = new Greeter();
console.log(greeter3.greeting);
