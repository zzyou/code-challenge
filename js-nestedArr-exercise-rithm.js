/* Write a function called rotate 
which takes an array and a number, 
and moves each element however many spaces the number is to the right. 
For the value at the end of the array, 
rotate should move it back to the beginning. */

function rotate(arr, num) {
    const copyArr = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        if (i + num >= arr.length) {
            let index = i + num - (arr.length) * Math.floor((i + num)/arr.length);
            arr[index] = copyArr[i];
        } else {
            arr[i + num] = copyArr[i];
        }
    }
    return arr;
}

// Another method using .unshift() and .pop()
function rotate(arr, num){
    var amount = num % arr.length;
    for(var i=0; i< amount; i++){
      arr.unshift(arr.pop());
    }
    return arr;
}

rotate([1,2,3], 1); // [3,1,2]
rotate([1,2,3], 2); // [2,3,1]
rotate([1,2,3], 3); // [1,2,3]



/* Write a function called makeXOGrid 
which takes in two parameters, rows and columns, 
and returns an array of arrays 
with the number of values in each subarray equal to the columns parameter 
and the number of subarrays equal to the rows parameter. 
The values in the sub-arrays should switch between "X" and "O". */

function makeXOGrid(rows, columns) {
    let arr = [];
    for (let i = 0; i < rows * columns; i++) {
        if (i % 2 === 0) {
            arr[i] = "X";
        } else {
            arr[i] = "O";
        }
    }

    let gridArr = [];
    for (let j = 0; j < rows; j++) {
        gridArr[j] = [];
        for (let k = 0; k < columns; k++) {
            gridArr[j][k] = arr[k + j*columns];
        }
    }

    return gridArr;
}

// Another method using startWithX = true:
function makeXOGrid(rows,amount){
    var finalArr = [];
    var startWithX = true;
    for(var i=0; i<rows; i++){
        var newRow = [];
        for(var j=0; j<amount; j++){
            if(startWithX){
                newRow.push("X");
            }
            else {
                newRow.push("O");
            }
            startWithX = !startWithX;
        }
        finalArr.push(newRow);
    }
    return finalArr;
}

makeXOGrid(1,4) 
/*/
[["X","O","X","O"]]
/*/

makeXOGrid(3,2) 
/*/
[["X","O"],["X","O"],["X","O"]]
/*/

makeXOGrid(3,3) 
/*/
[["X","O","X"],["O","X","O"],["X","O","X"]]
/*/

