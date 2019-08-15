class Task {
    title: string;
    
    constructor() {
        this.title = 'name title';
        console.log('add task')
    }
    static greetM() {
        return "default title ___1___";
    }
}

let task = new Task();

console.log(typeof Task);
console.log(task instanceof Task);
console.log(task.title);




class Greeter {
    greeting: string;
    static count: number;
    constructor(message: string = Greeter.greetM()) {
        this.greeting = message;
        Greeter.count += 1;
    }
    greet() {
        return "Hello, " + this.greeting;
    }

    static greetM() {
        return "default title ___1___";
    }
}
Greeter.count = 0;


let greeter = new Greeter("world");

console.log(greeter.greeting);
console.log(greeter.greet());

let greeter2 = new Greeter("Billy");


console.log(greeter2.greeting);
console.log(greeter2.greet());

console.log(Greeter.count);

let greeter3 = new Greeter();
console.log(greeter3.greeting);

