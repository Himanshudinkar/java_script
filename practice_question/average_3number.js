function avverage(){
    let number1 = parseInt(document.querySelector('#number1').value);
    let number2 = parseInt(document.querySelector('#number3').value);
    let number3 = parseInt(document.querySelector('#number3').value);

    let sum = number1 + number2 + number3;

    let average = sum/3;
   
    let result = document.querySelector('#result');
    result.innerHTML = `Result is = "${average}"`

    return false;
}