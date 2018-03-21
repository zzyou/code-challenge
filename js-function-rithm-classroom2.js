// Write a function called keys, which accepts an object and returns an array of all of the keys in the object. 
// Do not use the built in Object.keys() function!

function keys(obj) {
    let arr = [];
    for (let key in obj) {
      arr.push(key);
    }
    return arr;
  }
  
  var obj = { a: 1, b: 2, c: 3 };
  keys(obj); // ["a", "b", "c"]
  
  var obj2 = { first: 'Matt', last: 'Lane' };
  keys(obj2); // ["first", "last"]
  
  var obj3 = {};
  keys(obj3); // []
  
  
  
  //Write a function called values, which accepts an object and returns an array of all of the values in the object.
  // Do not use the built in Object.values() function!
  
  function values (obj) {
    let arr = [];
    for (let key in obj) {
      arr.push(obj[key]);
    }
    return arr;
  }
  
  var obj = { a: 1, b: 2, c: 3 };
  values(obj); // [1,2,3]
  
  var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
  values(obj2); // ["Matt", "Lane", true]
  
  var obj3 = {};
  values(obj3); // []
  
  
  
  // Write a function called swapKeyAndValue, which accepts an object and a key. 
  // The function should return a new object with the given key and its value flipped, and all the other key/value pairs unchanged.
  
  function swapKeyAndValue(obj, key) {
    let newObj = {};
    for (let k in obj) {
      if (k === key) {
        newObj[obj[k]] = k;
      } else {
        newObj[k] = obj[k];
      }
    }
    return newObj;
  }
  
  var instructor = { name: 'Elie', job: 'Instructor' };
  
  swapKeyAndValue(instructor, 'name');
  // {Elie: 'name', job: "Instructor"}
  
  swapKeyAndValue(instructor, 'job');
  // {name: "Elie", Instructor: 'job'}
  
  
  
  // Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
  // In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
  // Do not use the built in Object.entries() function!
  
  function entries(obj) {
    let arr = [];
    for (let key in obj) {
      // concat won't work, because concat doesn't change any original arrays. It only returns a new array.
      arr.push([key, obj[key]]);
    }
    return arr;
  }
  
  var obj = { a: 1, b: 2, c: 3 };
  entries(obj); 
  // [["a",1], ["b",2], ["c",3]]
  
  var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
  entries(obj2); 
  // [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
  
  var obj3 = {};
  entries(obj3); // []
  
  
  
  // Write a function called every which accepts an array and a callback function. The function should return true if all values in the array passed to the callback return true, otherwise return false.
  // Do not use the built-in Array.every() function!
  
  function every(arr, func) {
    for (let val of arr) {
      if (!func(val)) {
        return false;
      }
    }
    return true;
  }
  
  every([1, 2, 3, 4, 5], function(val) {
   return val > 0;
  }); 
  // true
  
  every([1, 2, 3, 4, 5], function(val) {
   return val < 2;
  }); 
  // false



// Write a function called some which accepts an array and a callback function. 
// The function should return true if any value in the array passed to the callback returns true, otherwise return false.

function some(arr, func) {
    for (let val of arr) {
        if (func(val)) {
            return true;
        }
    }
    return false;
}

some([1, 2, 3, 4, 5], function(val) {
    return val > 5;
}); 
// false
   
some([1, 2, 3, 4, 5], function(val) {
return val < 2;
}); 
// true



// Write a function called filter which accepts an array and a callback function. The callback takes a single parameter called val and return a boolean based on some comparison to the value.
// The function should return an array of all values that pass the comparison test.
// Do not use the built-in Array.filter() function!

function filter(arr, func) {
    let filteredArr = [];
    for (let val of arr) {
        if (func(val)) {
            filteredArr.push(val);
        }
    }
    return filteredArr;
}

var arr = [1, 2, 3, 4, 5];

filter(arr, function(val) {
 return val > 3;
}); // [4,5]

filter(['a', 1, '2', 3], function(val) {
 return typeof val === 'string';
}); // ["a","2"]

filter([1, 2, 3, 4, 5], function(val) {
 return typeof val === 'string';
}); // []



// Write a function called countIf which accepts an array and a callback function. The callback function will return a boolean comparison to its val parameter.
// The function should return a count of the number of times the callback returns true when passed each value in the array.

function countIf(arr, func) {
    let count = 0;
    for (let val of arr) {
        if (func(val)) {
            count += 1;
        }
    }
    return count;
}

// // Another method using "filter":

// function countIf(arr, func) {
//     return arr.filter(func).length;
// }

countIf([1, 2, 3, 4, 5], function(val) {
    return val > 4;
}); // 1

countIf([2, 4, 6, 7], function(val) {
    return val % 2 === 0;
}); // 3

countIf(['Tim', 'Matt', 'Elie'], function(val) {
    return val.length > 3;
}); // 2



// Write a function called countValues which accepts an array and a number and returns the number of times that value appears in the array. 

function countValues(arr, num) {
    let count = 0;
    for (let val of arr) {
        if (val === num) {
            count += 1;
        }
    }
    return count;
}

countValues([4,1,4,2,3,4,4], 4) // 4
countValues([4,1,4,2,3,4,4], 100) // 0
countValues([], 1) // 0



// Write a function called squareEvenNumbers which accepts an array and returns the sum of all of the even numbers in the array squared.

function squareEvenNumbers(arr) {
    let sum = 0;
    for (let val of arr) {
        if (val % 2 === 0) {
            sum += val ** 2;
        }
    }
    return sum;
}






