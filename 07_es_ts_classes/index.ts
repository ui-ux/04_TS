class Task {
    public title: string;
    title2: string;
    private title3: string;
    protected title4: string;

    result: boolean; 
    
    constructor(title2:string, result:boolean, title3:string, title4:string) {
        this.title = 'title 1'; 
        this.title2 = title2;
        this.title3 = title3;
        this.title4 = title4;
        this.result = result;
        console.log('base class task');
    }
    public mTest() {
        console.log("base func");
        console.log(this.title);
    }
}

console.log(`typeof class Task - ${typeof Task}`);

let task = new Task('list title 2', true, 'test private', 'protected test');
console.log(typeof task);
console.log(`task instanceof Task - ${task instanceof Task}`);

console.log(task.title);
console.log(task.title2);
//console.log(task.title3);
//console.log(task.title4);
task.mTest();




class Greeter {
    static count: number;
    message: any;
    constructor(message: string = Greeter.testMethod()) {
        Greeter.count += 3;
        this.message = message;
    }

    static testMethod() {
         return "test Method";
     }

}
Greeter.count = 1;

let greeter = new Greeter();
console.log(Greeter.count);
console.log(greeter.message);



class Greeter2 {

    _done: boolean;

    constructor() {
        this._done = false;
    }

    get done(): any {
        return this._done === true ? 'is true string' : 'is false string'
    }

    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;
        }
        else {
            console.error(' _error_');
        }
    }

    doneM() {
        this._done = true;
    }

}

let greeter2 = new Greeter2();

console.log(greeter2.done);
greeter2.doneM();
console.log(greeter2.done);

