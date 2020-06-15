let sum = (x: number, y:number) =>
    x + y;

let square = (z:number) =>
    z * z;   
    
let test = () =>
    console.log('s test')    

let sum2 = (a:number, b:number) => {
    let result = a + b;
    return result;
}

let user = () =>
    ({name:'user name'});


(()=> 
    console.log('IIFI')
)();    
    

console.log(sum(12, 13));
console.log(square(5));
test();
console.log(sum2(5,67));
console.log(user());

let obj = {
    name: 'QWERRTY',

    getName: function() {
        let self = this;
        setTimeout(function() {
            console.log(`Name ${self.name}`);
        }, 2000);
    }
}

let obj2 = {
    name: 'QWERRTY',

    getName: function() {
        setTimeout(() => {
            console.log(`Name ${this.name}`);
        }, 2000);
    }
}

obj.getName();
obj2.getName();