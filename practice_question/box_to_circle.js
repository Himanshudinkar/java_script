//Write a JavaScript program a box of size 560*700 When a mouse enters a box it converts into a circle.

function convert(){
    let selectbox = document.querySelector('#convert');
    selectbox.style.transition = "all 0.6s ease";
    selectbox.style.height = "700px";
    selectbox.style.width = "700px";
    selectbox.style.borderRadius = "50%"
}