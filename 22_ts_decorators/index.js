"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(constrFn) {
    console.log(constrFn);
}
function shouldLog(flag) {
    return flag ? log : null;
}
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
        console.log('text 1');
    }
    User = __decorate([
        shouldLog(true)
    ], User);
    return User;
}());
/////////////////
function addShow(constrFn) {
    constrFn.prototype.showTeg = function () {
        var pre = document.createElement('pre');
        pre.innerHTML = JSON.stringify(this);
        document.body.appendChild(pre);
    };
}
var User2 = /** @class */ (function () {
    function User2(name, age) {
        this.name = name;
        this.age = age;
        console.log('text 1');
    }
    User2 = __decorate([
        addShow
    ], User2);
    return User2;
}());
var user2 = new User2('Billy', 99);
console.log(user2);
user2.showTeg();
