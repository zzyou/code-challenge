// Write a function called pluck, which takes an array of objects and the name of a key.
// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.

function pluck(arr, key) {
    let newArr = [];
    for (let obj of arr) {
      newArr.push(obj[key]);
    }
    return newArr;
  }

//  Another method using nested for loop:
function pluck (arr, key) {
    let valArr = [];
    for (let obj of arr) {
        let val;
        for (let k in obj) {
            if (k === key) {
                val = obj[k];
            }
        }
        valArr.push(val);
    }
    return valArr;
}

pluck([
    { name: "Tim" }, { name: "Matt" }, { name: "Elie" }],
   'name'
  )
  // ["Tim", "Matt", "Elie"]

  pluck(
    [{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],
   'isBoatOwner'
  )
  // [true, false, undefined]



// Write a function called twoHighest that takes an array of numbers as its argument and returns the two highest numbers within the array. 
// The returned value should be an array in the following format: [secondHighest, highest]
// The order of the numbers passed in could be any order.

function twoHighest (arr) {
  arr.sort(function(a, b) {
    return b - a;
  });
  return [arr[1], arr[0]];
}

// Another method using "sort" and "slice":
function twoHighest (nums) {
  return nums.sort((a, b) => a > b).slice(-2);
}

// Another method using "-Infinity":
function twoHighest (arr) {
  let highest = - Infinity;
  let secondHighest = - Infinity;
  for (let num of arr) {
    if (num > secondHighest) {
      secondHighest = num;
    }
    if (secondHighest > highest) {
      let temp = highest;
      highest = secondHighest;
      secondHighest = temp;
    }
  }
  return [secondHighest, highest];
}

twoHighest([1, 2, 10, 8]); // [8, 10]
twoHighest([6, 1, 9, 10, 4]); // [9,10]
twoHighest([4, 25, 3, 20, 19, 5]); // [20,25]
twoHighest([1, 2, 2]) // [2, 2];



// Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
// The function should return an array with the following format: [lowestKey, highestKey]

function minMaxKeyInObject(obj) {
  let keyArr = [];
  for (let key in obj) {
    keyArr.push(parseFloat(key));
  }
  let lowestKey = Math.min.apply(null, keyArr);
  let highestKey = Math.max.apply(null, keyArr);
  return [lowestKey, highestKey];
}

// Another method using Object.keys and Array spread operator (...):
function minMaxKeyInObjectDeclarative(obj) {
  return [Math.min(...Object.keys(obj)), Math.max(...Object.keys(obj))];
}

// Another method using for loop:
function minMaxKeyInObject(obj) {
  let minKey = Infinity;
  let maxKey = -Infinity;

  for (let key in obj) {
    let keyNum = +key;
    if (keyNum < minKey) {
      minKey = keyNum;
    }
    if (keyNum > maxKey) {
      maxKey = keyNum;
    }
  }

  return [minKey, maxKey];
}

minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]
minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]



// Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value". 
// Each key/value pair should be separated by a comma and space except for the last pair.

function stringFromObject(obj) {
  let arr = [];
  for (let key in obj) {
    arr.push(`${key} = ${obj[key]}`);
  }
  return arr.join(', ');
}

// Another method using str.slice:
function stringFromObject(obj) {
  let finalStr = '';
  for (let key in obj) {
    finalStr += key + ' = ' + obj[key] + ', ';
  }
  return finalStr.slice(0, -2);
}

// Another method using Object.entries:
function stringFromObject(obj) {
  return Object.entries(obj)
    .map(pair => pair.join(' = '))
    .join(', ');
}

stringFromObject({ a: 1, b: '2' }); 
// "a = 1, b = 2"
stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }); 
// "name = Elie, job = Instructor, isCatOwner = false"
stringFromObject({}); 
// ""



// A query string, is a way to send data in an HTTP request, you may see it in a URL starting with a question mark. 
// Write a function called toQueryString, which accepts an object and returns a string with each key and value separated by a = and each pair separated by a &. 
// If the value is an array, add another pair to the string with each value.

function toQueryString(obj) {
  

}

