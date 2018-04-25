/* Write a function called findTwins, which accepts an array of integers and finds two of same numbers 
and returns the number that is repeated twice. 
The function should return null if there is not a number repeated twice. */

function findTwins(arr) {
    var newArr = Array.from(arr);
    for (let i = 0; i < arr.length; i ++) {
        // If splice on the original arr, the arr becomes shorter.
        // but i still increase as usual, so the later for loop will escape some elements inside of the arr.
        // If splice on newArr, i also increase as usual, while newArr becomes shorter (i greater than the actural index).
        // I can just use shift(), which will just shift the first item of the changing newArr.
        newArr.shift();
        if (newArr.includes(arr[i])) {
            return arr[i];
        }
    }
    return null;
}

// Another method using obj:
function findTwins(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = (obj[arr[i]] || 0) + 1
    }
    for (var key in obj) {
      if(obj[key] > 1) return +key
    }
    return null
  }

findTwins([4,1,6,1,5]) // 1
findTwins([2,3,6,34,7,8,2]) // 2
findTwins([3,6,9,2,4,3,1,0]) // 3
findTwins([]) // null
findTwins([3,1,4,2,5]) // null



/* Write a function generatePairs that accepts an integer 
and generates an array containing the pairs of integers [a, b]. 
The pairs should be sorted by increasing values of a then increasing values of b. */

function generatePairs(int) {
    if (int < 0) {
        return;
    }
    let arr = [];
    for (let i = 0; i <= int; i++) {
        for (let j = i; j <= int; j++) {
            arr.push([i, j]);
        }
    }
    return arr;
}

generatePairs(3) // [ [0, 0], [0, 1], [0, 2], [0, 3], [1, 1], [1, 2], [1, 3], [2, 2], [2, 3], [3, 3] ]
generatePairs(2) // [ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]
generatePairs(1) // [ [0, 0], [0, 1], [1,1]]
generatePairs(0) // [ [0, 0]]



/* A clerk works at a movie theater where each ticket costs $25. 
There is a line of people waiting to buy tickets, 
and each one has a single $100, $50, or $25 bill. 
The clerk wants to sell a ticket to every person in the line. 
For each input, can she sell a ticket to everyone and give change 
if she starts with no money and has to go through the line in order? 
If so, your function should return "YES." 
If not, it should return "NO."
Write a function called canSellTickets based on the above scenario. 
Note that for any person in line, the clerk does not know the values of all future bills. 
The clerk simply tries to make change using whatever she has at the time 
and favors getting rid of larger bills first. */

function canSellTickets(arr) {
    let twentyfive = [];
    let fifty = [];
    for (let money of arr) {
        if (money === 25) {
            twentyfive.push(25);
        }
        else if (money === 50) {
            if (twentyfive.length >= 1) {
                twentyfive.length --;
                fifty.push(50);
            } 
            else {
                return "NO";
            }
        }
        else if (money === 100) {
            if (fifty.length >= 1 && twentyfive.length >= 1) {
                fifty.length --;
                twentyfive.length --;
            } 
            else if (twentyfive.length >= 3) {
                twentyfive.length -= 3;
            }
            else {
                return "NO";
            }
        }
    }
    return "YES";
}

// Another method using object instead of array:
function canSellTickets(peopleInLine) {
    const bills = { '25': 0, '50': 0, '100': 0 };
    for (let money of peopleInLine) {
      bills[money] += 1;       
      if (money === 50) {
        bills[25] -= 1;
      } else if (money === 100) {
        if (bills[50] > 0) {
          bills[50] -= 1;
          bills[25] -= 1;
        } else {
          bills[25] -= 3;
        }
      }
      if (bills[25] < 0) {
        return 'NO';
      }
    }
    return 'YES';
  }

canSellTickets([]); // "YES"
canSellTickets([25]); // "YES"
canSellTickets([50]); // "NO"
canSellTickets([100]); // "NO"
canSellTickets([25, 50]); // "YES"
canSellTickets([25, 100]); // "NO"
canSellTickets([25, 25, 25, 25, 50, 100]); // "YES"
canSellTickets([25, 25, 50, 100]); // "YES"
canSellTickets([25, 25, 25, 100]); // "YES"
canSellTickets([25, 50, 50, 25]); // "NO"
canSellTickets([25, 50, 25, 100, 25, 25, 25, 50, 50, 100]); // "YES"
canSellTickets([25, 50, 25, 100, 25, 25, 25, 50, 100, 100]); // "NO"
