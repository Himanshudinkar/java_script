function validetion(){
    let fname = document.querySelector('#fname').value;
    console.log(fname);
    let lname = document.querySelector('#lname').value;
    console.log(lname);
    let email = document.querySelector('#email').value;
    console.log(email);

    if(fname === "")
    {
        document.querySelector('#errorfname').innerHTML = "please enter first name";
        let stylefname = document.querySelector('#fname');
        stylefname.style.outlineColor = "red";
        stylefname.style.borderColor = "red";

        return false;

    }
    else if(lname === "")
    {
        document.querySelector('#errorlname').innerHTML = "please enter last name";
        let stylelname = document.querySelector('#lname');
        stylelname.style.outlineColor = "red";
        stylelname.style.borderColor = "red";

        return false;
    }
    else if(email === "")
    {
        document.querySelector('#erroremail').innerHTML = "please enter your mail";
        let styleemail = document.querySelector('#email');
        styleemail.style.outlineColor = "red";
        styleemail.style.borderColor = "red";

        return false;
    }

}

function s(arg){
    let errorfield = document.querySelector(`#${arg}`);
    errorfield.style.borderColor = "black";
    errorfield.style.outlineColor = "black";

    let errorinput = document.querySelector(`#error${arg}`);
    errorinput.innerHTML = "";
}