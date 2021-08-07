// Enum
enum Job {
  Frontend,
  Backend,
  Designer = 33,
  Designer2,
}

const jobB: Job = Job.Backend;
console.log("Job.Backend = " + jobB);

const jobD: Job = Job.Designer;
console.log("Job.Backend = " + jobD);

const jobD2: Job = Job.Designer2;
console.log("Job.Backend = " + jobD2);

for (let a in Job) {
  console.log(a);
}

const enum Directions {
  Up,
  Down,
}

function someFunc(op: Directions) {
  switch (op) {
    case Directions.Up:
      console.log(Directions.Up);
      break;
    case Directions.Down:
      console.log(Directions.Down);
      break;
    default:
      console.log(op + " default");
  }
}
someFunc(0);
someFunc(1);
someFunc(2);

// never
function throwNewError(err: string): never {
  throw new Error(err);
}

// null
let newVar;
newVar = null;

let myNumber: number | null = 20;
myNumber = null;
