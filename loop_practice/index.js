function primeno(){
    let prime = parseInt(document.querySelector('#prime').value);

    let i = prime - 1;

    let f = false;

    do{
        if(prime % i == 0)
        {
            f = true;
            break;
        }
        i--;
        
    }while(i>1);

        if(f === false)
        {
            let output = document.querySelector('#output');
            output.innerHTML = "This is prime number";

            return false;
        }
        else
        {
            let output = document.querySelector('#output');
            output.innerHTML = "this is not prime number";

            return false;
        }


}