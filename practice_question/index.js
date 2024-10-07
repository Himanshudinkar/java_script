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
// gst();

//(5) Write a JavaScript program to calculate tax on salary-
      //If the salary is less than 3 lakh it should not want to pay tax.
      //If the salary is greater or equal to 3 lakh and less than 7.5 lakh it should pay 10 percent tax on that.
      //If the salary is greater or equal to 7.5 lakh it should pay 20 percent tax on that.

      function salaryCalculate(){

      let salary = parseFloat(window.prompt("enter your salary"));

      let totelSalary = 0;

      if(salary < 300000)
      {
        window.alert("it should not want to payu tax");
      }

      else if(salary >= 300000 && salary < 750000)
      {
        window.alert("it should pay 10 % tax");
        totelSalary = salary * 0.10;
        window.alert("totale tax is = " + totelSalary);
      }

      else if(salary >= 750000)
      {
        window.alert("it should pay 20 % tax");
        totelSalary = salary * 0.20;
        window.alert("totale tax is= " + totelSalary);
      }
      
    }

salaryCalculate();