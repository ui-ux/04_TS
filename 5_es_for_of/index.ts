let arr = ["Wer 1", "Wer 2", "Wer 3", "Wer 4"];

for (let i = 0; i < arr.length; i++) {
  console.log(i + " = " + arr[i]);
}

// in
for (let a in arr) {
  console.log(a);
}

for (let a in arr) {
  console.log(arr[a]);
}

arr.forEach((element) => console.log(element));

// of
for (let s of arr) {
  console.log(s);
}

for (let s of "string") {
  console.log(s);
}
