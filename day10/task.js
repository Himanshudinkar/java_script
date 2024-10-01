function sum(){
    let number1 = parseInt(window.prompt("Enter Number 1"));
    let number2 = parseInt(window.prompt("Enter Number 2"));

    let totel = parseInt(window.prompt("enter 1 to 4 for calculation"));

    switch(totel)
    {
        case 1:
            {
                window.alert(number1+number2);
            }
    }
}
sum();

