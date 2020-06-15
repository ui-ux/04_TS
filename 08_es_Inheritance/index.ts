class Task {
    title: string;
    done: boolean;

    constructor(title: any) {
        this.title = title;
        this.done = false;
        console.log("task 1");
    }

    complete() {
        this.done = true;
        console.log(`task 1 done ${this.title} `);
    }
}

class SubTask extends Task {
    parent: object;
    constructor(title: any, parent: object) {
        super(title);
        this.parent = parent;
        console.log("task 2")
    }
    complete() {
        super.complete();
        console.log(`task 2 done ${this.title} `);
    }
}

let task = new Task('prop 1');
let subtask = new SubTask('prop 2', task);
console.log(task);
console.log(subtask);

console.log(subtask instanceof SubTask);
console.log(subtask instanceof Task);


task.complete();
subtask.complete();
