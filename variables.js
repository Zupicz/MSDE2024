let firstName = 'Jakub'; //string
let lastName = "Zupko";
const COLOR_GREEN = `green`;
console.log(firstName, COLOR_GREEN);

let numberOfDonuts = 12; //number
let pi = 3.14;
let veryLargeNumber = 5569198189196n; //BigInt

let lovesCoding = true; //Boolean

let favoriteColor; //undefined

let favoriteFruit = null; //null

const uniqueKey = Symbol(); //Symbol

/*Object contains key: value pairs*/
let course = {
    name: 'JavaScript for Beginners',
    hours: 3
};
console.log(course.name, course.hours);
console.log(course['name'], course['hours']);

course['name'] = 'JavaScript 101';
console.log(course['name']);

let property = 'hours';
console.log(course[property]);

/* JavaScript is dynamically typed
You can reassing the data type of declared variable 
*/
let alpha = 'Alpha';
console.log(typeof alpha);

alpha = 1;
console.log(typeof alpha);

alpha = true;
console.log(typeof alpha);

// Arrays are used to store multiple values in a single variable (list of data)
let productColors = ['red', 'green', 'blue'];
console.log(productColors);
console.log(productColors[0]);

productColors[1] = 'yellow';
console.log(productColors[1]);

console.log(productColors.length);

//Functions
function sayHi(name) {
    console.log('Hi, ' + name +'!');
}

sayHi('Jakub');

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(2, 3));

// Arithmetic Operators
console.log(2 + 2); //addition
console.log(4 - 2); //substraction
console.log(2 * 3); //multiplication
console.log(8 / 2); // division
console.log(10 % 2); //modulo
console.log(3 ** 2); //exponent

//Increments and Decrements
let a = 10; 
a = a + 1; //11
a += 1; //12
a++; //13
++a; //14

let b = 10;
b = b - 1; //9
b -= 1; //8
b--; //7
--b; //6

let int1 = 5;
let result1 = int1++;
console.log(result1);
console.log(int1);

let int2 = 5;
let result2 = ++int2;
console.log(result2);
console.log(int2);

//Comparison Operators
let num1 = 14;
let num2 = 10;

const isNum1Greater = num1 > num2;
const isNum1GreaterOrEqualTo = num1 >= num2;
const isNum1Less = num1 < num2;
const isNum1LessOrEqualTo = num1 <= num2;

console.log(isNum1Greater);
console.log(isNum1GreaterOrEqualTo);
console.log(isNum1Less);
console.log(isNum1LessOrEqualTo);