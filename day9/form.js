function data(){
    let fname = document.querySelector('#fname').value;
    console.log(fname);

    let lname = document.querySelector('#lname').value;
    console.log(lname);

    let dob = document.querySelector('#dob').value;
    console.log(dob);

    let email = document.querySelector('#email').value;
    console.log(email);

    let psw = document.querySelector('#psw').value; 
    console.log(psw);

    if(fname === "")
    {
        document.querySelector('#errorfname').innerHTML = "Please enter first your name";
        let  selectname = document.querySelector('#fname');
        selectname.style.borderColor = "red";
        selectname.style.outlineColor = "red";

        return false;
    }
    else if(lname === "")
    {
        document.querySelector('#errorlname').innerHTML = "Please enter last your name";
        let  selectname = document.querySelector('#lname');
        selectname.style.borderColor = "red";
        selectname.style.outlineColor = "red";

        return false;
    }
    else if(dob === "")
    {
        document.querySelector('#errordob').innerHTML = "Please enter your mobile number";
        let  selectname = document.querySelector('#dob');
        selectname.style.borderColor = "red";
        selectname.style.outlineColor = "red";

        return false;
    }
    else if(dob.length !== 10)
    {
        document.querySelector('#errordob').innerHTML = "mobile number should be 10 digits";
        let  selectname = document.querySelector('#dob');
        selectname.style.borderColor = "red";
        selectname.style.outlineColor = "red";

        return false;

    }
    else if(isNaN(dob))
    {
        document.querySelector('#errordob').innerHTML = "mobile number should be number";
        let  selectname = document.querySelector('#dob');
        selectname.style.borderColor = "red";
        selectname.style.outlineColor = "red";

        return false;

    }
    else if(email === "")
    {
        document.querySelector('#erroremail').innerHTML = "Please enter your email";
        let  selectname = document.querySelector('#email');
        selectname.style.borderColor = "red";
        selectname.style.outlineColor = "red";

        return false;
    }

    else if(!(email.includes('@') && email.includes(".com")))
    {
        document.querySelector('#erroremail').innerHTML = "plse enter valid email";
        let  selectname = document.querySelector('#email');
        selectname.style.borderColor = "red";
        selectname.style.outlineColor = "red";

        return false;

    }
    
    else if(psw === "")
    {
        document.querySelector('#errorpsw').innerHTML = "Please enter your password";
        let  selectname = document.querySelector('#psw');
        selectname.style.borderColor = "red";
        selectname.style.outlineColor = "red";

        return false;
    }
    else if(!
        (
            psw.match(/[1234567890]/)
            &&
            psw.match(/[!@#$%^&*()~]/)
            &&
            psw.match(/[qwertyuiopasdfghjklzxcvbnm]/)
            &&
            psw.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)
        )
    )
    {
        document.querySelector('#errorpsw').innerHTML = "Please enter strong password";
        let  selectname = document.querySelector('#psw');
        selectname.style.borderColor = "red";
        selectname.style.outlineColor = "red";

        return false;
    }
    else if(psw !== cpsw)
    {
        window.alert("password and confirm password not match");
        document.querySelector('cpsw').value ="";
        document.querySelector('psw').value ="";
        document.querySelector('psw').focus() ="";

        return false;
    }
}

function s(arg){
    let selectinput = document.querySelector(`#${arg}`);
    selectinput.style.borderColor = "black";
    selectinput.style.outlineColor = "black";

    let selecterror = document.querySelector(`#error${arg}`);
    selecterror.innerHTML = ""
}