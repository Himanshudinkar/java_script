// Create a JavaScript program that calculates the sum of two numbers, a and b, 
// and then logs the result using a template literal in the following format:

// "The sum of [a] and [b] is [sum]."

function cals(){
    let number1 = parseInt(window.prompt('Enter number 1'));
    let number2 = parseInt(window.prompt('Enter number 2'));

    let sum = number1 + number2;

    let output = document.querySelector('#output');
    output.innerHTML = `The sum of ${number1} and ${number2} is ${sum}`;
}

cals();