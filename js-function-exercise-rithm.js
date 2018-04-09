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

// another method using object:
function printDay(num) {
    let dates = {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday"
    };
    return dates[num];
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

// neater code:
function arrayManipulation(arr, com, loc, val) {
    if (com === 'remove') {
        if (loc === 'end') {
            return arr.pop();
        }
        return arr.shift();
    }
    else if (com === 'add') {
        if (loc === 'end') {
            arr.push(val);
            return arr;
        }
        arr.unshift(val);
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

// use Array.reverse(), and ignore whitespace:
// do not use .split(' ') before reverse(), 
// because str will be splited and reversed for the words seperated by the whitespace, but not for every letter.
function isPalindrome(str) {
    return str.toLowerCase().split('').reverse().join('').split(' ').join('') === str.toLowerCase().split(' ').join('');
}

// this solution ignores whitespace and capitalization:
function isPalindrome(str) {
    if (str.length === 0 || str.length === 1) {
        return true;
    }
    let newStr = str.toLowerCase().split(' ').join('');
    // this for loop won't check the middle letter of odd-length str, because of < Math.floor
    for (let i = 0; i < Math.floor(newStr.length / 2); i++) {
        if (newStr[i] !== newStr[newStr.length - i - 1]) {
            return false;
        }
    }
    return true;
}

// neater code, but doesn't ignore whitespace:
function isPalindrome(str) {
    // this for loop still check the middle letter of odd-length str, which is not needed.
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
            return false;
        }
    }
    return true;
}

// another method using Array.reverse(), but doesn't ignore whitespace:
function isPalindrome(str) {
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
}

isPalindrome('testing'); // false
isPalindrome('tacocat'); // true
isPalindrome('hannah'); // true
isPalindrome('robert'); // false
isPalindrome('a man a plan a canal Panama'); // true
