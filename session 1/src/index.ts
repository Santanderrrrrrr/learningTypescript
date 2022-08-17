



let somethingElse: string = "something else"

//basic ts types:

let id: number = 6                      //number type

let company: string = 'Traversy Media'  //string type

let isPublished: boolean = true         //boolean type

let x: any = 'hello' //The any type allows you to specify the type as "any" allowing you to pass whatever type to the variable
                        //This sorta beats the purpose of Typescript

let age: number      //This is how to declare without initializing the value of the variable                        
age = 6              //you can then, at a later point, initialize the variable

let ids: number[]   //this is how to declare an array that only contains numbers
let arr: any[]      //this is for when you don't know the types that are going into the array

//Tuples are assorted arrays only with the types known before declaration
let person: [number, string, boolean] = [1, "Santi", true]      //When you set a tuple, the order of types has to be consistent with the declaration.

//Tuple Array:
let employee: [number, string][] = [[1, "Santi"], [2, " Bambi"], [3, "Young G"]]

//union
let newID: string | number = 22            //This is for when the variable is expected to contain more than one type like
                                        //for instance when ID's come as either numbers or strings

//Enumerated types/ enum
enum Direction1{
    Up,
    Down,
    Left,
    Right
}

console.log(Direction1.Up)

//Objects
const user: {
    id: number,
    name: string
}= {
    id: 1,
    name:'Santi'
}                                       //Keeping objects clean is a matter of defining the object type instead of defining the types of the keys on declaration
                                        //This is done as in the following example:
type User = {
    id: number
    name: string
}

let johnDoe: User = {
    id: 23456,
    name: 'John Doe'
}

//type assertion is excplicitly telling a compiler that a type is to be used as a different type.
//e.g:

let cid: any = 1
let customerId = <number>cid
//another way to do it is:

customerId = cid as number


//functions

function addNums(x: number, y: number): number{
    return x+y
}                                                //The types passed in have to be of a specified as well as the function return value

//when a return value isn't expected:
function logger(message: string | number):void {
    console.log(` ${message}`)
}

logger(addNums(4, 8))  

//interfaces
//These are custom types or specific structures to functions or objects that can be used in a similar manner to how we made the 'User' type

interface NextUser {
    id: number
    name: string
}                           //note that when creating types, we place equal sign assigner whereas for interfaces, that is not necessary.
                            //Interfaces cannot be used with primitives or with unions meaning the following cannot work:
                                //interface numericOrWrittenNumber = number | string
                            //Whereas the following can work:
                                //type numericOrWrittenNumber = number | string
                            //Consider the following
interface yetAnotherUser {
    id: number
    name: string
    age?: number
}                            
                            //The above would result in the creation of an interface with 3 fields that need to be filled
                            //If however the variable being declared using the interface is not in need of 3 fields and you'd like to make the third field
                            //optional, you could simply use a question mark to mark it as optional.


let anotherUser: yetAnotherUser = {
    id: 1,
    name: 'Another Guy'
}

//it is also possible to use interfaces with functions
//interfaces with functions:
interface MathFunc{
    (x: number, y:number): number
}

const add: MathFunc =(x, y) => {
    return x+y
}

const sub: MathFunc =(x,y)=>x-y

// classes

class Person{
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register(): void{
        console.log(`${this.name} of id: ${this.id} has been registered`)
    }
}                                                       //you have to declare the types of either of the properties being declared in the constructor

interface PersonalProperties{
    id: number
    name: string
    register(id: number): number
}

//it's possible to have classes implement interfaces as shown below:

class SecondPerson implements PersonalProperties{
    id: number
    name: string
    constructor(name: string){
        this.id = id
        this.name = name
    }

    register(randomNum: number){
        console.log(`registration of person ${this.name} will be done after ${randomNum} time`)
        return this.id*randomNum
    }
}

const Santi = new SecondPerson('Santi')
Santi.register(88)



//Generics
function getsArray(arr: any[]):any[]{
    return new Array().concat(arr)
}                                           //The above function takes an array of any type of item and returns an array

// generics are used in the future to specify the type of array the function will take as well as the type of the return type
function genericGetsArray<T>(arr: T[]): T[] {
    return new Array().concat(arr)
}

//so we can use getsArray to have number, any and string type arrays as return values:
const theGottenArray = getsArray([1,2,3,4,5])
const theSecondGottenArray = getsArray(['Leon', 'Bambi', 'Glory'])
console.log(theGottenArray, theSecondGottenArray)

//but upon specification of the array return type can we only use the genericgetsArray
const theGenericgetsArray = genericGetsArray<number>([1,2,3,4,5,6])
const theSecondGenericgetsArray = genericGetsArray<string>(['Bambz','Santi','Tash-Tash'])
console.log(theGenericgetsArray, theSecondGenericgetsArray)



