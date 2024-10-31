const dog = {
    name: 'Max',
    breed: 'Dachshund',
    age: 5,
    weightInPounds: 12,
    eat: function() {
        console.log('Chomp!');
    },
    bark() {
        console.log('Woof!');
    }
}

// object store states and behaviour
// function inside an object is called a 'method'
// if key and value are the same (name: name), we can abbreviate to just 'name'

/*
function getDog(name, breed, age, weightInPounds) {
    return {
        name,
        breed,
        age,
        weightInPounds,
        eat() {
            console.log('Chomp!');
        },
        bark() {
            console.log('Woof!');
        }
    }
}

const anotherDog = getDog('Marley', 'Chocolate Lab', 3, 60);
console.log(anotherDog);
*/

// constructor functions use PascalNotation and nouns instead of verbs for names
// 'this' is a special keyword that means 'this object'

function Dog(name, breed, age, weightInPounds) {
    // this = {};

    // Add properties and methods to this
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weightInPounds = weightInPounds;

    this.eat = function() {
        console.log(this.name + ': Chomp!');
    }

    this.bark = function() {
        console.log(this.name + ': Woof!');
    }

    // return this;
}

const anotherDog = new Dog('Marley', 'Chocolate Lab', 3, 60);
console.log(anotherDog);

// objects are dynamic
const person = {
    name: 'Steven'
};

// console.log(person)

person.favoriteFood = 'tacos';
person['favoriteIceCream'] = 'Chocolate';
console.log(person);

delete person.favoriteIceCream;
console.log(person);

person.eat = function() {
    console.log('start eating');
}

person.eat();

// functions in JavaScript are treated as objects

// primitive types are passed on as a copy (that points to a different place in memory)
// objects are passed on as referecne
let a = 10;
let b = a;

a = 20;

console.log(a);
console.log(b);

let c = {value: 20};
let d = c;

c.value = 100;

console.log(c);
console.log(d);

// enumerating properties of an object

/*
for (const key in dog) {
    console.log(dog[key]);
}
*/

const keys = Object.keys(dog);
// console.log(keys);

const values = Object.values(dog);
// console.log(values);

const entries = Object.entries(dog);
// console.log(entries);

for (const key of Object.keys(dog)) {
    console.log(key);
}

for (const value of Object.values(dog)) {
    console.log(value);
}

for (const entry of Object.entries(dog)) {
    console.log(entry);
}

// Cloning An Object
let e = {value: 10};
let f = {...e};

//Object.assign(f, e);
f.value = 20;

console.log(e);
console.log(f);

// explore Math functions at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math