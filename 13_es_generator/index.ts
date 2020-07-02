function* gen() {
    yield 11;
    yield 22;
    yield 33;

}

let iter = gen();
console.log(typeof iter);
console.log(iter);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log('____');


function* gen2() {
    yield 1;
    yield* gen3();
    yield 4;
}

function* gen3() {
    yield 2;
    yield 3;
}

let iter2 = gen2();

console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());

console.log('____');

function* gen5() {
    yield* [1,2,3];
}

let iter5 = gen5();

console.log(iter5.next());
console.log(iter5.next());
console.log(iter5.next());
console.log(iter5.next());

console.log('____');

function* getRange(start = 0, end = 100, step = 10) {
    while (start < end) {
        yield start;
        start += step;
    }
}

for (let n of getRange(10, 50)) {
    console.log(n);
}

console.log('____');

let fib = {
    [Symbol.iterator]() {
        let pre = 0, cur =1;
        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return {value: cur, done: false}
            }
        }
    }
};

for (let n of fib) {
    if (n > 1500) break;
    console.log(n);
}

console.log('____');

let fib2 = {
    *[Symbol.iterator]() {
        let pre = 0, cur =1;
        for(;;) {
            [pre, cur] = [cur, pre + cur];
            yield cur;
        }
    }
};

for (let n of fib2) {
    if (n > 500) break;
    console.log(n);
}