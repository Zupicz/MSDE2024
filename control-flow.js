// If-Else Statements
let priceOfChocolate = 1.99;
let hasAmountInCash = 1.25;

const canBuyChocolate = hasAmountInCash >= priceOfChocolate;

if (canBuyChocolate) {
    console.log('Enjoy your purchase!')
} else {
    console.log('Sorry you do not have enough cash.')
}

let hour = 15;

if (hour >= 6 && hour <= 12) {
    console.log('Serving breakfast')
} else if (hour > 12 && hour <= 14) {
    console.log('Serving lunch')
} else {
    console.log('Serving dinner')
}

// Switch-Case Statements
let job = 'Cloud Engineer';

/*
if (job === 'Sowtware Developer') {
    console.log('Writes code');
} else if (job === 'Designer') {
    console.log('Makes user interface')
} else if (job === 'Cloud Engineer') {
    console.log('Manages cloud resorces')
} else {
    console.log('Works directly with customers')
}

If you find yourself writing repetitive if-else statements with comparison in each condition, refer instead to switch-case statements. */

switch (job) {
    case 'Software Developer':
        console.log('Writes code');
        break;
    case 'Designer':
        console.log('Makes user interface');
        break;
    case 'Cloud Engineer':
        console.log('Manages cloud resorces');
        break;
    default:
        console.log('Works directly with customers');
}

//For Loops
let numbers = [1, 2, 3, 4, 5, 6, 7];

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index])
}

// While Loops - use when you do not know the exact number of cycles beforehand
let numbers2 = [3, 4, 5, 6, 7, 8, 9];
let index2 = 0;

while (index2 < numbers2.length) {
    console.log(numbers2[index2]);
    index2++;
}

// Do-While Loops
/* Will execute at least once.
It first executes the code in Do block and then checks the condition,
to determine if the loop should continue.*/

let i = 0;

do {
    console.log(i);
    i++;
} while (i < 10)

//For-In Loops - used to iterate over an object
const course = {
    name: 'JavaScript for beginners',
    duration: 3,
    sections: 7
};

for (const key in course) {
    console.log(course[key]);
}

//For-Of Loops - used to iterate over an arrray
let numbers3 = [5, 6, 7, 8, 9, 10];

for (const element of numbers3) {
    console.log(element);
}

//Break Command - use to terminate a loop
const obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
    if (key === 'b') {
        break;
    }
    console.log(obj[key]);
}

//Continue command - use to skip over the current iteration of a loop and proceed to the next iteration
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}