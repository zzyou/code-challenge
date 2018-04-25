/* Write a function called findTheDuplicate which accepts an array of numbers containing a single duplicate. 
The function returns the number which is a duplicate or undefined if there are no duplicates. */

function findTheDuplicate(arr) {
    let compareArr = [];
    for (let num of arr) {
        if (compareArr.includes(num)) {
            return num;
        }
        compareArr.push(num);
    }
    return undefined;
}

// Another method using object:
function findTheDuplicate(arr){
    var counter = {};
    for(let i = 0; i < arr.length; i++){
      if(arr[i] in counter){
        counter[arr[i]]++;
      } else {
        counter[arr[i]] = 1;
      }
    }
    for(let key in counter){
      if(counter[key] > 1) return +key;
    }
  }

findTheDuplicate([1,2,1,4,3,12]); // 1
findTheDuplicate([6,1,9,5,3,4,9]); // 9
findTheDuplicate([2,1,3,4]); // undefined



/* Write a function called totalCaps, 
which accepts an array of strings 
and returns the total number of capitals in each of the strings. 
Do not convert the array into a string. */

function totalCaps(arr) {
    let total = 0;
    for (let str of arr) {
        for (let i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
                total ++;
            }
        }
    }
    return total;
}

totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"]); // 8
totalCaps(["Elie", "Matt", "Tim"]); // 3
totalCaps(["hello", "world"]); // 0



/* Given a string of words, your goal is to find the highest scoring word in the string. 
a is worth 1 point, b is worth 2 points, c is worth 3 points, and so on, all the way up until z, which is worth 26 points. 
You can assume that strings will consist only of lowercase letters and spaces.
In the event that two words have the same score, return the word that appears first in the string. */

function highestScoringWord(str) {
    let arr = str.split(' ');
    let highScore = 0;
    let highWord;
    for (let word of arr) {
        let score = 0;
        for (let i = 0; i < word.length; i++) {
            // 'a' charCode is 97.
            // substract 96 from each char to get a base 1.
            // otherwise the longer the word is, the higher the score is (comparing 97 to 1).
            score += (word.charCodeAt(i) - 96);
        }
        if (score > highScore) {
            highScore = score;
            highWord = word;                
        }
    }
    return highWord;
}

highestScoringWord("a b c d e f"); // "f"
highestScoringWord("hello world"); // "world"
highestScoringWord("go ahead make my day"); // "my"
highestScoringWord("there is no place like home"); // "there"
highestScoringWord("aaaaaa bbb cc f"); // "aaaaaa"
highestScoringWord("bbb cc f aaaaaa"); // "bbb"
highestScoringWord("this sentence has two highest scoring words"); // "sentence"



/* Write a function called beggars that accepts an array and a number. 
The function should return an array with the sum of what each beggar brings home, 
assuming they all take regular turns, from the first to the last.
For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], 
as the first one takes [1,3,5], the second collects [2,4].
The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3], 
as they will respectively take [1,4], [2,5] and [3].
Not all beggars have to take the same amount of "offers", 
meaning that the length of the array is not necessarily a multiple of n; 
length can be even shorter, in which case the last beggars will of course take nothing (0). */

function beggars(arr, num) {
    if (num === 0) {
        return [];
    }
    let resultArr = [];
    for (let j = 0; j < arr.length; j += num) {
        for (let k = 0; k < num; k++) {
            let temp = resultArr[k] || 0;
            // arr[j+k] may be undefined if arr.length % num !== 0.
            // "arr[j+k] || 0" will also cover the "num > arr.length" condition.
            resultArr[k] = temp + (arr[j+k] || 0);
        }
    }
    return resultArr;
}

// Another method using "new Array(n).fill(0)" and "i % n" as array index:
function beggars(values, n) {
    if(n === 0) return [];
    var start = new Array(n).fill(0);
    for (let i = 0; i < values.length; i++){
      start[i % n] += values[i];
    }
    return start;
}

beggars([1,2,3,4,5],1) // [15]
beggars([1,2,3,4,5],2) // [9,6]
beggars([1,2,3,4,5],3) // [5,7,3]
beggars([1,2,3,4,5],6) // [1,2,3,4,5,0]
beggars([1,2,3,4,5],0) // []
