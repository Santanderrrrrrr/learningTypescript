"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randomValue = "Imma be saying hello a lot, bruv!";
// console.log(randomValue)
// console.log("Hey what's")
//objects
const Person = {
    name: 'Santi',
    age: 27,
};
var Role;
(function (Role) {
    Role[Role["Leader"] = 0] = "Leader";
    Role[Role["Follower"] = 1] = "Follower";
})(Role || (Role = {}));
const personTwo = {
    name: 'Santi',
    id: 1,
    gender: 'm',
    role: Role.Leader
};
// const timeline: number = 5
// function convertPlnToUsd(pln: number): number{
//     return pln/4
// }
// const lifeGoal: number = 600000000
// const currency: string = "dollars"
// console.log(`life goal is ${currency}: ${lifeGoal}`)
// const secondaryCurrency: string = "pln"
// const plannedIncomeTenYrs: number = 38300 
// console.log(`planned income per month in ${timeline} years is ${secondaryCurrency}: ${plannedIncomeTenYrs}`)
// const pity = convertPlnToUsd(plannedIncomeTenYrs)
// console.log(`planned income per month in dollars in ${timeline} years is ${pity}`)
// console.log(`which translates to an annual ${pity*12}`)
// the following is a demonstration of the type literal:
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2; //the "+" before the variables ensures that they are made into number types 
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
// this would allow you to do the following:
function combineWithTypeAlias(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2; //the "+" before the variables ensures that they are made into number types 
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
// function types are types that describe a function regarding the params and the return value of the function
// an example is below
// in javascript it would be as below:
const combineValues = () => {
    return "combined value";
};
//in typescript, however:
let combineTheValues;
//The following is a way in which you could make function callbacks:
let combineTheValuesWCallback = (n1, n2, cb) => {
    return 'Combinable';
};
// unknown
//the unknown type can be assigned any type of value but a variable of type unknown cannot
//be assigned to a variable of another type apart from 'any'.
let userInput;
let anyUserInput;
anyUserInput = userInput;
//Never
//This is another type that functions can return
//when an error is thrown, nothing is ever returned.
//example:
function generateError(message, code) {
    throw { message, code };
}
//# sourceMappingURL=index.js.map