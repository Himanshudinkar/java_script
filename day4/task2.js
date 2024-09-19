function light(){
    let reding = parseInt(window.prompt("Enter Your Reding"));
    console.log(reding);

    let bill = 0;

    if(reding >= 1 && reding <= 100)
    {
        bill = reding * 3;
        window.alert("your bill is = " + bill);
    }
    else if(reding >= 101 && reding <= 200)
    {
        bill = reding * 5;
        window.alert("your bill is = " + bill);
    }
    else if(reding >= 201 && reding <= 500)
    {
        bill = reding * 7;
        window.alert("your bill is = " + bill);
    }
    else if (reding > 500)
    {
        bill = reding * 10;
        window.alert("your bill is = " + bill);
    }
    else
    {
        window.alert("invalid reding");
    }
}
light();

function cheking(){
    let chek = window.confirm("do you logout");
    console.log(chek);

    if(chek)
    {
        window.location.href = "login.html";
    }
    else
    {
        window.alert("invalid key");
    }
}
cheking();