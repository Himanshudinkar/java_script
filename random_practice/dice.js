let final ="";

function dicee1(){
    final = "";

    let dice = [1,2,3,4,5,6];
    let random = Math.random();
    let into = dice.length * random;
    let afterfloor = Math.floor(into);
    let ans = dice[afterfloor];
    final = ans;
    let output = document.querySelector('#output');
    output.innerHTML = final;

}
function dicee(){
    
    let userinput = parseInt(document.querySelector('#userinput').value);

    if(userinput == final)
    {
        let useroutput = document.querySelector("#useroutput");
        useroutput.innerHTML = `Congratulations, answer is ${final}`;
        useroutput.style.color = "green";
        return false;
    }
    else if(userinput != final)
    {
        let useroutput = document.querySelector("#useroutput");
        useroutput.innerHTML = `Bad Luck ! Please Try Again, answer is ${final}`;
        useroutput.style.color = "red";
        return false;
    }
    
}