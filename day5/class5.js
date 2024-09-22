function salary(){
    let sal = parseFloat(window.prompt("Enter Your salary"));
    console.log(sal);

    let tax = 0;

    if(sal < 350000)
    {
        window.alert("you dont want to pay tax");
    }
    else if(sal > 350000 && sal < 800000)
    {
        tax = (sal/100) * 10;
        window.alert("10% tax = " + tax + " on your packages");
    }
    else if(sal > 800000)
    {
        tax = (sal/100) * 17;
        window.alert("17% tax = " + tax + " on your packages");
    }
    else
    {
        window.alert("invalid input");
    }
}
salary();