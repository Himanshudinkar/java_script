function validetion(){
    let fname = document.querySelector('#fname').value;
    console.log(fname);
    let lname = document.querySelector('#lname').value;
    console.log(lname);
    let mobile = document.querySelector('#mobile').value
    console.log(mobile);
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
    else if(mobile === "")
    {
        document.querySelector('#errormobile').innerHTML = "please enter mobile number";
        let selectmobile = document.querySelector('#mobile');
        selectmobile.style.borderColor = "red";
        selectmobile.style.outlineColor = "red";

        return false;
    }
    else if(mobile.length !== 10)
    {
        document.querySelector('#errormobile').innerHTML = "mobile number should be 10 digits";
        let selectmobile = document.querySelector('#mobile');
        selectmobile.style.borderColor = "red";
        selectmobile.style.outlineColor = "red";
        return false;
    }
    else if(isNaN(mobile))
    {
        document.querySelector('#errormobile').innerHTML = "mobile number should be number";
        let selectmobile = document.querySelector('#mobile');
        selectmobile.style.borderColor = "red";
        selectmobile.style.outlineColor = "red";
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
    else if(!(email.includes('@') && email.includes('.com')))
    {
         document.querySelector('#erroremail').innerHTML = "please enter valid mail";
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

function styling(){
    let selectstyle = document.querySelector('#fname');
    selectstyle.style.padding = "60px";
    selectstyle.style.marginLeft = "120px";
}

function typing(){
    let selecttype = document.querySelector('#lname');
    selecttype.type = "radio";
}