/* countdown
Write a function called countdown 
that accepts a number as a parameter 
and every 1000 milliseconds decrements the value 
and console.logs it. 
Once the value is 0 it should log "DONE!" and stop. */

function countDown(num) {
    let timeId = setInterval(function() {
        num--;
        if (num === 0) {
            clearInterval(timeId);
            return console.log("DONE!");
        }
        console.log(num);
    }, 1000);
}

countDown(4);
// 3
// 2
// 1
// "DONE!"



/* randomGame
Write a function called randomGame 
that selects a random number between 0 and 1 every 1000 milliseconds 
and each time that a random number is picked, add 1 to a counter. 
If the number is greater than .75, 
stop the timer and return the number of tries it took 
before we found a number greater than .75. */

function randomGame() {
    let count = 0;
    let timeId = setInterval(function() {
        let num = Math.random();
        count++;
        if (num > 0.75) {
            clearInterval(timeId);
            // has to console.log to show the count.
            // if only return, it'll show nothing.
            return console.log(count);
        }
    }, 1000);
}

randomGame();



/* isEven
Write a function called isEven 
which takes in a number 
and returns true if the number is even 
and returns false if it is not. */

function isEven(num) {
    return num % 2 === 0 ? true: false;
}

isEven(2); // true
isEven(3); // false



/* isOdd
Write a function called isOdd 
which takes in a number 
and returns true if the number is odd 
and returns false if it is not */

function isOdd(num) {
    return num % 2 !== 0 ? true: false;
}

isOdd(3); // true
isOdd(14); // false



/* isPrime
Write a function called isPrime 
which takes in a number 
and returns true if the number is a prime number 
(is greater than 1 and can only be divided in whole by itself and 1), 
otherwise returns false */

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

isPrime(8); // false
isPrime(17); // true



/* numberFact
Write a function called numberFact 
which takes in a number and a callback 
and returns the result of the callback 
with the number passed to it. */

function numberFact(num, fn) {
    return fn(num);
}

numberFact(59,isEven); // false
numberFact(59,isOdd); // true
numberFact(59,isPrime); // true



/* find
Write a function called find. 
It should take in an array and a callback 
and return the first value found in the array 
that matches the condition. */

function find(arr, fn) {
    for (let e of arr) {
        if (fn(e)) {
            return e;
        }
    }
}

find([8,11,4,27], function(val){return val >= 10}); // 11
find([8,11,4,27], function(val){return val === 5}); // undefined



/* findIndex
Write a function called findIndex. 
It should take in an array and a callback 
and return the index of first value found in the array 
that matches the condition. */

function findIndex(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            return i;
        }
    }
}

findIndex([8,11,4,27], function(val){return val >= 10}); // 1
findIndex([8,11,4,27], function(val){return val === 7}); // undefined



/* specialMultiply
Write a function called specialMultiply 
which accepts two parameters. 
If the function is passed both parameters, 
it should return the product of the two. 
If the function is only passed one parameter 
- it should return a function 
which can later be passed another parameter to return the product. 
You will have to use closure and arguments to solve this. */

function specialMultiply() {
    if (arguments.length === 2) {
        return arguments[0] * arguments[1];
    }
    if (arguments.length === 1) {
        const outerNum = arguments[0];
        return function(num) {
            return outerNum * num;
        }
    }
}

specialMultiply(3,4); // 12
specialMultiply(3)(4); // 12
specialMultiply(3); // returns a function 


