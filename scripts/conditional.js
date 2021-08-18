// Boolean and if statement conditions 

// FCC solutions

function welcomeToBooleans() {


    return true;

}

// Use conditional Logic with if statements to

function trueOrFalse(wasThatTrue) {

    if(wasThatTrue) {
        return "Yes that was true"
    }
        return "No that was false"
}

// Comparison with the equality operator

function testEqual(val) {
    if (val == 12) { 
    return "Equal";
    }
    return "Not Equal";
}

testEqual(10);

// Comparison with the strict equality operator

function testStrict(val) {
    if (val === 7) { 
    return "Equal";
    }
    return "Not Equal";
}

testStrict(10);

// Practice comparing different values

function compareEquality(a, b) {
    if (a === b) { 
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");

// Comparison with the Inequality operator

function testNotEqual(val) {
    if (val != 99) { 
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

// Comparison with the strict inequality operator

function testStrictNotEqual(val) {
    if (val !== 17) { 
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);

// Comparison with the Greater than operator

function testGreaterThan(val) {
    if (val > 100) {  
        return "Over 100";
    }

    if (val > 10) {  
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);

// Comparison with the greater than or equal to operator

function testGreaterOrEqual(val) {
    if (val >= 20) {  
        return "20 or Over";
    }

    if (val >= 10) {  
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);

// Comparison with the less than operator

function testLessThan(val) {
    if (val < 25) {  
        return "Under 25";
    }

    if (val < 55) {  
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);

// Comparison with the less than or equal to operator

function testLessOrEqual(val) {
    if (val <= 12) { 
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {  
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);

// Comparison to the logical and operator

function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50 && val >= 25) {
        return "Yes";
}

    return "No";
}

testLogicalAnd(10);

// Comparison with the logical or operator

function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return "Outside";
    }


    return "Inside";
}

testLogicalOr(15);

// FCC solutions Boolean logic up to 68th exercise 18/08/2021