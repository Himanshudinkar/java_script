//(1) Write a JavaScript program to calculate the average of three numbers.

function average(){

let number1 =  parseInt(window.prompt("enter number 1"))
let number2 =  parseInt(window.prompt("enter number 2"))
let number3 =  parseInt(window.prompt("enter number 3"))

let sum = number1 + number2 + number3;

let totel = sum / 3;

window.alert("average is = " + totel );

}
// average();

// (2) Write a JavaScript program to compare a three number which number is greater.

function greater(){

let number1 =  parseInt(window.prompt("enter number 1"))
let number2 =  parseInt(window.prompt("enter number 2"))
let number3 =  parseInt(window.prompt("enter number 3"))

if(number1 > number2 && number1 > number3)
{
    window.prompt("number 1 is greater = " + number1)
}

else if(number2 > number3 && number3 > number1)
{
    window.prompt("number 2 is greater = " + number2)
}

else if(number3 > number1 && number3 > number2)
{
    window.prompt("number 3 is greater = " + number3)
}
}

// greater();

// (3)Write a JavaScript program that takes user input of two numbers and add them

function add(){

let number1 =  parseInt(window.prompt("enter number 1"))
let number2 =  parseInt(window.prompt("enter number 2"))

window.alert("totel = " + (number1 + number2))
}

// add();

//(4) Write a JavaScript program to calculate sgst, cgst and total gst on user amount.

function gst(){

    let ammount = parseFloat(window.prompt("enter amout"));

    let sgstRate = parseFloat(window.prompt("enter sgst rate"));

    let cgstRate = parseFloat(window.prompt("enter cgst rate"));

    let totalGst = 0;

    sgstRate = (ammount * sgstRate) / 100;
    cgstRate = (ammount * cgstRate) / 100;

    totalGst = sgstRate + cgstRate;

    window.alert("Sgst = " + sgstRate);

    window.alert("Cgst = " + cgstRate);

    window.alert("totel gst = " + totalGst);
}
gst();