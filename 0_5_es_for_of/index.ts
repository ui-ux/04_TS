let as = ['Wer 1','Wer 2','Wer 3','Wer 4'];

for (let a in as) {
    console.log(a);
}

for (let a in as) {
    console.log(as[a]);
}

as.forEach(element => console.log(element));

console.log(as);

for (let s of as) {
    console.log(s);
}
console.log(as);