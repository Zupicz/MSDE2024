// Even And Odd Numbers
/* Implement two functions.
For the first function, have it accept an array 
as a parameterwhich contains a list of numbers.
Then console log the even numbers in the array.

For the second function, have it accept an array
and log the odd numbers.
*/

function displayEvenNumbers(array) {
    for (const element of array) {
        if (element % 2 !== 0)
            continue;
        else
            console.log(element) 
    }
}

function displayOddNumbers(array) {
    for (const element of array) {
        if (element % 2 === 0)
            continue;
        else
            console.log(element) 
    }
}

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

displayEvenNumbers(numbers);
displayOddNumbers(numbers);