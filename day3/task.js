function conditional(){
    let number1 = parseInt(window.prompt("Enter Number"));
    console.log(number1);
    let number2 = parseInt(window.prompt("Enter Number 2"));
    console.log(number2);
    let number3 = parseInt(window.prompt("Enter Number 3"));
    console.log(number3);

    if(number1 > number2)
    {
        console.log("Number 1 is Greater");
        window.alert("Number 1 is Greater");
    }
    else if(number2 > number3)
    {
        console.log("Number 2 is Greater");
        window.alert("Number 2 is Greater");
    }
    else
    {
        console.log("Number 3 is Greater");
        window.alert("Number 3 is Greater");
    }
}
conditional();