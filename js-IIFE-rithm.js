/*Write a function called displayFullName, which should accept two parameters, firstName and lastName. 
The function should be immediately invoked and return the firstName + lastName. 
You should NOT have to call this function, it should invoke right away. */

(function displayFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
})('Zhenzhen', 'You');



/* Write a function called createCalculator, 
which should return an object that has four methods, add, subtract, multiply and divide. */

function createCalculator() {
    return {
        add: (a, b) => {
            return a + b;
        },
        subtract: (a, b) => {
            return a - b;
        },
        multiply: (a, b) => {
            return a * b;
        },
        divide: (a, b) => {
            return a / b;
        }
    };
}

var calc = createCalculator();
calc.add(20,20); // 40
calc.subtract(2,2); // 0
calc.multiply(2,2); // 4
calc.divide(12,2); // 6
