type User = {name: string, sname: string};

let user: User = {
    name: "Billy",
    sname: "Bonth"
}

function logUser(user: User): void {
    console.log(user.name + ' ' + user.sname);
}

logUser(user);

let variable: any;
variable = 1;
variable = '';

let variable2;
variable2 = 2;
variable2 = '';