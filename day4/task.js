function conditional(){
    let number = parseInt(window.prompt("Enter Number"));

    if(number % 2 === 0)
    {
        window.alert("Number is even" + number);
    }
    else
    {
        window.alert("Number is odd" + number);
    }
}
conditional();