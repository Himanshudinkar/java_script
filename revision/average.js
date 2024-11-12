function averagenumber(){
    let num1 = parseInt(document.querySelector('#num1').value);
    let num2 = parseInt(document.querySelector('#num2').value);
    let num3 = parseInt(document.querySelector('#num3').value);

    let sum = num1+num2+num3;
    let average = sum/3;

    let output = document.querySelector('#output');
    output.innerHTML = `The Average of three number is "${average}"`;

    return false;
}