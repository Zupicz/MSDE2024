// Adding Elements to an Array
const numbers = [5, 4, 3, 2, 1, 3]; //const variables cannot be reassigned but can be modified

numbers.push(7, 8, 9); // adds elements at the end of array
numbers.unshift(25, 24); // adds elements at the begininng of array
numbers.splice(3, 0, 16, 17); // adds elements inside an array
console.log(numbers); // [25, 24, 5, 16, 17, 4, 3, 2, 1, 3, 7, 8, 9]

//Finding Elements
const indexOfThree = numbers.indexOf(3);
console.log(indexOfThree);

const lastIndexOfThree = numbers.lastIndexOf(3);
console.log(lastIndexOfThree);

const indexOfTen = numbers.indexOf(10);
console.log(indexOfTen);
console.log(numbers[indexOfTen]);

if (indexOfTen === -1) {
    console.log('10 is not found in the array.');
}

if (!numbers.includes(10)) {
    console.log('10 is not found in the array.');
}

// Finding References
const employees = [
    {
        id: 1,
        name: 'Jim'
    },
    {
        id: 2,
        name: 'Michael'
    },
    {
        id: 3,
        name: 'Pam'
    }
];

// .find is an array method used to find an object

/*
const employee = employees.find(function(e) {
    return e.name === 'Jim'
});
console.log(employee);
*/

// Arrow Functions

/*
function add(num1, num2) {
    return num1 + num2;
}
*/

// if the code-block only consists of one line, you can put everything on one line
const add = (num1, num2) => num1 + num2;

const employee = employees.find((e) => e.name === 'Jim');
console.log(employee);