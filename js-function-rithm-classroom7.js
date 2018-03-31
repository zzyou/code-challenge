/* Write a function called threeOddNumbers, which accepts an array of numbers and returns true if any three consecutive numbers sum to an odd number. */

function threeOddNumbers(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        if ( ((arr[i] + arr[i+1] + arr[i+2]) % 2) !== 0 ) {
            return true;
        }
    }
    return false;
}

threeOddNumbers([1,2,3,4,5]) // true
threeOddNumbers([0,-2,4,1,9,12,4,1,0]) // true
threeOddNumbers([5,2,1]) // false
threeOddNumbers([1,2,3,3,2]) // false