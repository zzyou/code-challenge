/* Write a function called sayHello that takes in a string as a parameter. 
If the parameter passed to the function is your first name, it should return "Hello Boss", 
but if the parameter passed to the function is any other name, 
it should return the string "Hello" and the name parameter. */

function sayHello (name) {
  if (name === "Zhen") {
    return "Hello Boss";
  }
  return "Hello " + name;
}

sayHello("Tim");
sayHello("Zhen");


/* Write a function called average which accepts an array as a parameter. 
The function should return the average of all of the numbers in the array 
(you can assume that the array passed to the function will contain only numbers) */

function average(numArr) {
  return numArr.reduce((acc, cur) => acc + cur)/numArr.length;
}

average([1,2,3,4,5]);
average([1,2,3,4,5,6]);
average([10,20]);


/* Write a function called createStudent, which accepts two parameters both of which are strings. 
The function should return an object with the keys firstName and lastName 
and the values should be each of the parameters. */

function createStudent (fname, lname) {
  return {
    firstName: fName,
    lastName: lName
  };
}


/* Using your createStudent function, create three students and save them each in a variable. 
Then create a variable called students, which is an array that will store your three students */

var elie = createStudent("Elie", "Schoppik");
var tim = createStudent("Tim", "Garcia");
var matt = createStudent("Matt", "Lane");

var students = [tim, matt, elie];


/* Write a function called findStudentByFirstName, which accepts one parameter, a string. 
This function should iterate through the students array you just made 
and if the parameter passed to the function is the same as one of the first name's of the students, 
the function should return true. 
Otherwise it should return false. 
This function should be case insensitive so that you can search successfully regardless of capitalization */

function findStudentByFirstName (str) {
  for (let student of students) {
    if (student.firstName.toLowerCase() === str.toLowerCase()) {
      return true;
    }
  }
  return false;
}

findStudentByFirstName('elie');
findStudentByFirstName('Janey');
findStudentByFirstName('TIM');
findStudentByFirstName('MMMaaaTTTtttTTT');


/* Write a function called extractEveryThird which accepts an array as a parameter. 
The function should iterate over the array 
and return a new array with every 3rd element in the array passed to the function. */

function extractEveryThird (arr) {
  var newArr = [];
  // // Another way to write the for loop.
  // for (let e of arr) {
  //   if ((arr.indexOf(e) + 1) % 3 === 0) {
  //     newArr.push(e);
  //   }
  // }
  for (let i = 2; i < arr.length; i += 3) {
    newArr.push(arr[i]);
  }
  return newArr;
}

extractEveryThird([1,2,3]);
extractEveryThird([1,2,3,4,5,6]);
extractEveryThird(["a","b","c","d"]);
extractEveryThird(["first value", "second value", "third value"]);


/* Write a function called countEvensAndOdds which accepts an array as a parameter. 
This function should return an object with the count of even numbers and the count of odd numbers. 
The object returned should have the keys oddCount and evenCount. */

function countEvensAndOdds (arr) {
  var obj = {
    oddCount: 0,
    evenCount: 0
  }
  for (let e of arr) {
    if (e % 2 === 0) {
      obj.evenCount ++;
    }
    else {
      obj.oddCount ++;
    }
  }
  return obj;
}

countEvensAndOdds([1,2,3,4]);
countEvensAndOdds([1,2,3,4,5,6,7]);


/* Write a function called onlyCapitalLetters which accepts a string 
and returns a new string with only the capital letters passed to the string. */

function onlyCapitalLetters(str) {
  var newStr = '';
  for (let cha of str) {
    if (str.toUpperCase().includes(cha)) {
      newStr += cha;
    }
  }
  // // Another way to write the for loop.
  // for (let i = 0; i < str.length; i++) {
  //     if (64 < str.charCodeAt(i) < 91) {
  //       newStr += str[i];
  //   }    
  // }
  return newStr;
}

onlyCapitalLetters("Amazing");
onlyCapitalLetters("nothing");
onlyCapitalLetters("EVERYTHING");



/* Question Credit: Rithm School
https://www.rithmschool.com/courses/javascript */