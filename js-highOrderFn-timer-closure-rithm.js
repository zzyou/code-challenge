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







