// Max of two numbers
/* Implement a function to accept two numbers and returns the greater number. */

function maxOfTwoNumbers(number1 , number2) {
    if (number1 > number2) {
        return number1;
    } else if (number2 > number1) {
        return number2;
    } else {
        return 'Both numbers are equal.';
    }
}

console.log(maxOfTwoNumbers(64, 64))

/* Official solution

function maxNum(num1, num2) {
    return num1 >= num2 ? num1 : num2;
}

*/