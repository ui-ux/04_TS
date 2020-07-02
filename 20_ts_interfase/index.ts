interface ILength {
    length: number;
    age?: number;
}

function getLength(v: ILength): void {
    console.log('length = ', v.length );
}

let user: ILength = {
    length: 5
}

let user2: ILength  = {
    length: 5,
    age: 78
}

getLength([1,2,3]);
getLength(user);
getLength(user2);





interface IUser {
    length: number;
    age?: number;
    logInfo(info: string): void;
}

function getLength2(v: IUser) {
    v.logInfo('test info');
}

let user3: IUser = {
    length: 9,
    age: 78,
    logInfo(info) {
        console.log(`method = ${this.age} ${info} `);
    }
}

getLength2(user3);

class Admin implements IUser {
    length:number = 99;
    age:number = 11;
    logInfo(info: string) {
        console.log(`method = ${this.age} ${info} `);
    }

}
