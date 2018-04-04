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



/* Given an array of unique numbers, return a new array of rankings of the original array. For example, if your input array is [10, 5, 20], the output should be [2, 3, 1], since 10 is the second largest number, 5 is the third largest, and 20 is the largest. */

function rankings(arr) {
    let obj = {};
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = i;
    }
    arr.sort((a, b) => {
        return b - a;
    });
    for (let key in obj) {
        newArr[obj[key]] = arr.indexOf(+key) + 1;
    }
    return newArr;
}

// Another method using rank variable:
function rankings(arr) {
    var rankingsArr = [];
    for (var i = 0; i < arr.length; i++) {
      var rank = 1;
      for (var j = 0; j < arr.length; j++) {
        if (arr[j] > arr[i]) rank++;
      }
      rankingsArr.push(rank);
    }
    return rankingsArr;
}

rankings([10, 5, 20]); // [2, 3, 1]
rankings([6, 8, 1, 12, 4, 3, 9]); // [4, 3, 7, 1, 5, 6, 2]
rankings([100]); // [1]
rankings([4, 2, 3, 1]); // [1, 3, 2, 4]



/* Write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. 
You should not consider "y" to be a vowel. */

function reverseVowels(str) {
    let vowelArr = [];
    let newArr = [];
    for (let cha of str) {
        if (/[aeiou]/i.test(cha)) {
            vowelArr.unshift(cha);
        }
    }
    let i = 0;
    for (let cha of str) {
        if (/[aeiou]/i.test(cha)) {
            newArr.push(vowelArr[i]);
            i++;
        } else {
            newArr.push(cha);
        }
    }
    return newArr.join('');
}

// Another method using string.indexOf() and two iterators:
function reverseVowels(str) {
    var newStr = '';
    var vowels = 'aeiouAEIOU';
    var i = 0;
    var j = str.length - 1;
    while (i < str.length || j > 0) {
      // if str[i] is a vowel, or i out of index range
      if (vowels.indexOf(str[i]) !== -1 || i === str.length) {
        // while str[j] is not a vowel and j in index range, j-- and continue.
        while (vowels.indexOf(str[j]) === -1 && j >= 0) j--;
        // if str[j] is a vowel, push str[j] into newStr, and j--.
        if (j >= 0) newStr += str[j--];
      // else str[i] is not a vowel, push str[i] into newStr
      } else {
        newStr += str[i];
      }
      i++;
    }
    return newStr;
}

reverseVowels("Hello!"); // "Holle!" 
reverseVowels("Tomatoes"); // "Temotaos" 
reverseVowels("Reverse Vowels In A String"); // "RivArsI Vewols en e Streng"
reverseVowels("aeiou"); // "uoiea"
reverseVowels("why try, shy fly?"); // "why try, shy fly?"



/* Create a function runningAverage that returns a function. 
When the function returned is passed a value and called, the series is updated with the current average of all previous function calls. 
You will have to use closure to solve this. 
You should round all answers to the 2nd decimal place (hundredths). */

function runningAverage() {
    let num = 0;
    let count = 0;
    return function(innerNum) {
        num += innerNum;
        count ++;
        return  +(num/count).toFixed(2);
    };
}

rAvg = runningAverage();
rAvg(10) // 10.00;
rAvg(11) // 10.50;
rAvg(12) // 11.00;

rAvg2 = runningAverage()
rAvg2(1) // 1.00
rAvg2(3) // 2.00
rAvg2(4) // 2.67