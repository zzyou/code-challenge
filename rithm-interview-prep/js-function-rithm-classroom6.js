/* Write a function called findGreaterNumbers which accepts an array 
and returns the number of times a number is followed by a larger number. */

function findGreaterNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                count ++;
            }
        }
    }
    return count;
}

findGreaterNumbers([1,2,3]) // 3
findGreaterNumbers([6,1,2,7]) // 4
findGreaterNumbers([5,4,3,2,1]) // 0
findGreaterNumbers([]) // 0



/* Given an array of numbers (not necessarily unique values), 
your goal is to measure how close the array is to being sorted by counting the number of inversions it has.
An inversion occurs when two numbers in the array are out of order.
Implement a function called numInversions which counts the number of inversions in the array. */

function numInversions(arr) {
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                count++;
            }
        }
    }
    return count;
}

numInversions([]); // 0
numInversions([5]); // 0
numInversions([1,2]); // 0
numInversions([2,1]); // 1
numInversions([1,2,3]); // 0
numInversions([1,3,2]); // 1
numInversions([3,1,2]); // 2
numInversions([3,2,1]); // 3
numInversions([5,3,4,1,2]); // 8
numInversions([1,1,1,1]); // 0
numInversions([2,2,1,1]); // 4
numInversions([3,3,3,2,2,1]); // 11
numInversions([8, 6, 6, 1, 1, 1, 3, 4, 2]); // 22



/* Given a sorted array of numbers, 
return the length of the subarray formed by allowing each number to appear at most two times.
BONUS: if you know what Big O notation is, 
try to solve this problem in O(n) time complexity, and O(1) space complexity. */

function removeDuplicatesFromSorted(arr) {
    let newArr = [];
    let i = 0;
    while (true) {
        if (i === arr.length) {
            break;
        }
        if (newArr.includes(arr[i])) {
            i ++;
        }
        else if (arr[i] === arr[i+1]) {
            newArr.push(arr[i], arr[i+1]);
            i += 2;
        }
        else if (arr[i] !== arr[i+1]) {
            newArr.push(arr[i]);
            i ++;
        }
    }
    return newArr.length;
}

// Another method using for loop and two counts.
// one total count for each unique element, and one conditional count/len for count < 3.
function removeDuplicatesFromSorted(sortedArr) {
    var len = 0;
    var cur = null;
    var count = 0;
    for (var i = 0; i < sortedArr.length; i++) {
      if (cur !== sortedArr[i]) {
        cur = sortedArr[i]
        len++;
        count = 1;
      } else {
        count++;
        if (count < 3) len++;
      }
    }
    return len;
}

removeDuplicatesFromSorted([1, 1, 1, 2, 2, 3]); // 5
removeDuplicatesFromSorted([2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]); // 8
removeDuplicatesFromSorted([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]); // 2
removeDuplicatesFromSorted([1, 2, 3, 4, 5, 6]); // 6
removeDuplicatesFromSorted([]); // 0



/* Create a function isAlt that accepts a string as an argument 
and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order. */

function isAlt(str) {
    for (let i = 0; i < str.length - 1; i ++) {
        if ( (/[aeiou]/.test(str[i]) && /[aeiou]/.test(str[i+1])) ||
             (/[^aeiou]/.test(str[i]) && /[^aeiou]/.test(str[i+1])) ) {
            return false;
        }
    }
    return true;
}

// Another method using .indexOf() === -1:
function isAlt(word) {
    var vowels = ['a','e','i','o','u'];
    for (var i = 1; i < word.length; i++) {
      if ((vowels.indexOf(word[i-1]) >= 0 && vowels.indexOf(word[i]) >= 0) ||
          (vowels.indexOf(word[i-1]) === -1 && vowels.indexOf(word[i]) === -1)) {
        return false;
      }
    }
    return true;
}

isAlt("amazon") // true
isAlt("apple") // false
isAlt("banana") // true
