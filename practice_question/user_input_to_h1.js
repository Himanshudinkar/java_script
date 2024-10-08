//Write a JavaScript program to take user input and print output in screen in h1 tag.

function convert(){
    let userin = window.prompt("Enter your Input");

    let output = document.querySelector('#change');
    output.innerHTML =  userin;
}
convert();