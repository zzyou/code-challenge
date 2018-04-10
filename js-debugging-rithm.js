/* Explain what type of error will be thrown, 
why the error is occuring, 
and how to fix it */

person;
// ReferenceError.
// this variable is not initialized, not defined.
// add var or let or const to declare this variable.
let person;



var data = {};
data.displayInfo();
// TypeError.
// The value of data.displayInfo is undefined, 
// so we are invoking undefined which we can not do. 
// Undefined is not a function.
// remove the (), will get undefined.
let data = {};
data.displayInfo;



var data = {};
data.displayInfo.foo = "bar";
// TypeError.
// cannot assign the property on undefined.
// Undefined is not an object so we can not do that.
// assign a value to the property displayInfo first.
let data = {};
data.displayInfo = {};
data.displayInfo.foo = "bar";



function data() {
    var thing = "foo";
}
data();
thing;
// ReferenceError.
// cannot access the variable outside of the scope.
// declare the variable in global scope to access it.
let thing;
function data() {
    thing = "foo";
}
data();
thing;



/* Fix the broken code and explain what was wrong */

for (var i = 0; i > 5; i++) {
    console.log(i);
}
// the above for loop will never run, because i is not greater than 5.
// the condition inside the loop was not correct.
for (let i = 0; i < 5; i++) {
    console.log(i);
}



function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
// = is only assigning value, === is comparing values.
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}



function loopToFive() {
    for(var i = 0, i < 5, i++) {
        console.log(i);
    }
}
// use ; to seperate for loop conditions, but not ,
function loopToFive() {
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }
}



/* HINT - eight things need to be changed here for this to work!
Start by fixing the syntax errors 
and then run the function to see what your output is. */
function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i = 0; i < numbers.length - 1; i++;){
        if(numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // should return [2,4,6,8] 
// unnecessary semicolons ; after i++ and if
// i will stop at numbers.length - 2
// use === instead of = to compare values
// should compare numbers[i] instead of numbers in if.
// should push numbers[i] instead of i.
// should return evenNumbers after the for loop.
function displayEvenNumbers() {
    const numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers();
