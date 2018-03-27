// Write a function called findTwins, which accepts an array of integers and finds two of same numbers and 
// returns the number that is repeated twice. The function should return null if there is not a number repeated twice.

function findTwins(arr) {
    var newArr = Array.from(arr);
    for (let i = 0; i < arr.length; i ++) {
        // If splice on the original arr, the arr becomes shorter.
        // but i still increase as usual, so the later for loop will escape some elements inside of the arr.
        // If splice on newArr, i also increase as usual, while newArr becomes shorter (i greater than the actural index).
        // I can just use shift(), which will just shift the first item of the changing newArr.
        newArr.shift();
        if (newArr.includes(arr[i])) {
            return arr[i];
        }
    }
    return null;
}

// Another method using obj:
function findTwins(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = (obj[arr[i]] || 0) + 1
    }
    for (var key in obj) {
      if(obj[key] > 1) return +key
    }
    return null
  }

findTwins([4,1,6,1,5]) // 1
findTwins([2,3,6,34,7,8,2]) // 2
findTwins([3,6,9,2,4,3,1,0]) // 3
findTwins([]) // null
findTwins([3,1,4,2,5]) // null



/* Write a function generatePairs that accepts an integer and generates an array containing the pairs of integers [a, b]. 
The pairs should be sorted by increasing values of a then increasing values of b. */

function generatePairs(int) {
    if (int < 0) {
        return;
    }
    let arr = [];
    for (let i = 0; i <= int; i++) {
        for (let j = i; j <= int; j++) {
            arr.push([i, j]);
        }
    }
    return arr;
}

generatePairs(3) // [ [0, 0], [0, 1], [0, 2], [0, 3], [1, 1], [1, 2], [1, 3], [2, 2], [2, 3], [3, 3] ]
generatePairs(2) // [ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]
generatePairs(1) // [ [0, 0], [0, 1], [1,1]]
generatePairs(0) // [ [0, 0]]



