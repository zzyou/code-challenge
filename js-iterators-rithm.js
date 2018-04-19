/* Part I */

/* Use the following object for this set of questions */

var users = [
    {
      username: 'larry',
      email: 'larry@foo.com',
      yearsExperience: 22.1,
      favoriteLanguages: ['Perl', 'Java', 'C++'],
      favoriteEditor: 'Vim',
      hobbies: ['Fishing', 'Sailing', 'Hiking'],
      hometown: {
        city: 'San Francisco',
        state: 'CA'
      }
    },
    {
      username: 'jane',
      email: 'jane@test.com',
      yearsExperience: 33.9,
      favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
      favoriteEditor: 'Emacs',
      hobbies: ['Swimming', 'Biking', 'Hiking'],
      hometown: {
        city: 'New York',
        state: 'NY'
      }
    },
    {
      username: 'sam',
      email: 'sam@test.com',
      yearsExperience: 8.2,
      favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
      favoriteEditor: 'Atom',
      hobbies: ['Golf', 'Cooking', 'Archery'],
      hometown: {
        city: 'Fargo',
        state: 'SD'
      }
    },
    {
      username: 'anne',
      email: 'anne@test.com',
      yearsExperience: 4,
      favoriteLanguages: ['C#', 'C++', 'F#'],
      favoriteEditor: 'Visual Studio Code',
      hobbies: ['Tennis', 'Biking', 'Archery'],
      hometown: {
        city: 'Albany',
        state: 'NY'
      }
    },
    {
      username: 'david',
      email: 'david@test.com',
      yearsExperience: 12.5,
      favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
      favoriteEditor: 'VS Code',
      hobbies: ['Volunteering', 'Biking', 'Coding'],
      hometown: {
        city: 'Los Angeles',
        state: 'CA'
      }
    }
  ];

/* Write a function called printEmails 
which console.log's each email for the users. */

function printEmails() {
    users.forEach(obj => {
        console.log(obj.email);
    });
}

printEmails();
// larry@foo.com
// jane@test.com
// sam@test.com
// anne@test.com
// david@test.com



/* Write a function called printHobbies 
which console.log's each hobby for each user. */

function printHobbies() {
    users.forEach(obj => {
        obj.hobbies.forEach(hobby => {
            console.log(`"${hobby}",`);
        });
    });
}

printHobbies();
// "Fishing",
// "Sailing",
// "Hiking",
// "Swimming",
// "Biking",
// "Hiking",
// "Golf",
// "Cooking",
// "Archery",
// "Tennis",
// "Biking",
// "Archery",
// "Volunteering",
// "Biking",
// "Coding",



/* Write a function called findHometownByState 
which returns the first user 
which has a hometown of the state that is passed in */

function findHometownByState(state) {
    return users.find(obj => obj.hometown.state === state);
}

findHometownByState('CA');
/*/
{
    username: "larry",
    email: "larry@foo.com",
    yearsExperience: 22.1,
    favoriteLanguages: ["Perl", "Scala", "C++"],
    favoriteEditor: "Vim",
    hobbies: ["Fishing", "Sailing", "Hiking"],
    hometown: {
        city: "San Francisco",
        state: "CA"
    }
}
/*/



/* Write a function called allLanguages 
which returns an array of all of the unique values */

function allLanguages() {
    return users.reduce((acc, obj) => {
        obj.favoriteLanguages.forEach(language => {
            if (!acc.includes(language)) {
                acc.push(language);
            }
        });
        return acc;
    }, []);
}

allLanguages();
// ["Perl", "Java", "C++","Haskell", "Clojure", "PHP","JavaScript","Ruby", "Python", "Go","C#", "F#", "Swift"]



/* Write a function called hasFavoriteEditor 
which returns a boolean 
if any of the users have the editor passed in */

function hasFavoriteEditor(editor) {
    return users.some(obj => obj.favoriteEditor === editor);
}

hasFavoriteEditor('VS Code'); // true
hasFavoriteEditor('Eclipse'); // false



/* Write a function called findByUsername 
which takes in a string 
and returns an object in the users array that has that username */

function findByUsername(name) {
    return users.find(obj => obj.username === name);
}

findByUsername('david');
/*/
{
    username: "david",
    email: "david@test.com",
    years_experience: 12.5,
    favorite_languages: ["JavaScript", "C#", "Swift"],
    favorite_editor: "VS Code",
    hobbies: ["Volunteering", "Biking", "Coding"],
    hometown: {
        city: "Los Angeles",
        state: "CA"
    }
}
/*/




/* Part II */

/* Write a function called vowelCount 
that accepts a string 
and returns an object with each key being the vowel 
and the value being the number of times the vowel occurs in the string 
(the order of keys in the object does not matter). */

function vowelCount(str) {
    let arr = str.toLowerCase().split('');
    return arr.reduce((acc, val) => {
        if (/[aoeiu]/.test(val)) {
            acc[val] = acc[val] + 1 || 1;
        }
        return acc;
    }, {});
}

vowelCount('incredible');
// {i:2, e: 2}
vowelCount('awesome');
// {a:1, e:2, o:1}



/* Write a function called removeVowels 
that accepts a string 
and returns an array of each character that is not a vowel 
(y should not count as a vowel for this function). */

function removeVowels(str) {
    let arr = str.toLowerCase().split('');
    return arr.filter(val => !/[aoeiu]/.test(val));
}

removeVowels('amazing'); // ["m","z","n","g"]
removeVowels('fun'); // ["f","n"]
removeVowels('silly'); // ["s","l","l","y"]
