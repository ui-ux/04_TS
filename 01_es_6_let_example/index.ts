if (true) {
  let a = "es6";
  console.log(a);
}

// console.log(a);

let buttons = document.querySelectorAll("button");

for (let a = 0; a < buttons.length; a++) {
  let button = buttons[a];
  button.innerText = String(a);
  button.onclick = function () {
    console.log(a);
  };
}

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(`var i ${i}`);
  }, 2000);
}

for (let a = 0; a < 5; a++) {
  setTimeout(function () {
    console.log(`let a ${a}`);
  }, 2000);
}

console.log("1111111111");
