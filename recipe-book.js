// Object-Oriented Programming (OOP)
// Higher-Order Function

function Recipe(title, ingredientList, instruction, cookingTime) {
  this.title = title;
  this.ingredientList = ingredientList;
  this.instruction = instruction;
  this.cookingTime = cookingTime;
  // // this way you get a copy of this function in every instance of Recipe.

  // this.printIngredientList = function () {
  //   console.log(this.ingredientList);
  // }
}


// This way is better than writing the function as above.
// There is only ever one copy of the function.

Recipe.prototype.printIngredientList = function () {
  console.log(this.ingredientList);
};

var grilledCheese = new Recipe('Grilled Cheese', ['bread', 'cheese', 'butter'], 'Put butter in pan, put cheese between two slices of bread, and put bread in the pan', 15);


// // good old fashioned js object.
// // only useful if you only want one copy of this object.

// var grilledCheese2 = {
//   title: 'Grilled Cheese',
//   // this will overwrite the parent class's same function.
//   printIngredientList: function() {
//     console.log("stuff");
//   }
// };


// console.log(grilledCheese);
// console.log(grilledCheese2);
// grilledCheese2.printIngredientList();


var chocolateChipCookie = new Recipe('Chocolate Chip Cookie', ['chocolate', 'chip', 'flour', 'butter'], 'Put chocolate and chip and butter in flour, put flour in the oven.', 20);
var salad = new Recipe('Salad', ['olive oil', 'vegetable'], 'put olive oil in vegetable', 5);

var recipes = [grilledCheese, chocolateChipCookie, salad];


// sum of all the cooking times.
// need default 0 sine the first item in list is an object, not a number.
var time = recipes.reduce(function(prev, curr) {
  return prev + curr.cookingTime;
}, 0);
console.log(time);


var butterRecipes = recipes.filter(function(recipe) {
  return recipe.ingredientList.includes('butter');
});
// console.log(butterRecipes);

// var printTitle = function(recipe) {
//   console.log(recipe.title);
// };
// butterRecipes.forEach(printTitle);

butterRecipes.forEach(recipe => console.log(recipe.title));

// // Old way:
// for (let i = 0; i < butterRecipes.length; i++) {
//   console.log(butterRecipes[i].title);
// };

butterRecipes.forEach(function(recipe, index, arr) {
  console.log(index, recipe.title, arr);
});


// sum the numbers:
var numList = [4, 7, 3, 5];
// var total = 0;
// for (let num of numList) {
//   total += num;
// };
// console.log(total);


// ok not to give default because the first item is a number.

var total = numList.reduce(function(prev, curr) {
  return prev + curr;
});
console.log(total);
