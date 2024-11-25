// Removing elements from an array
// .pop() to remove from the end
// .splice() to remove from the middle
// .shift() to remove from the beginning

const numbers = [1, 2, 3, 4, 5];

const lastElement = numbers.pop();
// console.log(lastElement);

const firstElement = numbers.shift();
// console.log(lastElement);

const middleElement = numbers.splice(1, 1);
// console.log(middleElement);

// console.log(numbers);

// Emptying an Array

// numbers.length = 0;
// console.log(numbers);

numbers.splice(0, numbers.length);
// console.log(numbers);

let numbers2 = [2, 4, 6, 8, 10];
numbers2 = [];
// console.log(numbers2);

// Combining Arrays

const numbersA = [1, 2, 3];
const numbersB = [4, 5, 6];

const combinedArray = numbersA.concat(numbersB);
// console.log(combinedArray);

const firstSlice = combinedArray.slice(0, 4);
// console.log(firstSlice);

let combined = [...numbersA, 9, ...numbersB, 10];
// console.log(combined)

let a = [1, 2];
let b = [...a];
// console.log(b);

// Iterating over an Array

let numbersC = [1, 2, 3, 4, 5, 6, 7];

// numbersC.forEach(number => console.log(number));

// Converting an Array to a String

const joinedNumbers = numbersC.join(', ');
// console.log(joinedNumbers);

const courseName = 'JavaScript for Beginners';
const parts = courseName
    .toLowerCase()
    .split(' '); //method chaining can be used on the same data type
const url = parts.join('-');
// console.log(url);

// Sorting Arrays
let characters = ['c', 'd', 'b', 'a'];
// characters.sort(); // sorts in a descending order
characters.reverse(); // reverts the order of elements
// console.log(characters);

let employees = [
    {id: 1, name: 'Jen'}, // a
    {id: 2, name: 'Steven'}, // b
    {id: 3, name: 'Andrew'},
    {id: 4, name: 'Terry'},
]; 

// let's sort the objects alphabetically
// .sort needs a callback function to sort objects, you can define your own parameters, which represent the two compared objects, in this case a and b
// returning negative values means that a comes before b, returning 0 means that they are considered equal and in sorted order, returning positive value means that a comes after b
employees.sort((a, b) => {
    const lowercaseA = a.name.toLowerCase(); // JS evaluates characters based on their ASCII codes, we add .toLowerCase to avoid case specificity
    const lowercaseB = b.name.toLowerCase();

    if (lowercaseA < lowercaseB) return -1;
    if (lowercaseA > lowercaseB) return 1;
    return 0;
});

// Testing the Elements of an Array
const numbersD = [2, 4, 6, 8, 10];
const areAllEven = numbersD.every(number => {return number % 2 === 0}); // .every returns TRUE if all elements pass the condition
// console.log(areAllEven);

const numbersE = [1, 3, 5, 6, 7, 8, 9];
const hasOneEvenNumber = numbersD.some(number => {return number % 2 === 0});
// console.log(hasOneEvenNumber);

// Filtering an Array
// filters through an array and creates new array with elements that meet certain criteria
const evenNumbers = numbersE.filter(number => number % 2 === 0);
// console.log(evenNumbers);

let employees2 = [
    {id: 1, name: 'Alice', role: 'Developer'}, 
    {id: 2, name: 'Bob', role: 'Designer'}, 
    {id: 3, name: 'Charlie', role: 'Developer'},
    {id: 4, name: 'Danielle', role: 'Manager'},
]; 

const developers = employees2.filter(employee => employee.role === 'Developer');
// console.log(developers);

// Mapping an Array
// applies a function on every element of an array and returns a new array made from the altered elements (equivalent of apply() from R)
const squaredNumbers = numbersD.map(num => num * num);
// console.log(squaredNumbers);

const characters2 = ['a', 'b', 'c', 'd'];
const upperCaseCharacters = characters2.map(char => char.toUpperCase());
// console.log(upperCaseCharacters);

let employees3 = [
    {id: 1, name: 'Alice', email: 'AliCe@gmail.com'}, 
    {id: 2, name: 'Steven', email: 'STeVen@gmail.com'}, 
    {id: 3, name: 'Joe', email: 'JOE@gmail.com'},
]; 

const employeeEmails = employees3.map(employee => ({
    ...employee,
    email: employee.email.toLowerCase()
}));
// console.log(employeeEmails);

// Reducing an Array
// reduce iterates over each element of an array, applying a function that you define, and accumulates the results into a single value
const sum = numbersE.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);