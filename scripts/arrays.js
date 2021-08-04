// FCC Arrays from 37th module of Basic JavaScript 

// Store multiple values in one Variable using JavaScrip Arrays

var myArray = ["str", 22];

// Nest one array within another array

var myArray = [["Bulls"], ["White sox"]];

// Access Array Data with Indexes

var myArray = [50,60,70];

console.log(myArray[0])

var myData = myArray[0]
console.log(myData)

// Motify Array Data with Indexes

var myArray = [18,64,99];

myArray[0] = 48;

console.log(myArray)

// Access Multi-Dimesional Arrays with Indexes

var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

var myData = myArray[2][2]

console.log(myData)

// Manipulate Arrays with push()

var myArray = 

myArray.push(["dog", 3])
[["John", 23], ["cat", 2]];
console.log(myArray)

// Manipulate Arrays with pop()

var myArray = [["John", 23], ["cat", 2]];

var removedFromMyArray = myArray.pop();

console.log(removedFromMyArray)

console.log(myArray)

// Manipulate Arrays with shift()

var myArray = [["John", 23], ["dog", 3]];

var removedFromMyArray = myArray.shift();

console.log(myArray)

console.log(removedFromMyArray)

// Manipulate Arrays with unshift()

var myArray = [["John", 23], ["dog", 3]];

myArray.unshift(["Paul", 35])

console.log(myArray)

// Shopping List

var myList = [["Chocolate", 15], ["Cheese", 1], ["Carrots", 5], ["Corn", 2], ["Chicken nuggies", 40]];

console.log(myList)

// End of arrays up to 47th of FCC
