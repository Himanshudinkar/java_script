//(question)Write a JavaScript program when click on button image change

function imagechange()
{
    let change = document.querySelector('#photo');
    change.src = "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp";
}

function previousimage(){
    let change = document.querySelector('#photo');
    change.src = "https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg";
}