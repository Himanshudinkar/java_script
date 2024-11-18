function formValidation(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let mobile = document.querySelector('#mobile').value;
    let psw = document.querySelector('#psw').value;
    let cpsw = document.querySelector('#cpsw').value;

    if(name === "")
    {
        let errorname = document.querySelector('#errorname');
        errorname.innerHTML = " Please Enter Your Name";
        errorname.style.color = "red";

        return false;
    }
    else if(email === "")
    {
        let erroremail = document.querySelector('#erroremail');
        erroremail.innerHTML = " Please Enter Your email";
        erroremail.style.color = "red";

        
        return false;
    }
    else if (!(email.includes('@') && email.includes('.com')))
    {
        let erroremail = document.querySelector('#erroremail');
        erroremail.innerHTML = " Please Enter valid email";
        erroremail.style.color = "red";

        
        return false;
    }
    else if(mobile === "")
    {
        let errormobile = document.querySelector('#errormobile');
        errormobile.innerHTML = " Please Enter your number";
        errormobile.style.color = "red";

        
        return false;
    }
    else if(mobile.length != 10)
    {
        let errormobile = document.querySelector('#errormobile');
        errormobile.innerHTML = " mobile number should be 10 digits";
        errormobile.style.color = "red";

        
        return false;
    }
    else  if(isNaN(mobile))
    {
        let errormobile = document.querySelector('#errormobile');
        errormobile.innerHTML = " mobile number only number";
        errormobile.style.color = "red";

        return false;
    }

    else if(psw === "")
    {
        let errorpsw = document.querySelector('#errorpsw');
        errorpsw.innerHTML = "please enter password";
        errorpsw.style.color = "red";

        return false;
    }
    else if(!
        (
            psw.match(/[1234567890]/)
            &&
            psw.match(/[!@#$%^&*()]/)
            &&
            psw.match(/[qwertyuiopasdfghjklzxcvbnm]/)
            &&
            psw.match(/[qwertyuiopasdfghjklzxcvbnm]/)
        )
    )
    {
        let errorpsw = document.querySelector('#errorpsw');
        errorpsw.innerHTML = "please make strong password";
        errorpsw.style.color = "red";

        return false;
    }
    else if(psw !== cpsw)
    {
        window.alert("password and confirm password not match");
        document.querySelector('#cpsw').value ="";
        document.querySelector('#psw').value ="";
        document.querySelector('#psw').focus();

        return false;
    }

    let ob = {
        fullname : name,
        emailid : email,
        mobilenumber : mobile,
        password : psw,
        confirmpassword : cpsw
    }
    localStorage.setItem("username",JSON.stringify(ob));

    let m = JSON.parse(localStorage.getItem("username"));
    console.log(m)

    let myname = document.querySelector('#myname');
    myname.innerHTML = m.fullname;

    let myemail = document.querySelector('#myemail');
    myemail.innerHTML = m.email;

    let mymobile = document.querySelector('#mymobile');
    mymobile.innerHTML = m.mobilenumber;



}

 function s(arg){
       let selecterror = document.querySelector(`#error${arg}`);
       selecterror.innerHTML = "";
    }
