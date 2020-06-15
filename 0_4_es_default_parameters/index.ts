// default parameters
let greeting;
let sname;

function greet(greeting = 'Hello', sname = 'Person_name') {
    console.log(`${greeting} ${sname}`)
}

greet('Hay', 'Poll');
greet();

// rest parameters
// ES5
// function sum(): void {
//     console.log(arguments);
//     console.log(typeof arguments);
//     console.log(arguments instanceof Array);

//     var sum: number = 0;

//     Array.prototype.forEach.call(arguments, function(value) {
//         sum += value;
//     })
//     console.log(sum);

// }

// sum(1,2,3,4);



function sumN(...values:any[]) {
    console.log(arguments);
    console.log(typeof arguments);
    console.log(arguments instanceof Array);

    let sum: number = 0;

    values.forEach(function (value) {
        sum += value;
    });
    console.log(sum);
    console.log(values);
    
}
sumN(11, 12 , 13);


function sumNV(...values:number[]) {
    let sum: number = 0;
    sum = values.reduce(function(previousValue, currentValue){
        return previousValue + currentValue
    });
    console.log(`sum = ${sum}`);
    console.log(sum);
    console.log(values);
    
}
sumNV(11,22,11);


