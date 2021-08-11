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

// console.log('outside myLocalScope', myVar)

// 2021/08/04 session FCC exercise 46 - 50th exercise complete.

// Global vs local scope in functions

var outerWear = "T-Shirt";

function myOutfit() {

    var outerwear = "sweater";

  return outerWear;
}

myOutfit();

// Return a value from a function with return type

function timesFive(num) {
return num * 5
}
// var answer = timesfive(5)

// Understand undefined value returned from a function

var sum = 0;

function addThree() {
  sum = sum * 5;
}

function addFive() {
    sum = sum + 5;
}

addThree();
addFive();

// Assignment with a returned value

var processed = 0;

function processArg(num) {
return (num + 3) / 5;
}

processed = processArg(7)

console.log(processed)

// Stand in line

function nextInLine(arr, item) {
   
    arr.push(item);
    return arr.shift();
    
  }

  console.log(nextInLine([1, 2, 3, 4, 5], 6));

  // Completed 55 exercises of FCC