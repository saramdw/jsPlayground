// FCC function solutions from 47th exercise

// Write resuable JavaScript with Functions

function reusableFunction() {
    console.log("Hi World.")
}

reusableFunction()

// Passing values to functions with arguments will

function functionWithArgs(param1, param2) {
console.log(param1 + param2)
}

functionWithArgs(7, 9)

// Global Scope and functions

var myGlobal = 10;

console.log(myGlobal)

function fun1() {
oopsGlobal = 5;
console.log(oopsGlobal)
}

function fun2() {
    var output = "";
    if(typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
        console.log(oopsGlobal)
    }
}

// Local Scope and functions

function myLocalScope() {
    var myVar = "foo"
    console.log('inside my local scope', myVar)
}

myLocalScope();

console.log('outside myLocalScope', myVar)

// 2021/08/04 session FCC exercise 46 - 50th exercise complete.

