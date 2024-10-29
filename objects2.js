// String Methods
const name = 'Steven';
let sentence = 'A new sentence.';

const doesIncludeNew = sentence.includes('new'); // true
const startsWithA = sentence.startsWith('A'); // true
const endsWithA = sentence.endsWith('A'); // false
console.log(sentence[3]); // 'e'

let updatedSentence = sentence.replace('new', 'short');
console.log(updatedSentence);

let exampleSentence = ' A sentence with spaces at the beginning and end. '
let trimmedSentence = exampleSentence.trim();
console.log(trimmedSentence);

const wordsInSentence = sentence.split(' ');
console.log(wordsInSentence);

let email = 'TesTEmail@gmail.com';

let lowerCaseEmail = email.toLowerCase();
console.log(lowerCaseEmail);

let upperCaseEmail = email.toUpperCase();
console.log(upperCaseEmail);

// Template Literals - are created using backticks ``
let firstName = 'Steven';
let lastName = 'Garcia'

// let fullName = firstName + ' ' + lastName
let fullName = `${firstName} ${lastName}`;
console.log(fullName);