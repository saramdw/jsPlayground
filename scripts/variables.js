// Free Code Camp solutions by saramdw

/* A multi line comment 
   can't be read within the comment lines */

// First variable exercise

    var myname;

// Second variable exercise

    var a;

    a = 7;

// Third variable exercise

    var b;  // Works with let as well
    b = a;

    console.log(a)

    // Initialising variables with assignment operator

    var a = 9;

    // Uninitialised variables

    var a = 5;
    var b = 10;
    var c = "I am a";

    // Understanding Case Sensitivity in variables

    var StudlyCapVar;
    var properCamelCase;
    var TitleCaseOverride;
    
    studlyCapVar = 10;
    properCamelCase = "A string";
    titleCaseOver = 9000;

    console.log(studlyCapVar)
    console.log(properCamelCase)
    console.log(titleCaseOver)

    // Add two numbers with JavaScript

    var sum = 10 + 0;

    sum = 10 + 10;

    console.log(sum)

    // Subtracting with JS

    var difference = 45 - 0;

    difference - 33;

    console.log(difference)

    var ten = 20 - 10;

    var quotient = 66 / 33;

    // Increment with JS

    var myVar = 87;

    myVar++;

    console.log(myVar)

     // Decrement with JS

        var myVar = 11

        myVar--;
        console.log(myVar)

        // Decimal numbers Javascript
        
        var ourDecimal = 5.7;

        var myDecimal = 5.5;

        // Multiply decimals with JS 
        
        var product = 2.0 * 0.0;

        product = 2.0 * 2.5;

        console.log(product)

        // Divide decimals JavaScript

        var divide = 4.4 / 2.0;

        console.log(divide)

        // FInding the remainder 

        var remainder;

        remainder = 11 % 3;

        console.log(remainder)

        // Compound Assignment with Augmented Addition
        
        var a = 3;
        var b = 17;
        var c = 10;

        a += 12;
        b += 9;
        c += 7;

        // Compound Assignment with Augmented Subtractions 

        var a = 5;
        var b = 4;
        var c = 6;

        a -= 3;
        b -= 2;
        c -= 4;

        // 2021/07/28 session 19 FCC exercises in Basic Javascript completed

// Compuond Assignment with Augmented Multiplication

var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;

// Compuond Assignment with Augmented Division

var a = 40;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;

// Declare string variables

var myFirstName = 'Sara'
var myLastName = 'Win'

// Escaping Literal Quotes in Strings

var myStr = "I am a \"double quoted\" string inside\"double quotes.";

// Escape sequences in a strings

var myStr = 'FirstLine\n\tSecondLine\nThirdLine';

console.log(myStr)

// Concatenating strings with the plus operator

var myStr = "This is the start. " + "This is the end.";

console.log(myStr);

// Concatenating strings with the plus equals operator

var myStr = "This is the first sentence.";

myStr += "This is the second sentence."

console.log(myStr);

// Concatenating strings with variables

var myName = "Sara ";
var myStr = "My name is " + myName + "and I am well!";

console.log(myStr)

// Appending variables to strings

var someAdjective = "long.";
var myStr = "Learning to code is "

myStr += someAdjective 

console.log(myStr)

// Find the length of a string 

var lastNameLength = 0;
var lastName = "Lovelace"

console.log("lastName".length)

lastNameLength = lastName.length;

console.log(lastNameLength)

// Use bracket notation to find the first character in a string that

var firstLetterOfLastName = "";
var LastName = "Lovelace";

firstLetterofLastName = lastName[0];

console.log(firstLetterofLastName)

// Understand string immutability 

var myStr = "Jello World";

myStr[0] = "H"; // Does not work.

myStr = "Hello World." // Works.

console.log(myStr)

// Use bracket notation to find the last letter in a name.

var lastLetterOfLastName = 0;
var lastName = "Lovelace";

// lastLetterOfLastName = lastName.length[-1] // Does not work try to figure out why.

lastLetterOfLastName = lastName[lastName.length-1]

console.log(lastLetterOfLastName)

// Use bracket notation to find the nth to last letter in a string

var lastName = "Lovelace";

var secondToLastLetterOfLastName = lastName[lastName.length -2]

console.log(secondToLastLetterOfLastName)

//  Word Blanks

var myNoun = "dog"
var myAdjective = "big"
var myVerb = "ran"
var myAdverb = "quickly"

var wordBlanks = "I have a " + myNoun + " who is " + myAdjective + " and " + myVerb + " " + myAdverb + ".";

console.log(wordBlanks)

// 2021/09/01 session 36 FCC exercises in Basic Javascript completed end of variables and strings
