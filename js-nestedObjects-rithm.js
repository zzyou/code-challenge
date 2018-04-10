/* let's try to write some functions that operate on this nested data structure. */

var instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};


/* Write a function called displayCities 
that console.logs all the values in the citiesLivedIn array. */

function displayCities() {
    let cityArr = instructorData.additionalData.moreDetails.citiesLivedIn;
    for (let e of cityArr) {
        console.log(e);
    }
}

displayCities();
// "Seattle"
// "Providence"
// "New York"



/* Write a function called displayHometownData 
that console.logs all the values inside of the hometown object. */

function displayHometownData() {
    const hometownObj = instructorData.additionalData.moreDetails.hometown;
    for (let key in hometownObj) {
        console.log(hometownObj[key]);
    }
}

displayHometownData();
// "West Orange"
// "NJ"



/* Let's write a function called addDetail that accepts two parameters, 
a key and a value and adds the key and value to the moreDetails object 
and returns the moreDetails object. */

function addDetail(key, value) {
    let detailsObj = instructorData.additionalData.moreDetails;
    detailsObj[key] = value;
    return detailsObj;
}

addDetail("isHilarious", true);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
}
*/
addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
    previousApartments: ["Mission", "North Beach", "Nob Hill"]
}
*/



/* let's write a function called removeDetail 
that removes a key in the moreDetails object 
and returns the moreDetails object 
(the new keys added above are not included in these examples). */

function removeDetail(key) {
    let detailsObj = instructorData.additionalData.moreDetails;
    delete detailsObj[key];
    return detailsObj;
}

removeDetail('citiesLivedIn');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    }
}
*/
removeDetail('hometown');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true
}
*/
removeDetail('favoriteBasketballTeam');
/*
{
    numberOfSiblings: 3,
    isYoungest: true
}
*/
