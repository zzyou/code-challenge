/* Write a function called repeat, which accepts a string and a number and returns a new string with the string repeated that number of times. */

function repeat(str, num) {
  var newStr = '';
  for (let i = num; i > 0; i--) {
    newStr += str;
  }
  return newStr;
}

repeat('Matt', 3); // 'MattMattMatt'
repeat('Elie', 2); // 'ElieElie'
repeat('Michael', 0); // '' 



/* Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove. 
The function should return a new string with the characters removed. */

function removeFromString(str, ind, num) {
  var arr = str.split('');
  arr.splice(ind, num);
  return arr.join('');
}

// Another method:
function removeFromString(str, start, removeCount) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (i < start || i >= start + removeCount) {
      newStr += str[i];
    }
  }
  return newStr;
}

removeFromString('Elie', 2, 2); // 'El'
removeFromString('Elie', 0, 1); // 'lie'
removeFromString('Rithm School', 0, 6); // 'School'
removeFromString('Rithm School', 2, 4); // 'RiSchool'
removeFromString('Rithm School', 6, 400); // 'Rithm '



/* Write a function called pop which accepts an array.
The function should remove the last value in the array and return the value removed or undefined if the array is empty.
Do not use the built in Array.pop() function! */

function pop(arr) {
  var popped = arr[arr.length - 1];
  arr.splice(arr.length - 1, 1);
  return popped;
}

// Another method: 
function pop(arr) {
  if (arr.length === 0) {
    return;
  }
  let finalVar = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return finalVar;
}

var arr = [1, 2, 3, 4];
pop(arr); // 4
arr; // [1, 2, 3]

var emptyArr = [];
pop(emptyArr); // undefined
emptyArr.length; // 0



/* Write a function called unshift which accepts an array and a value and adds the value to the beginning of the array.
This function should return the new length of the array.
Do not use the built in Array.unshift() function! */

function unshift(arr, val) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = val;
  return arr.length;
}

var arr = [1, 2, 3];
unshift(arr, 0); // 4
arr; // [0, 1, 2, 3]

unshift([4, 5, 6], 10); // 4



/* Write a function called shift which accepts an array and removes the first value in the array and then returns the value removed. It should return undefined if the array is empty.
Do not use the built in shift function! */

function shift(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  var shifted = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i+1];
  }
  arr.length = arr.length - 1;
  return shifted;
}

var arr = ["a","b","c"];
shift(arr); // "a"
arr; // ["b","c"]

var emptyArr = [];
shift(emptyArr); // undefined
emptyArr.length; // 0



/* Write a function called reverse, which accepts an array and returns the same array with all of the values reversed. In other words, do not solve this by creating a new array.
Note: returning the same array is called an in-place operation, since no additional space is used. https://en.wikipedia.org/wiki/In-place_algorithm 
Do not use the built in Array.reverse() function! */

function reverse(arr) {
  // cannot use "var newArr = arr", because newArr will change according to arr's change.
  var newArr = Array.from(arr);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = newArr[(newArr.length - i - 1)];
  }
  return arr;
}

// Another method, cutting from the middle:
function reverse(arr) {
  let middle = Math.floor(arr.length / 2);
  for (let i = 0; i < middle; i++) {
    let end = arr.length - 1;
    let temp = arr[i];
    arr[i] = arr[end - i];
    arr[end - i] = temp;
  }
  return arr;
}

reverse([5, 4, 3, 2, 1]); // [1, 2, 3, 4, 5]
reverse([]); // []

var arr = [1, 2, 3];
reverse(arr); // [3, 2, 1]
arr; // [3, 2, 1]



/* Write a function called concat, which accepts an array, and a variable amount of parameters (all of which are arrays). 
The function returns a new array with all of the remaining parameters joined with the array.
Do not use the built in Array.concat() function! */

function concat (arr1, ...arrs) {
  for (let arr of arrs) {
    for (let e of arr) {
      arr1.push(e);
    }
  } 
 return arr1;
}

// Another method using "arguments".
function concat() {
  let newArr = [];
  for (let arr of arguments) {
    for (let item of arr) {
      newArr.push(item);
    }
  }
  return newArr;
}

// Another method using "forEach".
function concat(...arrays) {
  let newArr = [];
  arrays.forEach(arr => {
    arr.forEach(item => {
      newArr.push(item);
    });
  });
  return newArr;
}

concat([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]
concat([1, 2, 3], [4], [5], [6]); // [1, 2, 3, 4, 5, 6]
concat([1], [[2], [3]], [4]); // [1, [2], [3], 4]



/* Question Credit: Rithm School
https://repl.it/student/classrooms/24687 */