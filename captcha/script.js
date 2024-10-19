let sumrend = 0;

function Captcha1() {
    let rend1 = Math.floor(Math.random() * 10) + 1;
    let rend2 = Math.floor(Math.random() * 10) + 1;

    sumrend = rend1 + rend2; 

    let captcharend = document.querySelector('#rend');
    captcharend.innerHTML = `${rend1} + ${rend2} = ?`;
}

function Captcha2() {
    let userInput = parseInt(document.querySelector('#code').value);
    let output = document.querySelector('#output');

    if (userInput === sumrend) {
        output.innerHTML = 'Captcha correct! Form submitted successfully.';
        output.style.color = 'green';
        return false; 
    } else {
        output.innerHTML = 'Incorrect captcha. Please try again.';
        output.style.color = 'red';
        Captcha1(); 
        return false; 
    }
}
