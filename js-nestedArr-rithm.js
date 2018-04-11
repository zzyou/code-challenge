/* Given the following array, 
write a function called printEvens 
that console.logs all of the even numbers */

var nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];

function printEvens() {
    for (let arr of nestedArr) {
        for (let num of arr) {
            if (num % 2 === 0) {
                console.log(num);
            }
        }
    }
}
printEvens();
// 2
// 4
// 6
// 8
// 10
// 12



/* Given the following array, 
write a function called sumTotal 
returns the sum of all numbers in the array */

var nestedArr = [[[1,2],[3,4]],[[5,6]]];

function sumTotal() {
    let sum = 0;
    for (let arr1 of nestedArr) {
        for (let arr2 of arr1) {
            for (let num of arr2) {
                sum += num;
            }
        }
    }
    return sum;
}
sumTotal();
// 21



/* Given the following array, 
write a function called countVowels, 
which returns the count of all of the vowels in each string regardless of case. 
To see if a value is an array, 
you can not use typeof since that will return 'object', 
so one way to do this is by using the Array.isArray function. */

var arr = []
Array.isArray(arr) // true
Array.isArray('Hello') // false


var nestedArr = ['Elie', ['Matt', ['Tim']],['Colt',['Whisky',['Janey'], 'Tom']], 'Lorien'];

function countVowels() {
    let count = 0;

    function checkVowel(str) {
        for (let letter of str) {
            if (/[aoeiu]/i.test(letter)) {
                count ++;
            }
        }
    }

    for (let arrA of nestedArr) {
        if (Array.isArray(arrA)) {
            for (let arrB of arrA) {
                if (Array.isArray(arrB)) {
                    for (let arrC of arrB) {
                        if (Array.isArray(arrC)) {
                            for (let string of arrC) {
                                checkVowel(string);
                            }
                        } else {
                            checkVowel(arrC);
                        }
                    }
                } else {
                    checkVowel(arrB);
                }
            }
        } else {
            checkVowel(arrA);
        }
    }

    return count;
}

// Another method using .toString() method:
function countVowels(arr) {
    var str = arr.toString();
    var count = 0;
    count = countCharacters(str, count);
    return count;
}

countVowels(); 
// 13
