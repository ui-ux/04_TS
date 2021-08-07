function log(constrFn: Function) {
  console.log(constrFn);
}

function shouldLog(flag: boolean): any {
  return flag ? log : null;
}

@shouldLog(true)
class User {
  constructor(public name: string, public age: number) {
    console.log("text 1");
  }
}

//=========================================

function addShow(constrFn: Function) {
  constrFn.prototype.showTeg = function () {
    const pre = document.createElement("pre");
    pre.innerHTML = JSON.stringify(this);
    document.body.appendChild(pre);
  };
}

@addShow
class User2 {
  constructor(public name: string, public age: number) {
    console.log("text 2222222222");
  }
}

let user2 = new User2("Billy", 99);
console.log(user2);
(<any>user2).showTeg();
