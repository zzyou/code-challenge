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



  
