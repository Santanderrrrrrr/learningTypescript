"use strict";
let somethingElse = "something else";
let id = 6;
let company = 'Traversy Media';
let isPublished = true;
let x = 'hello';
let age;
age = 6;
let ids;
let arr;
let person = [1, "Santi", true];
let employee = [[1, "Santi"], [2, " Bambi"], [3, "Young G"]];
let newID = 22;
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
const user = {
    id: 1,
    name: 'Santi'
};
let johnDoe = {
    id: 23456,
    name: 'John Doe'
};
let cid = 1;
let customerId = cid;
customerId = cid;
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(` ${message}`);
}
log('We up, city boys!');
let anotherUser = {
    id: 1,
    name: 'Another Guy'
};
const add = (x, y) => {
    return x + y;
};
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        console.log(`${this.name} of id: ${this.id} has been registered`);
    }
}
class SecondPerson {
    constructor(name) {
        this.id = id;
        this.name = name;
    }
    register(randomNum) {
        console.log(`registration of person ${this.name} will be done after ${randomNum} time`);
        return this.id * randomNum;
    }
}
const Santi = new SecondPerson('Santi');
Santi.register(88);
function getArray(arr) {
    return new Array().concat(arr);
}
function genericGetArray(arr) {
    return new Array().concat(arr);
}
const theGottenArray = getArray([1, 2, 3, 4, 5]);
const theSecondGottenArray = getArray(['Leon', 'Bambi', 'Glory']);
console.log(theGottenArray, theSecondGottenArray);
const theGenericGetArray = genericGetArray([1, 2, 3, 4, 5, 6]);
const theSecondGenericGetArray = genericGetArray(['Bambz', 'Santi', 'Tash-Tash']);
console.log(theGenericGetArray, theSecondGenericGetArray);
