// Write a function called pluck, which takes an array of objects and the name of a key.
// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.

function pluck(arr, key) {
    let newArr = [];
    for (let obj of arr) {
      newArr.push(obj[key]);
    }
    return newArr;
  }

// Another method:

// function pluck (arr, key) {
//     let valArr = [];
//     for (let obj of arr) {
//         let val;
//         for (let k in obj) {
//             if (k === key) {
//                 val = obj[k];
//             }
//         }
//         valArr.push(val);
//     }
//     return valArr;
// }

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

// // Another method using "sort" and "slice":
// function twoHighestWithSort(nums) {
//   return nums.sort((a, b) => a > b).slice(-2);
// }

// // Another method using "-Infinity":
// function twoHighest (arr) {
//   let highest = - Infinity;
//   let secondHighest = - Infinity;
//   for (let num of arr) {
//     if (num > secondHighest) {
//       secondHighest = num;
//     }
//     if (secondHighest > highest) {
//       let temp = highest;
//       highest = secondHighest;
//       secondHighest = temp;
//     }
//   }
//   return [secondHighest, highest];
// }

twoHighest([1, 2, 10, 8]); // [8, 10]
twoHighest([6, 1, 9, 10, 4]); // [9,10]
twoHighest([4, 25, 3, 20, 19, 5]); // [20,25]
twoHighest([1, 2, 2]) // [2, 2];



