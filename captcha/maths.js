let store = "";

function captcha1(){
    store=''

    let str = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    for(let i = 0; i < 6; i++)
    {
    let random = Math.random();
    let ans = random * str.length;
    let afterfloor = Math.floor(ans);
    let at = str.charAt(afterfloor);
    store = store + at;
    }

    let rend = document.querySelector('#rend');
    rend.innerHTML = `${store}`;

    
}

function captcha2() {
    let userInput = document.querySelector('#code').value;
    let output = document.querySelector('#output');

    if (userInput === store) {
        output.innerHTML = 'Captcha correct! Form submitted successfully.';
        output.style.color = 'green';
        return false; 
    } else {
        output.innerHTML = 'Incorrect captcha. Please try again.';
        output.style.color = 'red';
        return false; 
    }
}


