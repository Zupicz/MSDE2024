// Removing elements from an array
// .pop() to remove from the end
// .splice() to remove from the middle
// .shift() to remove from the beginning

const numbers = [1, 2, 3, 4, 5];

const lastElement = numbers.pop();
console.log(lastElement);

const firstElement = numbers.shift();
console.log(lastElement);

const middleElement = numbers.splice(1, 1);
console.log(middleElement);

console.log(numbers);

// Emptying an Array

// numbers.length = 0;
// console.log(numbers);

numbers.splice(0, numbers.length);
console.log(numbers);

let numbers2 = [2, 4, 6, 8, 10];
numbers2 = [];
console.log(numbers2);

// Combining Arrays

const numbersA = [1, 2, 3];
const numbersB = [4, 5, 6];

const combinedArray = numbersA.concat(numbersB);
console.log(combinedArray);

const firstSlice = combinedArray.slice(0, 4);
console.log(firstSlice);

let combined = [...numbersA, 9, ...numbersB, 10];
console.log(combined)

let a = [1, 2];
let b = [...a];
console.log(b);

// Iterating over an Array

let numbersC = [1, 2, 3, 4, 5, 6, 7];

numbersC.forEach(number => console.log(number));

// Converting an Array to a String

const joinedNumbers = numbersC.join(', ');
console.log(joinedNumbers);

const courseName = 'JavaScript for Beginners';
const parts = courseName.toLowerCase().split(' '); //method chaining can be used on the same data type
const url = parts.join('-');
console.log(url);