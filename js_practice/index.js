function login(){
    let name = document.querySelector('#name').value;
    let mobile = document.querySelector('#mobile').value;
    let email = document.querySelector('#email').value;
    let psw = document.querySelector('#psw').value;
    let cpsw = document.querySelector('#cpsw').value;

    if(name === "")
    {
        let selectname = document.querySelector('#name');
        selectname.style.borderColor = "red";
        selectname.style.outlineColor = "red";

        let selecterrorname = document.querySelector('#errorname');
        selecterrorname.innerHTML = "plz enter your name";

        return false;
    }

    else if(mobile == "")
    {
        let selectmobile = document.querySelector('#mobile');
        selectmobile.style.borderColor = "red";
        selectmobile.style.outlineColor = "red";

        let selecterrormobile = document.querySelector('#errormobile');
        selecterrormobile.innerHTML = "plse enter your mobile";

        return false;
    }

    else if( !(mobile.length === 10))
    {
        let selectmobile = document.querySelector('#mobile');
        selectmobile.style.borderColor = "red";
        selectmobile.style.outlineColor = "red";

        let selecterrormobile = document.querySelector('#errormobile');
        selecterrormobile.innerHTML = "mobile number shoud be 10 digits";

        return false;
    }

    else if(isNaN(mobile))
    {
        let selectmobile = document.querySelector('#mobile');
        selectmobile.style.borderColor = "red";
        selectmobile.style.outlineColor = "red";

        let selecterrormobile = document.querySelector('#errormobile');
        selecterrormobile.innerHTML = "mobile number only number";

        return false;
    }

    else if(email === "")
    {
        let selectemail = document.querySelector('#email');
        selectemail.style.borderColor = "red";
        selectemail.style.outlineColor = "red";

        let selecterroremail = document.querySelector('#erroremail');
        selecterroremail.innerHTML = "plz enter email address";

        return false;
    }

    else if ( !(email.includes('@') && email.includes('.com')))
    {
        let selectemail = document.querySelector('#email');
        selectemail.style.borderColor = "red";
        selectemail.style.outlineColor = "red";

        let selecterroremail = document.querySelector('#erroremail');
        selecterroremail.innerHTML = "plz enter valid email address";

        return false;
    }

    else if(psw === "")
    {
        let selectpsw = document.querySelector('#psw');
        selectpsw.style.borderColor = "red";
        selectpsw.style.outlineColor = "red";

        let selecterrorpsw = document.querySelector('#errorpsw');
        selecterrorpsw.innerHTML = "plz enter password";

        return false;
    }
    else if(!
        (
            psw.match(/[1234567890]/)
            &&
            psw.match(/[!@#$%^&*()_+]/)
            &&
            psw.match(/[QWERTYUIOPASDFGHJKKKLZXCVBNM]/)
            &&
            psw.match(/[qwertyuiopasdfghjklzxcvbnm]/)
        )
    )
    {
        let selectpsw = document.querySelector('#psw');
        selectpsw.style.borderColor = "red";
        selectpsw.style.outlineColor = "red";

        let selecterrorpsw = document.querySelector('#errorpsw');
        selecterrorpsw.innerHTML = "plz enter strong password";

        return false;
    }

    else if(cpsw !== psw)
    {
       window.alert("enter correct confirm password");
       document.querySelector('#cpsw').value = "";
       document.querySelector('#psw').value = "";
       document.querySelector('#psw').focus();

        return false;
    }

}

function remove(){
    let selectremove = document.querySelector('#name');
    selectremove.style.borderColor = "black";
    selectremove.style.outlineColor = "black";

    let selecterrorremove = document.querySelector('#errorname');
    selecterrorremove.innerHTML = "";

}