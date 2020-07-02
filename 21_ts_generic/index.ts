function genericGetter<T>(data: T): T {
    return data;
}
// or

let newGetter: <T>(d: T) => T = genericGetter;


console.log(newGetter<string>('text').length);
//console.log(getter(10).length);
console.log(newGetter<number>(50));

let array1: number[] = [1, 2, 3];
let array2: Array<number> = [1, 2, 3];



class Task<T extends number> {
    constructor(private a: T,private b: T) {}

    public getResult(): number {
        return  +this.a  * Number(this.b);
    }
}

let m = new Task<number>(10, 5);
console.log(m.getResult());

let m2 = new Task(5, 7);
console.log(m2.getResult());