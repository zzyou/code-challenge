// Write a function called repeat, which accepts a string and a number and returns a new string with the string repeated that number of times.

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



// Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove. 
// The function should return a new string with the characters removed.

function removeFromString(str, ind, num) {
  var arr = str.split('');
  arr.splice(ind, num);
  return arr.join('');
}

// // Another method:
// function removeFromString(str, start, removeCount) {
//   let newStr = '';
//   for (let i = 0; i < str.length; i++) {
//     if (i < start || i >= start + removeCount) {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }

removeFromString('Elie', 2, 2); // 'El'
removeFromString('Elie', 0, 1); // 'lie'
removeFromString('Rithm School', 0, 6); // 'School'
removeFromString('Rithm School', 2, 4); // 'RiSchool'
removeFromString('Rithm School', 6, 400); // 'Rithm '



// Write a function called pop which accepts an array.
// The function should remove the last value in the array and return the value removed or undefined if the array is empty.
// Do not use the built in Array.pop() function!

function pop(arr) {
  var popped = arr[arr.length - 1];
  arr.splice(arr.length - 1, 1);
  return popped;
}

// // Another method: 
// function pop(arr) {
//   if (arr.length === 0) {
//     return;
//   }
//   let finalVar = arr[arr.length - 1];
//   arr.length = arr.length - 1;
//   return finalVar;
// }

var arr = [1, 2, 3, 4];
pop(arr); // 4
arr; // [1, 2, 3]

var emptyArr = [];
pop(emptyArr); // undefined
emptyArr.length; // 0
