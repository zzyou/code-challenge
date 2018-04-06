/* Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits 
that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example: 
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice */

function duplicates(str) {
    let obj = {};
    for (let c of str) {
        let key = c.toLowerCase();
        obj[key] = (obj[key] + 1) || 1;
    }
    let count = 0;
    for (let k in obj) {
        if (obj[k] > 1) {
            count ++;
        }
    }
    return count;
}

// use Array.reduce():
function duplicates(str) {
    let arr = str.toLowerCase().split('');
    let countObj = arr.reduce((obj, key) => {
        obj[key] = obj[key] + 1 || 1;
        return obj;
    }, {});
    let count = 0;
    for (let k in countObj) {
        if (countObj[k] > 1) {
            count ++;
        }
    }
    return count;
}

duplicates("abcde"); // 0 # no characters repeats more than once
duplicates("aabbcde"); // 2 # 'a' and 'b'
duplicates("aabBcde"); // 2 # 'a' occurs twice and 'b' twice (bandB)
duplicates("indivisibility"); // 1 # 'i' occurs six times
duplicates("Indivisibilities"); // 2 # 'i' occurs seven times and 's' occurs twice
