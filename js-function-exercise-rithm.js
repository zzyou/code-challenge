/* printDay
this function takes in one parameter (a number from 1-7) 
and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). 
If the number is less than 1 or greater than 7, the function should return undefined; */

function printDay(num) {
    if (num < 1 || num > 7) {
        return undefined;
    }

    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    return week[num - 1];
}

printDay(4); // "Wednesday"
printDay(41); // undefined



/* singleLetterCount
this function takes in two parameters (two strings). 
The first parameter should be a word and the second should be a letter. 
The function returns the number of times that letter appears in the word. 
The function should be case insensitive (does not matter if the input is lowercase or uppercase). 
If the letter is not found in the word, the function should return 0. */

function singleLetterCount(str, cha) {
    let count = 0;
    for (let c of str) {
        if (c.toLowerCase() === cha.toLowerCase()) {
            count ++;
        }
    }
    return count;
}

singleLetterCount('amazing','A'); // 2
singleLetterCount('Rithm School','o'); // 2



/* multipleLetterCount
this function takes in one parameter (a string) 
and returns an object with the keys being the letters 
and the values being the count of the letter. */

function multipleLetterCount(str) {
    let obj = {};
    for (let cha of str) {
        obj[cha] = (obj[cha] + 1) || 1;
    }
    return obj;
}

multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
multipleLetterCount("person"); // {p:1, e: 1, r: 1, s:1, o:1, n:1}



/* arrayManipulation
this function should take in at most four parameters 
(an array, command, location, and value).

If the command is "remove" and the location is "end", 
the function should remove the last value in the array 
and return the value removed. 
(In this case, the function only needs three arguments.)

If the command is "remove" and the location is "beginning", 
the function should remove the first value in the array 
and return the value removed. 
(In this case, the function only needs three arguments.)

If the command is "add" and the location is "beginning", 
the function should add the value (fourth parameter) to the beginning of the array 
and return the array.

If the command is "add" and the location is "end", 
the function should add the value (fourth parameter) to the end of the array 
and return the array. */

function arrayManipulation(arr, com, loc, val) {
    if (com === 'remove' && loc === 'end') {
        let lastVal = arr.pop();
        return lastVal;
    }
    if (com === 'remove' && loc === 'beginning') {
        let firstVal = arr.shift();
        return firstVal;
    }
    if (com === 'add' && loc === 'beginning') {
        arr.unshift(val);
        return arr;
    }
    if (com === 'add' && loc === 'end') {
        arr.push(val);
        return arr;
    }
}

arrayManipulation([1,2,3], "remove", "end"); // 3
arrayManipulation([1,2,3], "remove", "beginning"); // 1
arrayManipulation([1,2,3], "add", "beginning", 20); // [20,1,2,3]
arrayManipulation([1,2,3], "add", "end", 30); // [1,2,3,30]



/* isPalindrome
A Palindrome is a word, phrase, number, or other sequence of characters 
which reads the same backward or forward. 
This function should take in one parameter 
and returns true or false if it is a palindrome. 
As a bonus, allow your function to ignore whitespace and capitalization 
so that isPalindrome('a man a plan a canal Panama'); 
returns true. */

function isPalindrome(str) {
    if (str.length === 0 || str.length === 1) {
        return true;
    }
    let newStr = str.toLowerCase().split(' ').join('');
    for (let i = 0; i < Math.floor(newStr.length / 2); i++) {
        if (newStr[i] !== newStr[newStr.length - i - 1]) {
            return false;
        }
    }
    return true;
}

isPalindrome('testing'); // false
isPalindrome('tacocat'); // true
isPalindrome('hannah'); // true
isPalindrome('robert'); // false
isPalindrome('a man a plan a canal Panama'); // true



/* Rock / Paper / Scissor
Build a game of Rock/Paper/Scissor where through the use of the prompt function, 
a user can enter their choice 
and based on a random selection - they can either tie/win or lose against a computer. */

function game() {
    let userChoice = window.prompt('What is your choice of rock, paper, or scissor?').toLowerCase();

    let random = Math.floor(Math.random() * 3);
    let choice = ['rock', 'paper', 'scissor'];
    let computerChoice = choice[random];

    validation();

    function validation() {
        if (choice.includes(userChoice)) {
            gameLogic(); 
        }
        else {
            userChoice = window.prompt('Invalid input. Please only enter rock, paper or scissor.');
            return validation();
        }
    }

    function gameLogic() {
        if (userChoice === computerChoice) {
            alert("It's a tie!");
        }
    
        else if ( ( userChoice === 'rock' && computerChoice === 'paper' )
            || ( userChoice === 'scissor' && computerChoice === 'rock' )
            || ( userChoice === 'paper' && computerChoice === 'scissor') ) {
            alert("You lose.");
        }
    
        else if ( ( computerChoice === 'rock' && userChoice === 'paper' )
            || ( computerChoice === 'scissor' && userChoice === 'rock' )
            || ( computerChoice === 'paper' && userChoice === 'scissor') ) {
            alert("You win!");
        }

        let end = window.prompt('Do you want to end the game? Yes or No');

        if (end === 'Yes' || end === 'yes' || end === 'Y' || end === 'y') {
            return alert('Thank you for playing!');
        } else {
            game();
        }
    }
}

game();