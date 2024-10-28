//Equality Operators
let a = 2;
let b = '2';

console.log(a == b); //loose equality
console.log(a === b); //strict equality, compares data types

//Ternary Operator
let age = 16;
const canDrive = age >= 16 ? true : false; // (expression) ? (what to return if expression is true) : (what to return if expression is false) 
console.log(canDrive);

let points = 110;
const customerType = points > 100 ? 'gold' : 'silver';
console.log(customerType);

//Logical Operators
/* 
|| OR
&& AND
! NOT
?? null coalescing operator

AND has priority over OR
a && b || c && d = (a && b) || (c && d)
*/

let isCzechCitizen = false;
let isEUCitizen = true;

const withoutBorderCheck = isCzechCitizen || isEUCitizen;
console.log(withoutBorderCheck);

let isDivisibleBy2 = true;
let isDivisibleBy3 = true;

const isDivisibleBy6 = isDivisibleBy2 && isDivisibleBy3;
console.log(isDivisibleBy6);

let isClosedOnSunday = true;
const isRestaurantOpen = !isClosedOnSunday;
console.log(isRestaurantOpen);

let c = null;
const result = c ?? false; // ?? operator assigns a default value (in this case *false*) to a variable with null or undefined value, if variable is truthy, returns c
// const result = (c !== null && c !== undefined) ? c : false;

//Logical Operators with non-Booleans
/*
JavaScript evaluates non-Booleans with truthy or falsy (null, undefined, 0, "", NaN) values
*/

// let favoriteColor = 'blue';
let favoriteColor = '';
let defaultColor = 'green';
const currentWebsiteColor = favoriteColor || defaultColor;
console.log(currentWebsiteColor);