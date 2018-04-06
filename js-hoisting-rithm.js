/* When a variable is created in a function using the var keyword, 
the variable is actually defined at the top of its scope.
But the variable's value is initialized to undefined at the top. 
So it's undefined. */

function displayInstructor(){
    return instructor;
    var instructor = "Elie";
}

displayInstructor();



/* the myName variable from the returnMyName function is getting logged. 
It is hoisted to the top of the function 
and created as soon as the function executes. 
Since nothing has been assigned to myName until later in the program, 
myName starts out undefined. */

var myName = "Tim";

function returnMyName() {
    console.log(myName);
    var myName = "Matt";
}

returnMyName();



/* Exercise 1: 
JavaScript always starts from in (the closest function) 
and works its way out (to outer functions 
    and eventually the global scope). */

var firstName = 'Elie';

function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}

displayFirstName(); // 'Tim'



/* Exercise 2 */

function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}

displayFirstName(); // 'Tim'

console.log(firstName);  // Reference Error: firstName is not defined.



/* Exercise 3 */

console.log(firstName); // undefined
var firstName = "Elie";



/* Exercise 4 */

console.log(firstName); // Reference Error
firstName = 'Elie';



/* Exercise 5 */

function sayHi(){
    return 'Hi ' + firstName;
    var firstName = 'Elie'
}

sayHi(); // 'Hi undefined'



/* Exercise 6 */

function sayHi(){
    return 'Hi ' + firstName; 
    firstName = 'Elie'
}

sayHi(); // Reference Error



/* Exercise 7 */

sayHi() // 'Hi!'

function sayHi(){
    return 'Hi!';
}



/* Exercise 8 */

sayHi() // Type Error: sayHi is not a function.

var sayHi = function(){
    return 'Hi!';
}

