function chake1(){
    
    let res = window.confirm("don you want to log out");
    console.log(res);

    if(res)
    {
        window.location.href="login.html";
    }
    else
    {
        window.alert("invalid keys");
    }
}
chake1();
