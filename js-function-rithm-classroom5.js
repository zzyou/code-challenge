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