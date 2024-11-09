// Write a JavaScript function that takes two variables, name and age, 
//and returns a sentence using template literals:

// "My name is [name] and I am [age] years old."

function templit(){
    let name = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;

    let output = document.querySelector('#output');
    output.innerHTML = `My name is "${name}" and I am "${age}" years old.`;

    return false;
