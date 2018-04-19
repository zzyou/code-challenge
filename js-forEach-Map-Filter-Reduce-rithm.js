/* Write a function called printFirstAndLast 
which accepts an array (of objects) 
and console.logs a new string 
with the first character and the last character of each value. */

function printFirstAndLast(arr) {
    arr.forEach((val) => {
        console.log(val[0] + val[val.length-1]);
    });
}

printFirstAndLast(['awesome','example','of','forEach']);
// ae
// ee
// of
// fh



/* Write a function called addKeyAndValue 
which accepts three parameters, 
an array (of objects), a key and a value. 
This function should return the array of objects 
after each key and value have been added to each object in the array. */

function addKeyAndValue(arr, key, value) {
    arr.forEach((obj) => {
        obj[key] = value;
    });
    return arr;
}

// Another method using reduce:
function addKeyAndValue(arr, key, val) {
    return arr.reduce((acc, obj) => {
        obj[key] = val;
        acc.push(obj);
        return acc;
    }, []);
}

// Another method starting with the original array:
function addKeyAndValue(arr, key, val) {
    return arr.reduce((acc, obj) => {
        obj[key] = val;
        return acc;
    }, arr);
}
// if not starting with arr, it will start with arr[0].
// so arr[0] won't change (key not being added).

// Another method returning arr instead of acc:
function addKeyAndValue(arr, key, val) {
    return arr.reduce((acc, obj, ind, arr) => {
        obj[key] = val;
        return arr;
    }, arr);
}

addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true);
/*
[
    {
        name: 'Elie',
        isInstructor: true
    },
    {
        name: 'Tim',
        isInstructor: true
    },
    {
        name: 'Elie',
        isInstructor: true
    }
]
*/



/* Write a function called valTimesIndex 
which accepts an array of numbers 
and returns a new array 
with each value multiplied by the index it is at in the array. */

function valTimesIndex(arr) {
    return arr.map((val, index) => val * index);
}

valTimesIndex([1,2,3]); // [0,2,6]
valTimesIndex([5,10,15]); // [0,10,30]



/* Write a function called extractKey 
which accepts two parameters, 
an array of objects, and the name of a key 
and returns an array with just the values for that key. */

function extractKey(arr, key) {
    return arr.map(obj => obj[key]);
}

// Another method using reduce:
function extractKey(arr, key) {
    return arr.reduce((acc, obj) => {
        if (key in obj) {
            acc.push(obj[key]);
        }
        return acc;
    }, []);
}

extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name");
// ["Elie", "Tim", "Matt"]



/* Write a function called filterLetters 
which accepts an array of letters 
and returns the number of occurrences of a specific letter. 
This function should be case insensitive. */

function filterLetters(arr, letter) {
    return (arr.filter(val => val.toLowerCase() === letter.toLowerCase())).length;
}

// Another method using reduce:
function filterLetters(array, letter) {
    return array.reduce((acc, ltr) => {
        if (ltr.toLowerCase() === letter.toLowerCase()) {
            acc++;
        }
        return acc;
    }, 0);
}

filterLetters(["a","a","b","c","A"], "a"); // 3
filterLetters(["a","a","b","c","A"], "z"); // 0
filterLetters(["a","a","b","c","A"], "B"); // 1



/* Write a function called filterKey 
which accepts two parameters, 
an array of objects, and the name of a key 
and returns an array with only those objects 
which have truthy values for that key. */

function filterKey(arr, key) {
    return arr.filter(obj => obj[key]);
}

filterKey([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious");
// [{name: "Tim", isInstructor:true, isHilarious:true}]
