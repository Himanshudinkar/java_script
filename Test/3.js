function validet(){
    let psw = document.querySelector('#psw').value;
    let cpsw = document.querySelector('#cpsw').value;

    if(psw === "")
    {
        let selectpsw = document.querySelector('#psw');
        selectpsw.style.borderColor = "red";

        let selecterrorpsw = document.querySelector('#errorpsw');
        selecterrorpsw.innerHTML = "Please Enter Password";

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
        psw.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)
        )
    )
    {
        let selectpsw = document.querySelector('#psw');
        selectpsw.style.borderColor = "red";

        let selecterrorpsw = document.querySelector('#errorpsw')
        selecterrorpsw.innerHTML = "Please Enter VALID Password";

        return false;
    }

    else if(!(cpsw === psw))
    {
        window.alert(" confirm password not match password")

        document.querySelector('#cpsw').value = "";
        document.querySelector('#psw').value = "";
        document.querySelector('#psw').focus();

        return false;
    }

}

function remove(){
    let selectpsw = document.querySelector('#psw');
    selectpsw.style.borderColor = "black";

    let selecterrorpsw = document.querySelector('#errorpsw');
    selecterrorpsw.innerHTML = "";
}