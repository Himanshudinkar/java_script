//(question) Write a JavaScript program to perform a form validation for email and name input field.

function validet(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;

    if(name === "")
    {
        let selectname = document.querySelector('#name');
        selectname.style.borderColor = "red";

        let selecterrorname = document.querySelector('#errorname');
        selecterrorname.innerHTML = "Please Entere Your Name"

        return false;
    }

    else if(email === "")
    {
        let selectemail = document.querySelector('#email');
        selectemail.style.borderColor = "red";

        let selecterroremail = document.querySelector('#erroremail');
        selecterroremail.innerHTML = "Please Enter Email";

        return false;
    }

    else if(!(email.includes('@') && email.includes('.com')))
    {
        let selectemail = document.querySelector('#email');
        selectemail.style.borderColor = "red";

        let selecterroremail = document.querySelector('#erroremail');
        selecterroremail.innerHTML = "Please Enter valid Email";

        return false;
    }
}

function removevalidet(){
    let removename = document.querySelector('#name');
    removename.style.borderColor = "black";

    let removeerrorname = document.querySelector('#errorname');
    removeerrorname.innerHTML = "";

    let removeemail = document.querySelector('#email');
    removeemail.style.borderColor = "black";

    let removeerroremail = document.querySelector('#erroremail');
    removeerroremail.innerHTML = "";
}