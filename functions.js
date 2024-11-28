// Function Declaration Syntax
function sayHi() {
    console.log('Hi');
}

// sayHi();

// Function Expression Syntax
let greeting = function() {
    console.log('Hi');
}

// greeting();

// Hoisting Functions
// JS automatically moves all function declarations to the top of the enclosing scope before executing code
// this does NOT work for function expressions

// add(2, 2);

/* works
function add(num1, num2) {
    console.log(num1 + num2);
}
*/

/* doesn't work
let add = function(num1, num2) {
    console.log(num1 + num2);
}
*/

// Arguments
// every function in JS has access to a special object called arguments
function multiply(num1, num2) {
    let product = 1;
    for (const num of arguments)
        product *= num;
    return product;
}

// console.log(multiply(2, 2, 4, 3)); // this function can support any number of arguments

// The Rest Operator
// spread operator refresher:
let course = {
    name: 'JavaScript for Beginners',
    duration: '3 hours'
};

let newCourse = {
    ...course,
    name: 'JavaScript Pro'
};
//console.log(newCourse);

// rest operator lets us to define function value for unspecified number of arguments
function multi(...args) {
    return args.reduce((accumulator, currentValue) => accumulator * currentValue);
}

// console.log(multi(1, 2, 3, 4));

function multiple(multiplier, ...numbers) {
    return numbers.map(number => number * multiplier);
}

// console.log(multiple(2, 1, 2, 3, 4));

// Default Parameters
function writeCode(language = 'JavaScript') {
    console.log(`Write code in ${language}`);
}

/*
writeCode('JavaScript');
writeCode('C#');
writeCode(); // undefined if we don't specify default parameters, now returns 'JavaScript'
*/

function codeDetails(language = 'JavaScript', tool = 'VS Code') {
    console.log(`Writing code in ${language} using ${tool}.`);
}

/*
codeDetails();
codeDetails('Python');
codeDetails('C#', 'Visual Studio');
*/

// Getters and Setters
// getter formats and returns the lesson information
// setter for details takes a string, splits it, and updates both the name and duration of the object
// getters and setters allow us to modify the lessons details in a controlled manner
let lesson = {
    name: 'JavaScript for Beginners',
    duration: '3 hours',
    get details() {
        return `${this.name} is ${this.duration} long`;
    },
    set details(value) {
        let parts = value.split(' is ');
        this.name = parts[0];
        this.duration = parts[1];
    }
};

/*
console.log(`${course.name} is ${course.duration} long`);
console.log(lesson.details); // we can access details as a object property

lesson.details = 'JavaScript Pro is 10 hours';
console.log(lesson.details);
*/

// Try and Catch (airhandling)
let newLesson = {
    name: 'JavaScript for Beginners',
    duration: '3 hours',
    get details() {
        return `${this.name} is ${this.duration} long`;
    },
    // we have no guarantee that the following value is a string
    set details(value) {
        if (typeof value !== 'string') {
            throw new Error(`Value ${value} is not a string`);
        }

        let parts = value.split(' is ');
        this.name = parts[0];
        this.duration = parts[1];
    }
};

// try-catch block catches the thrown error, enabling us to handle it and log it to the console without stopping the program
/*
try {
    newLesson.details = 42;
} catch (exception) {
    console.log(`Caught an error: ${exception.message}`);
}
*/

// Local vs Global Scope
const firstName = 'Steven'; // global scope, any script or function can access it
// console.log(firstName);

// local scope variables are declared within a block, function or conditional, they are only accessible within the confines of their curly braces
// use local scope whenever possible to avoud global clutter
{
    const lastName = 'Garcia';
}
// console.log(lastName); // reference error

// 'this' Keyword
const JScourse = {
    name: 'JavaScript for beginners',
    start() {
        console.log(this.name);
    }
}

// JScourse.start(); // outputs the object property

function startVideo() {
    console.log(this);
}

// startVideo(); // outputs the global object

const anotherCourse = {
    name: 'ES6 syntax',
    start: () => {
        console.log(this.name); // for arrow functions 'this' inherits from parent scope
    }
}

// anotherCourse.start(); // returns undefined since parent is the global object with no name property 

function introduce(language) {
    console.log(this.name + ' teaches ' + language);
}

const instructor = {name: 'Steven'};
const introduction = introduce.bind(instructor); // binds the name property to an object
introduction('JavaScript');