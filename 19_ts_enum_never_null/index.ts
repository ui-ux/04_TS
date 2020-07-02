enum Job {
    Frontend,
    Backend,
    Designer
}

const job: Job = Job.Backend;
console.log(job);

for (let a in Job) {
    console.log(a);
}

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.values(object1));

for (let b in object1) {
    console.log(b);
}

for (let b in object1) {
    console.log(object1[b]);
}


const enum Directions {
    Up,
    Down
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
        console.log(op + ' default');
    }
}
someFunc(0);
someFunc(1);
someFunc(2);



  // never

  function throwNewError(err: string): never {
    throw new Error(err)
  }

  let newVar;
  newVar = null;

  let mynNumber: number | null = 20;
  mynNumber = null;