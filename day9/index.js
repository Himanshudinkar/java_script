function data(){
    let name = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;
    let email = document.querySelector('#email').value;

    console.log(name);
    console.log(age);
    console.log(email);

    if(name === "")
    {
        window.alert("Please Enter First Name");
    }

    return false;
}